import { Networks, OIP } from 'js-oip';
import { ECPair, payments } from 'bitcoinjs-lib';
import config from '../../../config.js';
import {
  setFloBalance,
  setFloExchangeRate,
  txError,
  txPending,
  txSuccess,
  purchase_record
} from './creators';
import axios from 'axios'
import { updatePurchasedTxid } from '../Autopay/creators'

const { floMainnet, floTestnet } = Networks;

const network = {
  flo_mainnet: floMainnet.network,
  flo_testnet: floTestnet.network
};
function getPubAddress(wif, useNetwork = 'mainnet') {
  let floNetwork =
    useNetwork === 'mainnet' ? network.flo_mainnet : network.floTestnet;
  const EC = ECPair.fromWIF(wif, floNetwork);
  return payments.p2pkh({ pubkey: EC.publicKey, network: floNetwork }).address;
}
//! ****************************************************TIP Function **************************************************/
export const tip = ({
  paymentAddr,
  paymentTemplate,
  tipAmountSat,
  tV
}) => async (dispatch, getState) => {
  const { Platform, Wallet } = getState();
  const wallet = Wallet.xWallet;
  if (!wallet) {
    console.error(
      `Failed to send tip. private key is probably not set. Wallet undefined`
    );
    return;
  }
  // paymentTemplate holds the sugTip array
  // tV value is passed up from child PaymentRow depending on which button is clicked
  // If template doesnt have sugTip, it will default to .2 cents in PaymentRow

  const TIP_FIAT = tV;
  console.log(`Tip amount: $${tV}`);
  const TIP_FLO_SAT = ((TIP_FIAT * 1e8) / (Wallet.floExchangeRate * 1e8)) * 1e8;
  //console.log(TIP_FLO_SAT, Wallet.floExchangeRate);

  let platformAddr;
  //! *************** There is currently no platform, when not using a platform we need to change this to ignore the platform cut. It is currently taking a cut
  // if (Platform.registered) {
  //   // console.log(Platform.registered, Platform.platformData.floPaymentAddress)
  //   platformAddr = Platform.platformData.floPaymentAddress;
  // }

  let amount = tipAmountSat || Math.floor(TIP_FLO_SAT);
  // console.log('amount', amount);

  let pubCut;
  let pubValue;
  let platformValue;
  let toPlatform;

  if (paymentTemplate && paymentTemplate.platformCut) {
    pubCut = (100 - paymentTemplate.platformCut) / 100;
    pubValue = Math.floor(amount * pubCut);
    platformValue = Math.floor(amount * (paymentTemplate.platformCut / 100));
    toPlatform = {
      address: platformAddr,
      value: platformValue
    };
  } else pubValue = amount;

  // console.log(pubCut, pubValue, platformValue)

  const toPublisher = {
    address: paymentAddr,
    value: pubValue
  };

  let outputs = [toPublisher, toPlatform];
  // console.log(outputs);
  let txid;
  try {
    txid = await dispatch(sendTx(outputs));
  } catch (err) {
    console.error(err);
    return;
  }

  // console.log('sent tip: ', txid)
  setTimeout(() => {
    dispatch(getBalance());
  }, 5000);
  return txid;
};
//! ******************************************* END TIP Function ********************************/

export const sendTx = (outputs) => async (dispatch, getState) => {
  const { Wallet } = getState();
  const xWallet = Wallet.xWallet;
  if (!xWallet) {
    console.error(
      `Failed to send transaction. private key is probably not set. Wallet undefined`
    );
    return;
  }

  dispatch(txPending());
  let txid;
  try {
    txid = await xWallet.sendTx(outputs);
  } catch (err) {
    dispatch(txError(err));
    throw Error(`Failed to sendTx: \n ${err}`);
  }
  dispatch(txSuccess());
  console.log(`tx sent: `, txid);
  return txid;
};

export const getBalance = (addr) => async (dispatch, getState) => {
  const { Wallet } = getState();
  const xWallet = Wallet.xWallet;
  if (!xWallet) {
    console.error(
      `Failed to get balance. private key is probably not set. Wallet undefined`
    );
    return;
  }
  let address = addr || getPubAddress(config.privatekey);
  let explorer = xWallet.explorer;
  let res;
  try {
    res = await explorer.getAddress(address);
  } catch (err) {
    console.error(`failed to get address from explorer: \n ${err}`);
    return;
  }
  dispatch(setFloBalance(res.balanceSat));
  return res.balanceSat;
};

export const getExchangeRate = () => async (dispatch, getState) => {
  const { _exchange } = getState().Wallet;
  let xr;
  try {
    xr = await _exchange.getExchangeRate('flo', 'usd');
  } catch (err) {
    console.log(`Failed to get exchange rate: \n ${err}`);
    return;
  }
  dispatch(setFloExchangeRate(xr));
  return xr;
};
//! ****************************************************PurchaseRecord Function **************************************************/

export const purchaseRecord = ({
  txid,
  terms,
}) => async (dispatch, getState) => {
  const { Platform, Wallet } = getState();
  const wallet = Wallet.xWallet;
  if (!wallet) {
    console.error(
      `Failed to send tip. private key is probably not set. Wallet undefined`
    );
    return;
  }
  
  const response = await axios.get(`https://api.oip.io/oip/o5/location/request?id=${txid}&terms=${terms}`)

  const { valid_until, pre_image, } = response.data

  const res = await axios.get(`https://api.oip.io/oip/o5/record/get/${txid}`)

  const { amount, destination } = res.data.results[0].record.details.tmpl_DE84D583

  const paymentAddr = destination;

  console.log("PURCHASE REFCORD!")
  let payment_txid;


  try {

    let output = {
      address: paymentAddr,
      value: (amount * 1e8) //satoshis
  }

  payment_txid = await dispatch(sendTx(output));

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    
    await sleep(2000)

  } catch (err) {
    console.error(err);
    return {'error': err}
  }


  return dispatch(updatePurchasedTxid({txid, payment_txid, terms }))

  // setTimeout(() => {
  //   dispatch(getBalance());
  // }, 5000);

};



//todo: To grab previous purchases:  find amd search addresses from commerical content; in wallet's transactions if so, grab the txid. push that into...
// the global state.autoPay.purchased. 
// UseEffect will call proofOfPurchase and take care of the rest.

export const proofOfPurchase = ({
  payment_txid,
  txid,
  terms
}) => async (dispatch, getState) => {
  const { Platform, Wallet } = getState();
  const wallet = Wallet.xWallet;
  if (!wallet) {
    console.error(
      `Failed to send tip. private key is probably not set. Wallet undefined`
    );
    return;
  }

  const response = await axios.get(`https://api.oip.io/oip/o5/location/request?id=${txid}&terms=${terms}`)

  const { valid_until, pre_image, } = response.data

  let signature = wallet.signMessage(pre_image)
  let publicAddress = getPubAddress(config.privatekey)
  
  const body = { valid_until, id: txid, term: terms, pre_image, signature, payment_txid, signing_address: publicAddress }

  try {
    const res = await axios.post(`https://api.oip.io/oip/o5/location/proof?id=${txid}&terms=${terms}`, body)

    return res.data
  } catch(error) {
    console.log(error)
  }
}
//! ****************************************************END PurchaseRecord Function **************************************************/



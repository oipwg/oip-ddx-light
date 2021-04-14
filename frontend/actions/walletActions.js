// import axios from 'axios';
import { decrypt } from '../helpers-functions/crypto';
import * as bip32 from 'bip32'
import { Account, Networks, Wallet } from '@oipwg/hdmw'

import {
    WALLET_LOADED,
    WALLET_LOADING,
    // WALLET_ERROR,
    // WALLET_SUCCESS,
    GET_BALANCE,
    GET_EXCHANGE_RATE,
} from './types';

export const loadWallet = (encryptedMnemonic, password) => async dispatch => {
  dispatch({
      type: WALLET_LOADING,
  });

  const mnemonic = decrypt(encryptedMnemonic, password);

  const getWallet = new Wallet(mnemonic, { supported_coins: ['flo', 'raven', 'bitcoin'] });

  const flo = getWallet.getCoin('flo')
  const bitcoin = getWallet.getCoin('bitcoin')
  const raven = getWallet.getCoin('raven')

  let coins = [flo, bitcoin, raven]

  let account1 = {
      flo: 0,
      bitcoin: 0,
      raven: 0
  }

  account1 = coins.map(async (coin) => {
      const account = coin.getAccount(1);
      const prv = account.getExtendedPrivateKey();
      const accountM = new Account(bip32.fromBase58(prv, Networks[coin.coin.name].network), Networks[coin.coin.name], false);
      accountM.discoverChains();
      return { [coin.coin.name]: await accountM.getBalance() };
  })

  await Promise.all(account1).then((val) => {
          val.reduce((result, current) => {
          return Object.assign((result, current), {})
      })
  })


  dispatch({
      type: WALLET_LOADED,
      payload: getWallet,
  });
  
  getWallet.getCoinBalances().then(res => {   
      dispatch({
          type: GET_BALANCE,
          payload: res,
      });
  });

  getWallet.getExchangeRates(['flo', 'bitcoin', 'raven'], 'usd').then(res =>
      dispatch({
          type: GET_EXCHANGE_RATE,
          payload: res,
      })
  );

};


export const getBalance = (wallet) => dispatch => {
  wallet.getCoinBalances({discover: true}).then(res => {
      dispatch({
          type: GET_BALANCE,
          payload: res,
      });
  });
}


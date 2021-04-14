require("dotenv").config();
const { Modules } = require("js-oip");
const wallet = require("./Wallet");
const { AES } = require("crypto-js");
const fetch = require("node-fetch");
const basic = {
  myMainAddress: "",
  descriptor:
    "Ck4KB3AucHJvdG8SEm9pcFByb3RvLnRlbXBsYXRlcyInCgFQEgwKBG5hbWUYASABKAkSFAoMZmxvQmlwNDRYUHViGAIgASgJYgZwcm90bzM=",
  name: "tmpl_433C2783",
  payload: {
    name: "",
    floBip44XPub: "",
  },
};
/*****************************STATE SECTION******************************/
const { createMnemonic, createRegistration, publishRecord } = wallet;

const encrypt = (nmonic, password) => {
  let encryption = AES.encrypt(nmonic, password).toString();
  return encryption;
};

const sendMulti = async (mpx) => {
  let myMainAddress = wallet.myMainAddress;
  localStorage.setItem("userAddress", JSON.stringify(myMainAddress));

  let floDataArr = [];

  const sendFloPost = async (floData) => {
    const response = await fetch(`http://localhost:5000/sendflo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signed64: floData,
      }),
    });
    const json = await response.json();
    return json;
  };
  // Signed64 is less than 1040
  if (!Array.isArray(mpx)) {
    // let txid = await sendFloPost(mpx);
    // floDataArr.push(txid);
  } else {
    mpx[0].setAddress(myMainAddress.getPublicAddress());
    let sig = myMainAddress.signMessage(mpx[0].getSignatureData());
    mpx[0].setSignature(sig);

    let floData1 = mpx[0].toString();

    let referenceTxid = await sendFloPost(floData1);

    //First post request has come back ok, start the loop post request
    if (referenceTxid) {
      for (let i = 1; i < mpx.length; i++) {
        mpx[i].setReference(referenceTxid.txid);
        mpx[i].setAddress(myMainAddress.getPublicAddress());
        let sig = myMainAddress.signMessage(mpx[i].getSignatureData());
        mpx[i].setSignature(sig);
        let floDataX = mpx[i].toString();
        let txid = await sendFloPost(floDataX);

        floDataArr.push(txid);
      }
    }
  }
  return floDataArr;
};

// store wallet record
let walletRecord = {
  mnemonic: "",
  encryption: "",
  signed64: "",
};

// verify it is working fine
const setWalletRecord = (data) => {
  return { ...walletRecord, data };
};

const sendToBlockChain = (signed64, walletdata) => {
  if (signed64.length > 1040) {
    let mpx = new Modules.MultipartX(signed64).multiparts;
    if (!Array.isArray(mpx)) {
      return console.log("uh oh", mpx);
    }
    getTxid(mpx);
  } else {
    getTxid(signed64);
  }
  function getTxid(mpx) {
    sendMulti(mpx)
      .then((txidArray) => {
        walletdata.signed64 = txidArray;
      })
      .catch((err) => "Multipart Error: " + err);
  }
};

const walletData = (password = "mypass", username = "useName", _id) => {
  const walletdata = {};
  createMnemonic()
    .then((mnemonic) => {
      // AES signed and save to state
      const hash = encrypt(mnemonic, password);
      walletdata.mnemonic = hash;

      setWalletRecord({ mnemonic: mnemonic, encryption: hash });
      basic.payload.name = username;
      let registration = [basic];

      return createRegistration(registration);
    })
    .then((data) => {
      walletdata.pub = data.pubkeyTommy;
      return publishRecord(data);
    })
    .then((signed64) => {
      sendToBlockChain(signed64, walletdata);
    })
    .then(() => {
      fetch(`http://localhost:5000/users/storePubAndWallet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mnemonic: walletdata.mnemonic,
          pub: walletdata.pub,
          userID: _id,
        }),
      });
    })
    .catch((err) => console.log("WalletData " + err));
};

// walletData();

module.exports = walletData;
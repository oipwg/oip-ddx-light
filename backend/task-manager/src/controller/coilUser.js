const User = require("../models/user.js");
//const Youtube = require("../models/youtube.js");
//const userVideo = require("../models/userVideo");
//const twitterPost = require("../models/twitterPost");
const bcrypt = require("bcrypt");
//const client = require("../../../client");
const JWT = require("jsonwebtoken");
const crypto = require("crypto");
const jwtDecode = require("jwt-decode");
const sendMail = require("../../mailer");
const auth = require("../middleware/auth");
//const { checkTwitterToken } = require("../../../twitter/helpers");
const sendActivationEmail = require("../helper/ActivationEmail");
const signupEmail = require("../helper/signupEmail");
const resetPasswordEmail = require("../helper/resetPasswordEmail");
const moment = require("moment");

const ENCRYPTION_CONST = 8;

const wallet = require("../helper/UserWallet");
const CryptoJS = require("crypto-js");
const AES = require("crypto-js/aes");
const HDMW = require("oip-hdmw");
const fetch = require("node-fetch");

const config = require("../../../config.json")


const {
  JWT_SECRET,
  COIL_CLIENT_ID,
  COIL_STATE,
  COIL_CLIENT_SECRET
} = process.env;

const coilAuthUrl = "https://coil.com/oauth/auth?"

const params = new URLSearchParams({
  response_type: "code",
  scope: "simple_wm openid",
  client_id: COIL_CLIENT_ID,
  state: COIL_STATE,
  redirect_url: config.REDIRECT_URL
})

exports.loginPost = async (req, res, next) => {
  //console.log(coilAuthUrl+params.toString())
  try {
    const responseUrl = coilAuthUrl+params.toString()
    res.send(responseUrl)
  } catch (err) {
    console.log(err)
  }
}

exports.loginTokenPost = async (req, res, next) => {
  try {
    
    const encodedAuth = Buffer.from(COIL_CLIENT_ID + ":" + encodeURIComponent(COIL_CLIENT_SECRET)).toString('base64')

    const tokenRequest = await fetch("https://coil.com/oauth/token", { //https://dev.oip.io/api/users/login
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + encodedAuth
      },
      body: {
        code: req.query.code,
        grant_type: "authorization_code",
        redirect_url: config.REDIRECT_URL
      }
    });

    res.send(tokenRequest)
  } catch (err) {
    console.log(err)
  }
}


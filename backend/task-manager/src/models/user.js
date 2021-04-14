const mongoose = require("mongoose");

//User schema, all fields are required currently

const userSchema = new mongoose.Schema(
  {
    displayName: { 
      type: String,
      default: ''
    },
    email: {
      type: String,
      lowercase: true,
      unique: false,
      //match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ //This is regex for email validation
    },
    password: { 
      type: String, 
      required: true,
    },
    mnemonic: {
      type: String,
      default: ''
    },
    wallet: {
      btc: {
          xPrv: { type: String, default: ''}
      },
      flo: {
          xPrv: { type: String, default: ''}
      },
      rvn: {
          xPrv: { type: String, default: ''}
      },
    },
    publicKey: { 
      type: String, 
      default: ''
    },
    date: {
      type: Date,
      default: Date.now,
    }
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
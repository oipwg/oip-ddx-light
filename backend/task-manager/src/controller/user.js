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

const UserWallet = require("../helper/Wallet")

const {
  JWT_SECRET
} = process.env;

const users = [
  { id: 1, name: 'Alex', email: 'alex@mail.com', password: 'secret' },
  { id: 2, name: 'John', email: 'john@mail.com', password: 'secret' },
  { id: 3, name: 'Jasmine', email: 'jasmine@mail.com', password: 'secret' }
]

let signToken = user => {
  return JWT.sign(
      {
          iss: 'DDX-light',
          id: user._id,
          iat: new Date().getTime(), // curent time
          exp: new Date().setDate(new Date().getDate() + 1), //current time + 1 day ahead
      },
      JWT_SECRET
  );
};


exports.activate_user = async (req, res, next) => {
  try {
    const { activeToken } = req.params;
    const user = await User.findOne({
      activeToken: req.params.activeToken,
    });
    if (!user) {
      return res.status.json({
        message: {
          title: "fail to activate",
          content: "Your activation link is invalid, please register again ",
          activated: false,
        },
      });
    }

    if (user.active) {
      return res.status(200).json({
        message: {
          sucess: true,
          content: "user already activated",
          activated: true,
        },
      });
    }

    //  check if the expire time > the current time       activeExpires: {$gt: Date.now()}
    if (new Date() - user.activeExpires > 0) {
      return res.json({
        message: {
          title: "fail to activate",
          content: "Your activation link is invalid, please register again ",
          activated: false,
        },
      });
    }

    user.active = true;
    user.save(function (err, user) {
      if (err) return next(err);

      // send activation welcome Email
      sendActivationEmail(user);

      res.json({
        message: {
          title: "Activated ",
          content: "Acccount activated sccuessfully",
          activated: true,
        },
      });
    });
  } catch (error) {
    console.log("something went wrong", error);
  }
};

exports.user_get_by_name = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.params.user }).select({
      _id: 1,
      email: 1,
      displayName: 1,
      memberSince: 1,
      twitterTokens: 1,
      rT: 1,
      channelName: 1,
      createdAt: 1,
    });

    if (!user) {
      return res.json({ success: true, msg: "user record not found" });
    }

    const { twitterTokens, rT, ...rest } = user._doc;

    rest.twitter = twitterTokens.screen_name;
    rest.youtube = rT.length > 0;
    const { screen_name } = user.twitterTokens;

    // const _userVideo = await userVideo.find({ userId: user.id });
    const _userVideo = await userVideo.find();
    let ownVideo;
    if (_userVideo.length) {
      ownVideo = await _userVideo.filter((video, index) => {
        if (video.userId.toString() == user._id.toString()) {
          return video;
        }
      });
    }

    const _twitterPost = await twitterPost.find();
    let _posts;
    // console.log("_twitterPost", _twitterPost);
    if (_twitterPost.length) {
      _posts = await _twitterPost.filter((post, index) => {
        if (post.author.toString() == user._id.toString()) {
          return post;
        }
      });
    }
    let collaborated;
    if (_userVideo.length) {
      collaborated = await _userVideo.filter((video, index) => {
        let _filter = video.collaborators.find(
          (coll) => coll.verified && coll.user === user.displayName
        );
        if (_filter) {
          return video;
        }
      });
    }

    // res.json({ user });
    return res.json({
      msg: "ok",
      user: rest,
      params: req.params.user,
      ownVideo,
      collaborated,
      twitter: _posts,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

// TODO: add more field as needed for front end
exports.user_get = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.userID }).select({
      displayName: 1,
      email: 1,
      _id: 1,
    });
    res.json({ user });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

exports.delete_user = async (req, res) => {
  try {
    await User.deleteOne({ activeToken: req.params.activeToken });
    res.json({
      message: {
        content: "delete",
        success: true,
      },
    });
  } catch (error) {
    return res.json({
      message: {
        content: "Something went wrong",
        success: false,
      },
    });
  }
};

exports.signupPost = async (req, res, next) => {
  try {
            
    var { displayName, _id, email, password, mnemonic, wallet } = req.body;

    if (!mnemonic) {
      mnemonic = await UserWallet.createMnemonic()
    } 

    console.log("this is mnemonic: ", mnemonic);
    

    // check for user in DB
    const foundUser = await User.findOne({
      $or: [{ displayName: displayName }, { email: email }],
    });
    console.log("00000000000000000000000000000000000000000000 - 1");
    if (foundUser) {
      return res.status(409).json({
        error: "Display name or email already exists 00000000000",
        success: false,
        msg: "Display name or email already exists 00000000000",
      });
    } else {
      console.log("00000000000000000000000000000000000000000000 - 2");
      const passHash = await bcrypt.hash(password, ENCRYPTION_CONST)
      const mnemonicEncrypt = AES.encrypt(mnemonic, password).toString();
      const user = new User({
        displayName: displayName,
        email: email,
        password: passHash,
        mnemonic: mnemonicEncrypt
        //memberSince: Date.now(),
      });
      user.save()
      /*
      bcrypt.hash(mnemonic, ENCRYPTION_CONST,(err2, mnemonicHash) => {
        if (err2) {
          return res.status(500).json({
            error: err2,
            success: false,
            msg: "something went wrong, try again later",
          });
        } else {
          const user = new User({
            displayName: displayName,
            email: email,
            password: passHash,
            mnemonic: mnemonicHash
            //memberSince: Date.now(),
          });
          user.save()
        }
      })
      */
  }

    // use this to grab addresses

    // let accountMaster = bip32.fromBase58(xPrv, Networks.flo.network)

    // let account = new Account(accountMaster, Networks.flo, false);

    // const EXTERNAL_CHAIN = 0
    // for (let i = 0; i < 25; i++) {
    //   console.log(`${i}: ${account.getAddress(EXTERNAL_CHAIN, i).getPublicAddress()}`)
    // }
    res.status(200).json({
        //token: signToken(newUser),
        msg: "Great Success!"
    });
  } catch (error) {
    console.log(error);
  }
}

exports.loginGet = async (req, res, next) => {
  //req.session.userId = 
}

exports.loginPost = async (req, res, next) => {
  const user = await User.find({displayName: req.body.displayName}).exec()
  if(user.length < 1) {
    return res.status(401).json({
      message: 'Auth failed 1'
    })
  }
  const result = await bcrypt.compare(req.body.password, user[0].password)

  console.log(user)
  
  if (result) {
    const token = JWT.sign(
      {
        email: user[0].email,
        userId: user[0]._id
      }, 
      JWT_SECRET, 
      {
        expiresIn: "1h"
      }
    )
    //res.send(user[0].name)
    //req.session.userId = user[0]._id;
    return res.status(200).json({
      message: 'Auth Successful',
      token: token,
      displayName: user[0].displayName,
      user: user[0]
    })
  }
  res.status(401).json({
    message: 'Auth failed 3'
  })
}

exports.logoutPost = async (req, res, next) => {

}

/***USER CREATION,Currently hashes password using bcrypt, it also checks if email was used and wont let another user be created with the same email twice */
exports.user_sign_up = async (req, res) => {
  console.log("This message is contained within USER_SIGN_UP");
  console.log(req.body);
  const { displayName, email, password } = req.body;
  
  try {
    const user = await User.findOne({
      $or: [{ displayName: displayName }, { email: email }],
    });

    if (user) {
      return res.status(409).json({
        error: "Display name or email already exists",
        success: false,
        msg: "Display name or email already exists",
      });
    } else {
      bcrypt.hash(password, ENCRYPTION_CONST, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err,
            success: false,
            msg: "something went wrong, try again later",
          });
        } else {
          const user = new User({
            displayName: displayName,
            email: email,
            password: hash,
            //memberSince: Date.now(),
          });
          console.log("YEET 1");
          
          user
            .save()
            .then(() => {
              console.log("YEEEEEET 2");
              
              // Generate 20bit activation code
              crypto.randomBytes(20, function (err, buf) {
                // Ensure the activation code is unique.
                user.activeToken = user._id + buf.toString("hex");

                user.activeExpires = moment().add(1, "days");
                var link = `${process.env.APP_URL_build}account/active/${user.email}/${user.activeToken}/${user.activeExpires} `;
                signupEmail(user, link);

                user.save().then(() => {});

                // return res.json(user);
              });

              // Issue token
              req.session.userId = user._id;
              const payload = { userID: user["_id"] };
              const token = JWT.sign(
                {
                  payload,
                },
                process.env.SECRET_CODE_JWT,
                { expiresIn: Math.floor(Date.now() / 1000) + 60 * 60 * 24 }
              );

              wallet(password, displayName, user._id);

              res.status(201).json({
                success: true,
                createdUser: user,
                token: token,
              });
            })
            .catch((err) => {
              res.status(500).json({
                error: err,
                success: false,
                msg: "something went wrong",
              });
            });
        }
      });
    }
  } catch (e) {
    console.log("something went wrong", e);
  }
};
/***User creation end*/

/***user update email */
exports.user_email_update = (req, res) => {
  // TODO! seems not in used.
  // to be verify
  res.send({ msg: "ok", ID: req.userID });
};
/***user update email end */

/***This is called after user is created without errors, it then stores the create wallet and pubKey */
exports.user_store_wallet_pub = async (req, res) => {
  try {
    // TODO! session.id or token reivew what
    const { mnemonic, pub, userID } = req.body;
    let user = await User.findOneAndUpdate(
      { _id: userID },
      { $set: { mnemonic: mnemonic, pub: pub } }
    );
    res.status(200).json({ success: true, msg: "All Good!" });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server Error" });
  }
};

/******Login GET */
exports.user_login_get = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.userID });
    if (!user) {
      res.status(400).send({ error: "User Does not exist" });
    }

    // If session id doesn't exist skips redirects back to login page
    if (!userId) {
      res.redirect("/");
    } else {
      // Issue token
      const payload = { userID: user["_id"] };
      const token = JWT.sign(
        {
          payload,
        },
        process.env.SECRET_CODE_JWT,
        { expiresIn: "1d" }
      );
      res.status(201).send({ token: token, user: user });
    }
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(500).json({ success: false, msg: "server Error" });
  }
};
/****Login Get End */

/**Login POST */
exports.user_login_post = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ $or: [{ email }, { displayName: email }] });
    if (!user) {
      return res.status(401).json({ msg: "Please enter correct credentials" });
    } else if (!user.active) {
      if (user.activeExpires - new Date()) {
        return res.status(401).json({
          msg: "It Seems activation code is expired, please try again",
          activated: false,
        });
      }
      return res.status(401).json({
        msg:
          "It Seems you have not activated your account, please activate from your email",
        activated: false,
        user: user,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(200).json({ msg: "Please enter correct credentials" });
    }
    if (req.body.remember) {
      req.session.cookie.maxAge = 20000000000; //If they want to be remembered, its set maxAge to a ~8 months
    }
    // Issue token
    const payload = { userID: user["_id"] };
    const token = JWT.sign(
      {
        payload,
      },
      process.env.SECRET_CODE_JWT,
      { expiresIn: "1d" }
    );
    req.session.userId = user["_id"];
    res.status(200).json({
      msg: "this good",
      mnemonic: user.mnemonic,
      token: token,
      user: user,
    });
  } catch (e) {
    res.redirect("/?error=" + e);
  }
};

/**Login POST End*/

/** forgot password */
exports.user_forgot_pwd = async (req, res, next) => {
  try {
    const email = req.body.email;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      const buff = await crypto.randomBytes(30);
      activeToken = buff.toString("hex");
      // valid for one days
      activeExpires = moment().add(1, "days");

      var link = `${process.env.APP_URL_build}users/account/forgot-password/${email}/${activeToken}/${activeExpires} `;

      var doc = await User.findOneAndUpdate(
        { email: email },
        {
          $set: {
            activeToken: activeToken,
            activeExpires: activeExpires,
          },
        },
        {
          new: true,
        }
      );
      resetPasswordEmail(existingUser, link);
      res.status(201).json({ success: true, msg: "user Exist" });
    } else {
      res.status(404).json({
        success: true,
        msg: "user do not exist",
      });
    }

    // res.json({ success: false, msg: "user forgot passwrod" });
  } catch (error) {
    console.log("something went wrong", error);
  }
};

exports.verify_reset_link = async (req, res, next) => {
  const { email, activeToken, expiryTime } = req.params;

  // check time
  //  check if the expire time > the current time       activeExpires: {$gt: Date.now()}
  if (new Date() - expiryTime > 0) {
    return res.json({
      success: false,
      message: {
        title: "fail to reset Password",
        content: "It seems the reset password in invalid ",
        reset: false,
      },
    });
  }
  // check the user with activetoken

  const user = await User.findOne({
    activeToken: activeToken,
  });
  if (!user) {
    return res.redirect(
      `${process.env.APP_URL_build}reset-password?token=${activeToken}&valid=false&user=${email}`
    );
    // return res.status(401).json({

    //   message: {
    //     title: "fail to reset Password",
    //     content: "It seems the reset password in invalid ",
    //     reset: false,
    //   },
    // });
  }

  // here redirect user to reset password page
  return res.redirect(
    `${process.env.APP_URL_build}reset-password?token=${activeToken}&valid=true&user=${email}`
  );
};

exports.reset_password = async (req, res, next) => {
  try {
    const { email, token, valid, password } = req.body;
    const user = await User.findOne({ activeToken: token, email: email });
    if (!valid) {
      return res
        .status(400)
        .json({ success: false, msg: "something went wrong" });
    }
    if (!user) {
      return res.status(400).json({ success: false, msg: "record not found" });
    }

    // change password

    const passHash = await bcrypt.hash(password, 8);
    if (!passHash) {
      return res.status(500).json({ success: false, msg: "Server Error" });
    }
    user.password = passHash;
    const buff = await crypto.randomBytes(30);
    activeToken = buff.toString("hex");
    // dont allow user to use same link again for activation
    user.activeToken = activeToken;
    await user.save();

    res.json({ success: true, msg: "ok" });
  } catch (error) {
    console.log("something went wrong", error);
  }
};
/****Reset password */
/****Also set newly encrypted mnemoic with new pw as secret key */
exports.user_resetpw = async (req, res) => {
  try {
    // TODO change to auth
    //decode token first
    var decoded = await jwtDecode(req.headers["authorization"]);
    const { userID } = decoded.payload;

    const pass = req.body.password;
    const mnemonic = req.body.encryption;
    bcrypt.hash(pass, 8, (err, hash) => {
      User.findOneAndUpdate(
        { _id: userID },
        { $set: { password: hash, mnemonic: mnemonic } }
      ).then(() => console.log(hash));
    });
  } catch (error) {
    console.log("Errorr");
  }
};
/****Reset password End*/

const decodeToken = async (req) => {
  try {
    //decode token first
    var decoded = await jwtDecode(req.headers["authorization"]);
    const { userID } = decoded.payload;
    return userID;
  } catch (error) {
    console.log("Errorr", error);
    return false;
  }
};
//Retrieves the stored refreshToken and sets it in the client.js so the accessToken can be refreshed
/******Remember and rT GET */
exports.user_rt = async (req, res) => {
  const userID = await decodeToken(req);

  try {
    const rememberInfo = await User.findOne(
      {
        _id: userID,
      },
      ["rT"]
    );
    let { rT } = rememberInfo;

    client.refresh(userID, rT);
    const aT = await client.getNewAcc(userID);

    res.header("authorization", aT);
    return res.status(200).json({ aT: aT });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, msg: "Server Error", error: error });
  }
};
exports.user_rt_by_id = async (req, res) => {
  //   const userID = await decodeToken(req);

  // TODO! handle invalid/expire/rovoke tokens
  try {
    const _user = await User.findOne({ _id: req.headers["owner"] });

    if (!_user) {
      return res
        .status(200)
        .json({ success: false, msg: "user record not found" });
    }

    let { rT } = _user;

    if (rT) {
      client.refresh(_user._id, rT);
      const aT = await client.getNewAcc(_user._id);

      res.header("authorization", aT);
      //   res.header("videoID", temp);
      return res.status(200).json({
        success: true,
        authorization: aT,
        publisherName: _user.displayName,
      });
    } else {
      res.status(200).json({ success: false, msg: "user record not found" });
    }
    // return res.status(200).json({ ref_token: rT });
  } catch (error) {
    res.status(500).send({ success: false, msg: "Server Error", error: error });
  }
};

/******Get rT value*/
exports.user_getrT = async (req, res, next) => {
  const userID = await decodeToken(req);
  try {
    const remember = await User.findOne(
      {
        _id: userID,
      },
      { rT: 1, channelName: 1, twitterTokens: 1 }
    );
    const {
      rT,
      channelName,
      twitterTokens: { screen_name },
    } = remember;

    res.json({
      rT,
      channelName: channelName,
      screen_name,
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server Error", error: error });
  }
};
/****get rT Get End */

/****Delete rT from DB */
exports.user_deleterT = async (req, res) => {
  try {
    const { rt } = req.body;

    client.getOuttaHere(req.userID);
    const remember = await User.findOneAndUpdate(
      { _id: req.userID },
      { $set: { rT: "", channelName: "" } }
    );
    // const youtube = await userVideo.findOneAndUpdate(
    //   { userId: req.userID },
    //   { $set: { channelName: "" } }
    // );
    res.removeHeader("Authorization");
    res.status(201).json({
      msg: "Signed out of Youtube",
    });
  } catch (error) {
    res.status(500).send({ success: false, msg: "Server Error" });
  }
};

/****End Delete rT from DB */

/******Get mnemonic from db*/
exports.user_getmnemonic = async (req, res) => {
  try {
    var decoded = await jwtDecode(req.headers["authorization"]);
    const { userID } = decoded.payload;
    const remember = await User.findOne(
      {
        _id: userID,
      },
      "mnemonic"
    );
    const { mnemonic } = remember;
    res.status(201).json({
      mnemonic,
    });
  } catch (error) {
    console.log("something went wrong", error);

    res.status(500).send({ success: false, msg: "Server Error" });
  }
};
/****Get mnemonic from db End */

/**Fetch password to compare before reset */
exports.user_pw_compare = async (req, res) => {
  try {
    const { password } = req.body;
    var decoded = await jwtDecode(req.headers["authorization"]);
    const { userID } = decoded.payload;
    let user = await User.findOne(
      {
        _id: userID,
      },
      ["password", "mnemonic"]
    );
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(409)
        .json({ success: false, msg: "Incorrect Password" });
    }
    res.status(200).json({
      success: true,
      msg: "Success! Your password has been changed!",
      mnemonic: user.mnemonic,
    });
  } catch (e) {
    console.log("something went wrong", e);

    res.status(200).json({ msg: "Error!", mnemonic: user.mnemonic });
  }
};
/**Fetch password to compare before reset End*/

/**Fetch pub */
exports.user_pub = async (req, res) => {
  try {
    let user = await User.findOne(
      {
        _id: req.session.userId,
      },
      "pub"
    );
    res.status(201).json({ pub: user.pub });
  } catch (e) {
    console.log("something went wrong", e);
  }
};
/**Fetch Twitter Token */
exports.get_user_twitter_token = async (req, res) => {
  try {
    if (!req.userID) {
      return res.redirect("/users/login");
    }
    let user = await User.findById(req.userID);
    if (checkTwitterToken(user.twitterTokens || {})) {
      const { screen_name, user_id } = user.twitterTokens;
      res.status(200).json({ isActive: true, screen_name, user_id });
    } else {
      res.status(200).json({ isActive: false });
    }
  } catch (e) {
    console.log("something went wrong", e);
  }
};

/**Delete Twitter Token */
exports.delete_user_twitter_token = async (req, res) => {
  try {
    let user = await User.findOneAndUpdate(
      {
        _id: req.userID,
      },
      {
        twitterTokens: {
          oauth_token: "",
          oauth_token_secret: "",
          user_id: "",
          screen_name: "",
        },
      }
    );

    res.status(200).send();
  } catch (e) {
    console.log("something went wrong", e);

    console.log(e);
  }
};
/**Fetch pub */

exports.editProfile = async (req, res) => {
  const { name, password, currentPassword, email } = req.body;
  try {
    const existingUser = await User.findOne({
      $or: [{ displayName: name }, { email: email }],
    });
    if (existingUser) {
      if (existingUser.displayName === name) {
        res
          .status(302)
          .json({ success: false, msg: "User Name already exist" });
      } else if (existingUser.email === email) {
        res.status(302).json({
          success: false,
          msg:
            "Email already exist" +
            existingUser.email +
            existingUser.displayName,
        });
      }
    }
    const user = await User.findOne({ _id: req.userID });
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .json({ success: false, msg: "Please enter correct credentials" });
    }
    var updateData = {};
    if (name) {
      updateData.displayName = name;
    }

    if (password) {
      const hash = await bcrypt.hash(password, 8);
      updateData.password = hash;
    }

    const filter = { _id: req.userID };

    var activeToken;
    var activeExpires;

    if (email) {
      updateData.email = email;
      updateData.active = false;
      try {
        const buff = await crypto.randomBytes(20);
        activeToken = req.userID + buff.toString("hex");
        activeExpires = moment().add(1, "days");
        var link = `${process.env.APP_URL_build}account/active/${email}/${activeToken}/${activeExpires} `;

        signupEmail(
          { email: email, displayName: user.displayName },
          link,
          "Email updated"
        );
        // sendMail({
        //   to: email,
        //   subject: "profile updated",
        //   html: `Please click <a href="${link}"> here </a> to activate your account.`,
        // });
        updateData.activeToken = activeToken;
        updateData.activeExpires = activeExpires;
      } catch (error) {
        console.log("something went wrong", error);

        return res.json({
          success: false,
          msg: "something went wrong",
        });
      }

      var doc = await User.findOneAndUpdate(
        filter,
        {
          $set: updateData,
        },
        {
          new: true,
        }
      );
    } else {
      var doc = await User.findOneAndUpdate(
        filter,
        {
          $set: updateData,
        },
        {
          new: true,
        }
      );
    }

    var response = {
      success: true,
      msg: "changes saved",
    };

    if (doc.email !== user.email) {
      response.msg = `Changes saved \n\n An email has been sent to ${doc.email} . \n\n Your email will be updated once you have verified your new address`;
      response.emailUpdate = true;
    }

    return res.json(response);
  } catch (error) {
    console.log("something went wrong", error);
    return res.json({
      success: false,
      msg: "something went wrong",
      error: error,
    });
  }
};

exports.updateTraining = async (req, res) => {
  try {
    let user = await User.findOneAndUpdate(
      { _id: req.userID },
      {
        $set: { training: false },
      },
      {
        new: true,
      }
    );

    res.json({ success: true, msg: "successfully updated record", user: user });
  } catch (error) {
    console.log("something went wrong", error);
  }
};
exports.getTraining = async (req, res) => {
  try {
    let user = await User.findById(req.userID);
    if (!user) {
      return res.json({
        success: false,
        msg: "not found",
        user: user,
      });
    }
    res.json({
      success: true,
      msg: "record found",
      training: user.training,
    });
  } catch (error) {
    console.log("something went wrong", error);
    res.status(500).json({
      success: false,
      msg: "server error",
    });
  }
};

exports.createWallet = async (req, res) => {
  try {
    const { mnemonic, password } = req.body;

    let deCrypt = AES.decrypt(mnemonic, password);
    let plaintext = deCrypt.toString(CryptoJS.enc.Utf8);
    const Wallet = HDMW.Wallet;
    let wif = new Wallet(plaintext, {
      supported_coins: ["flo"],
      discover: false,
    })
      .getCoin("flo")
      .getAccount(0)
      .getMainAddress()
      .getPrivateAddress();
    return res.json({ success: true, msg: "ok", wif: wif });
  } catch (e) {
    console.log("something went wrong", e);
  }
};

exports.resetPwdWallet = async (req, res) => {
  try {
    const { data, pwArr } = req.body;
    const { mnemonic } = data;
    let deCrypt = AES.decrypt(mnemonic.toString(), pwArr[0]);
    let plaintext = deCrypt.toString(CryptoJS.enc.Utf8);
    let encryption = AES.encrypt(plaintext, pwArr[1]).toString();

    return res.json({ success: true, msg: "ok", encryption: encryption });
  } catch (error) {
    console.log("something went wrong ", error);
  }
};

exports.backupWallet = async (req, res) => {
  try {
    const { data, result } = req.body;
    const { mnemonic } = data;

    // TODO! mnemonic is always same, for diferent password and mnemonic combination
    // verify!
    // let deCrypt = AES.decrypt(mnemonic, result.value[0]);
    let deCrypt = AES.decrypt(mnemonic.toString(), result.value[0]);
    let plaintext = deCrypt.toString(CryptoJS.enc.Utf8);

    return res.json({ success: true, msg: "ok", plaintext: plaintext });
  } catch (e) {
    console.log("something went wrong", e);
  }
};

// TODO: DELETE THIS
// used to delete user record by email
//  FOR DEVELOPMENT ONLY

exports.deleteByEmail = async (req, res) => {
  try {
    let user = await User.findOneAndDelete({
      email: req.params.email,
    });
    res.status(201).json({ user });
  } catch (e) {
    console.log("something went wrong", e);
  }
};
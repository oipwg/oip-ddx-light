const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../task-manager/src/models/user.js");

const UsersController = require("../../task-manager/src/controller/user");

/*
const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('/login')
  } else {
    next()
  }
}

const redirectHome = (req, res, next) => {
  if (req.session.userId) {
    res.redirect('/home')
  } else {
    next()
  }
}
*/

//router.post("/signup", UsersController.user_sign_up);
//router.get("/signup", UsersController.signUp);

router.get("/login", UsersController.loginGet)

router.post("/signup", UsersController.signupPost);

router.post("/login", UsersController.loginPost)

router.post("/logout", UsersController.logoutPost)

router.post("/test", (req, res, next) => {
  return res.status(500).json({thing: "hello worlasdasdasd"})
})

//router.post("/login", UsersController.user_login_post);


// @route POST api/users/register
// @desc Register user
// @access Public

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public

/*
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          displayName: user.displayName
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});
*/

module.exports = router;
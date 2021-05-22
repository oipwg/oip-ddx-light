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
const CoilUsersController = require("../../task-manager/src/controller/coilUser")


router.get("/login", UsersController.loginGet)

router.post("/signup", UsersController.signupPost);

router.post("/login", UsersController.loginPost)

router.post("/logout", UsersController.logoutPost)

router.get("/test", (req, res, next) => {
  return res.status(500).json({thing: "hello worlasdasdasd"})
})

router.get("/coilLogin", CoilUsersController.loginPost)

router.post("/coilLoginToken", CoilUsersController.loginTokenPost)


// @route POST api/users/register
// @desc Register user
// @access Public

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public

module.exports = router;
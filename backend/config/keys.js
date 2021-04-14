require('dotenv').config

const { NODE_ENV, MONGO_URI, SESS_NAME, SESS_SECRET } = process.env;

module.exports = {
  mongoURI: MONGO_URI,
  secretOrKey: "secret" 
};
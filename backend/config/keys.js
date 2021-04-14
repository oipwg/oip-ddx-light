require('dotenv').config

const { NODE_ENV, MONGO_URL, SESS_NAME, SESS_SECRET } = process.env;

module.exports = {
  mongoURI: MONGO_URL,
  secretOrKey: "secret" 
};
var expresst = require('express');
var path = require('path');
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-sessions')

var app = express();



router.get('/dashboard', function(req, res) {
  if(!loggedIn) {
    return res.status(401).send();
  }

  return res.status(200).send("Welcome to ...n")
})

module.exports = router;
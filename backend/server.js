const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const users = require("./routes/api/users");
const app = express();
const cors = require("cors");
require('dotenv').config

const { NODE_ENV, MONGO_URL, SESS_NAME, SESS_SECRET } = process.env;
const ONE_HOUR = 1000 * 60 * 60;

app.use(cors())

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(MONGO_URL,
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, 
    }
  )
  .then(() => console.log("MongoDB successfully connected!"))
  .catch(err => console.log(err));

/*
app.use(
  session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 30 * 60, //Time To Live is set to 30min if remember me isnt checked
      touchAfter: 30 * 60, //Stops session from refreshing with API calls to server
    }),
    name: SESS_NAME,
    resave: false, //Dont save back to store
    saveUninitialized: false, //Don't save any new sessions without any data in it
    secret: SESS_SECRET,
    cookie: {
      maxAge: ONE_HOUR,
      sameSite: false,
      //secure: secure, //production or development
    },
  })
);
*/

// Passport middleware
//app.use(passport.initialize());
// Passport config
//require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}!`));
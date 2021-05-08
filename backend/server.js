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

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
// DB Config
//const db = require("./config/keys").mongoURI;
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


// Passport middleware
//app.use(passport.initialize());
// Passport config
//require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
//app.use("/api/coilUsers", coilUsers)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}!`));
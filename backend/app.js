require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
var cors = require("cors");
// const hbs = require('hbs');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

//const indexRouter = require("./routes/index");
const usersRouter = require("./routes/api/users.js");
//const postRouter = require("./routes/posts");
//const sendFloRouter = require("./routes/sendflo");

// const server = require("http").createServer();
// const socket = require("socket.io");
var app = express();
app.use(cors());
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "public")));
// app.get("/*", function (req, res) {
//   console.log("__dirname");
//   console.log(__dirname);
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

const { NODE_ENV, MONGO_URL, SESS_NAME, SESS_SECRET } = process.env;
const secure = NODE_ENV === "production" ? true : false;

//This is used to avoid error with deprecated with findoneandupdate in the reset route
mongoose.set("useFindAndModify", false);

/**Put you DB path here, you can use this default path to host it local at this address */
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) =>
    console.log("Mongoose Connection is not working. Error: ", error)
  );

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB databse connection established successfully");
})
  
app.set("trust proxy", "loopback");
//Session to be persisted in Mongo
//* For reference: https://github.com/alex996/presentations/blob/master/express-session.md
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
      sameSite: false,
      secure: secure, //production or development
    },
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/users", usersRouter);

app.use(express.static("../frontend/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.json({ success: false, error: err });
});
//
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.error("An Error Occured:", err);
  // render the error page
  res.status(err.status || 500);
  res.redirect("/");
});

module.exports = app;

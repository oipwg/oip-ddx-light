var _ = require("lodash");
var nodemailer = require("nodemailer");

const config = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "example@mail.com",
    pass: "password",
  },
};
let transporter = nodemailer.createTransport(config);

var defaultMail = {
  from: "example@mail.com",
  to: "example@mail.com",
  subject: "Registration successfull ",
  text: "DDX",
};

const sendMail = (mail) => {
  // use default setting
  mail = _.merge({}, defaultMail, mail);

  // send email
  transporter.sendMail(mail, function (error, info) {
    if (error) return console.log(error);

    console.log("Email sent");
  });
};

module.exports = sendMail;
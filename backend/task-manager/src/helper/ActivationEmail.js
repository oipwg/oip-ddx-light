const sendMail = require("../../mailer")

module.exports = sendActivationEmail = (user) => {
  sendMail({
    to: user.email,
    subject: "Welcome to DDX",
    html: `<div>...</div>`
  })
}
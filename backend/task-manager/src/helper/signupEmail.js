const sendMail = require("../../mailer");

module.exports = signupEmail = (
  user,
  link,
  subject = "Welcome to Streambed"
) => {
  sendMail({
    to: user.email,
    subject: subject,
    html: `<div>...</div>`
  })
}
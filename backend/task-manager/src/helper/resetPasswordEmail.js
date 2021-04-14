const sendMail = require("../../mailer");

module.exports = resetPasswordEmail = (
  user,
  link,
  subject = "Reset password"
) => {
  sendMail({
    to: user.email,
    subject: subject,
    html: `<div>...</div>` 
  })
}
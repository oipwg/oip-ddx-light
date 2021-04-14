const jwt = require('jsonwebtoken');

// TODO Middleware to authinticate token, can be added to routes, will probably need to be used for resetting passwords
// TODO Resources for more information: https://www.youtube.com/watch?v=8Ip0pcwbWYM&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=13

module.exports = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
    req.userData = decoded;
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed'
    });
  }

  next();
};

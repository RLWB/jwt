const jwt = require("jsonwebtoken");
const key = "shhhhh";

function auth(req, res, next) {
  if (!req.headers.token) {
    return res.send({
      code: 403,
      msg: "用户未登录",
    });
  }
  try {
    jwt.verify(req.headers.token, key);
    next();
  } catch (error) {
    res.send({
      err: 401,
      msg: "token无效",
    });
  }
}
module.exports = auth;

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const key = "shhhhh";
app.use(express.urlencoded());
app.use(express.json());
app.get("/index", (req, res) => {
  const token = req.headers["token"];
  console.log(token);

  try {
    jwt.verify(token, key);
    res.send({
      orderCount: 1413,
      productCount: 4775,
      userCount: 1320,
      msg: "成功",
      code: 0,
    });
  } catch (error) {
    res.send({
      code: 401,
      msg: "请登录",
    });
  }
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "123456") {
    const token = jwt.sign({ username: "admin" }, key);
    res.send({
      username: "admin",
      token: token,
      msg: "登录成功",
      code: 0,
    });
  } else {
    res.send({
      code: 404,
      msg: "账号信息有误，请核对",
    });
  }
});

app.listen(4000, () => {
  console.log(`running in localhost:4000`);
});

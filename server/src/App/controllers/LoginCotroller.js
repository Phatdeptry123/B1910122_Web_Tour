const User = require("../models/user");
const { mongooseToOpject } = require("../../util/mongoose.js");
const { mutipleMongooseToOpject } = require("../../util/mongoose");
var session = require('express-session')
const { loginValidation} = require("../../auth/validation.js")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

exports.signin = async (req, res) => {
  const{ error } = loginValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message)

  const records = await User.findOne({
    username: req.body.username,
  });
  console.log(records);
  if (!records) {
    return res
      .status(404)
      .send({ message: "không tìm thấy user!!!!!" + req.body });
  }

  const passLogin = await bcrypt.compare(req.body.password, records.password);
  if(!passLogin) return res.status(400).send("Mật khẩu không hợp lệ")

  console.log(records);
  const token = jwt.sign({_id: records._id}, 'SECRET_TOKEN');
  res.header("auth-token", token).send(token);
  // res.status(200).send({
  //   id: records._id,
  //   name: records.name,
  // });
};

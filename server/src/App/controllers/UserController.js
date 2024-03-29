const User = require("../models/user");
const { mongooseToOpject } = require("../../util/mongoose.js");
const { mutipleMongooseToOpject } = require("../../util/mongoose");
const {registerValidation} = require("../../auth/validation.js")
const bcrypt = require("bcryptjs")
class UserController {
  async getAllUsers(req, res, next) {
    try {
      const records = await User.find();
      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  async createUser(req, res, next) {
    
    try {
      const{ error } = registerValidation(req.body);
      if(error) return res.status(400).send(error.details[0].message)
      const usernameExist = await User.findOne({username: req.body.username});
      if(usernameExist) return res.status(400).send("Username đã tồn tại")
      const salt = await bcrypt.genSalt(10);
     const hashPass = await bcrypt.hash(req.body.password, salt)
      // req.body.tour_image = `https://codefresher.vn/wp-content/uploads/2021/06/Banner-05-KH-IT-Foundation-1024x1024.png`;
      const newuser = new User();
      newuser.name = req.body.name
      newuser.username = req.body.username
      newuser.email = req.body.email
      newuser.password = hashPass
      const records = await newuser.save();
      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  async findOne(req, res, next) {
    const { id } = req.params;
    const condition = {
      _id: id && mongoose.isValidObjectId(id) ? id : null,
    };

    try {
      const document = await user.findOne(condition);
      if (!document) {
        return next(
          res.status(404).json({ Message: "không thể tìm thấy user" })
        );
      }
      return res.send({
        id: document.id,
        name: document.name,
        introduce: document.introduce,
        avatar_Url: document.avatar_Url,
      });
    } catch (error) {
      return next(
        res.status(500).json({
          Message: ` không thể tìm thấy user với id = ${req.params.id} `,
        })
      );
    }
  }
  async update(req, res, next) {
    if (Object.keys(req.body).length === 0) {
      return next(
        res.status(400).json({ Message: "thông tin không thế thay đổi" })
      );
    }
    const { id } = req.params;
    const condition = {
      _id: id && mongoose.isValidObjectId(id) ? id : null,
    };

    try {
      const document = await user.findByIdAndUpdate(condition, req.body, {
        new: true,
      });
      if (!document) {
        return next(
          res.status(404).json({ Message: "không thể tìm thấy user" })
        );
      }
      return res.send({ message: "đã update thành công", body: req.body });
    } catch (error) {
      console.log(error);
      return next(
        res.status(500).json({
          Message: ` không thể update user với id = ${req.params.id} `,
        })
      );
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    const condition = {
      _id: id && mongoose.isValidObjectId(id) ? id : null,
    };

    try {
      const document = await user.findOneAndDelete(condition);
      if (!document) {
        return next(
          res.status(404).json({ Message: "không thể tìm thấy user" })
        );
      }
      return res.send({ message: "đã xóa user thành công" });
    } catch (error) {
      return next(
        res
          .status(500)
          .json({ Message: ` không thể xóa user với id = ${req.params.id} ` })
      );
    }
  }
  async deleteAll(req, res, next) {
    try {
      const data = await user.deleteMany({});
      return res.send({
        message: `${data.deletedCount}  user đã xóa thành công`,
      });
    } catch (error) {
      return next(
        res.status(500).json({ Message: ` có lỗi khi đang xóa tất cả user` })
      );
    }
  }
}

module.exports = new UserController();

const { User, Thought } = require("../models");

const userController = {
  createUser(req, res) {
    User.create(req.body)
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteUser(req, res) {},
  updateUser(req, res) {},
  lookUpOneUser(req, res) {},
  lookUpAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;

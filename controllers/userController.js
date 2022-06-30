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
  deleteUser(req, res) {
    User.findByIdAndRemove({ _id: req.params.userId }).then((user) => {
      !user
        ? res.status(404).json({ message: "No user found with that ID" })
        : res.status(200).json(user);
    });
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidtors: true, new: true }
    ).then((user) => {
      !user
        ? res.status(404).json({ message: "No user found with that ID" })
        : res.status(200).json(user);
    });
  },
  lookUpOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) => {
        !user ? res.status(404) : res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json(err);
      });
  },
  lookUpAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;

const router = require("express").Router();
const {
  createUser,
  deleteUser,
  updateUser,
  lookUpOneUser,
  lookUpAllUsers,
} = require("../../controllers/userController");

router.route('/').get(lookUpAllUsers).post(createUser);

module.exports = router;

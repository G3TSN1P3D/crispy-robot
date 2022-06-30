const router = require("express").Router();
const {
  createUser,
  deleteUser,
  updateUser,
  lookUpOneUser,
  lookUpAllUsers,
} = require("../../controllers/userController");

router.route("/").get(lookUpAllUsers).post(createUser);
router.route("/:userId").get(lookUpOneUser);
router.route("/delete/:userId").delete(deleteUser);
router.route("/update/:userId").put(updateUser);

module.exports = router;

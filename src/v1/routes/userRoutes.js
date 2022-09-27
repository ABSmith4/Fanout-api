const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController")

router.get("/:userId", userController.getUserInfo);

router.put("/:userId", userController.updateUserInfo);

router.post("/", userController.createNewUser);

router.delete("/:userId", userController.deleteUser);

module.exports = router;
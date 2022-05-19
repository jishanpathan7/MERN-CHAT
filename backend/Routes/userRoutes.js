const express = require("express");
const { registerUser } = require("../controllers/userController");
const { authUser, allUsers } = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);

router.post("/login", authUser);

module.exports = router;

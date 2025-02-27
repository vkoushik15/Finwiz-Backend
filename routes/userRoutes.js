const express = require("express");
const router = express.Router();
const { Register, Login, getUser } = require("../controllers/userController");

router.post("/register", Register);
router.post("/login", Login);
router.post("/getUser", getUser);
module.exports = router;

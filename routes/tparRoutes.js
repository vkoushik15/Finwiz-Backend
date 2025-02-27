const express = require("express");
const router = express.Router();
const { createTpar, addTname, getTpar,getT } = require("../controllers/tparController");

router.post("/create", createTpar);
router.post("/add", addTname);
router.get("/get", getTpar);
router.get("/getT", getT);
module.exports = router;

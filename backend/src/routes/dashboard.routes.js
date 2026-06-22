const express = require("express");
const { getStudentResults } = require("../controllers/dashboard.controller");

const router = express.Router();

router.get("/results", getStudentResults);

module.exports = router;

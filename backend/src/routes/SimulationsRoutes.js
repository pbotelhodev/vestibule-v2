const express = require("express");
const router = express.Router();

const {listSimulations} = require("../controllers/SimulationController")

router.get("/", listSimulations)

module.exports = router 
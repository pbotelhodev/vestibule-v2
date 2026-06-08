const express = require("express");
const { listSimulations } = require("../controllers/simulations.controller");

const router = express.Router();

router.get("/simulations", listSimulations);

module.exports = router;

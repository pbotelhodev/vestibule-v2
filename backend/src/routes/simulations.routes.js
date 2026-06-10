const express = require("express");
const { listSimulations, getSimulation } = require("../controllers/simulations.controller");

const router = express.Router();

router.get("/simulations", listSimulations);
router.get("/simulations/:publicId", getSimulation)

module.exports = router;

const express = require("express");
const { listSimulations, getSimulation, submitSimulationResult, getSimulationResult } = require("../controllers/simulations.controller");

const router = express.Router();

router.get("/simulations", listSimulations);
router.get("/simulations/:publicId", getSimulation)
router.post("/simulations/:publicId/submit", submitSimulationResult)
router.get("/simulations/:publicId/result", getSimulationResult);

module.exports = router;

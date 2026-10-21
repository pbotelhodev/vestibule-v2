const { findSimulations } = require(`../services/SimulationService`);

const listSimulations = async (req, res) => {
  try {
    const listedSimulations = await findSimulations();
    return res.status(200).json(listedSimulations);
  } catch (error) {
    return res.status(500).json({
      error: "Erro ao buscar os simulados",
    });
  }
};

module.exports = { listSimulations }

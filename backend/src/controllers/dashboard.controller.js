const { listStudentResults } = require("../services/dashboard.service");

const getStudentResults = async (req, res) => {
  try {
    const { studentId } = req.query;

    if (!studentId) {
      return res.status(400).json({
        message: "studentId é obrigatório.",
      });
    }

    const results = await listStudentResults(studentId);

    return res.status(200).json({
      results,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar os resultados.",
    });
  }
};

module.exports = {
  getStudentResults,
};

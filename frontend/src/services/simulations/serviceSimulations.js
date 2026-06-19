import api from "../api";

export const getSimulations = async () => {
  const response = await api.get("/student/simulations");
  return response.data.simulations;
};

export const getSimulationByPublicId = async (publicId) => {
  const response = await api.get(`/student/simulations/${publicId}`);
  return response.data.simulation;
};

export const submitSimulationAnswers = async (publicId, submission, studentId) => {
  const response = await api.post(`/student/simulations/${publicId}/submit`, {submission, studentId})
  return response.data.result;
};
import api from "../api";

//Pega todos os simulados
export const getSimulations = async (studentId) => {
  const response = await api.get("/student/simulations", {params: {studentId}});
  console.log(response.data.simulations)
  return response.data.simulations;
};

//Pega o simulado pelo publicId
export const getSimulationByPublicId = async (publicId) => {
  const response = await api.get(`/student/simulations/${publicId}`);
  return response.data.simulation;
};

//Envia os dados do usuário pra correção
export const submitSimulationAnswers = async (publicId, submission, studentId) => {
  const response = await api.post(`/student/simulations/${publicId}/submit`, {submission, studentId})
  return response.data.result;
};

export const getSimulationResolved = async (publicId, studentId) => {
  const response = await api.get(`/student/simulations/${publicId}/result`, {params: {studentId}});
  return response.data.result
}
import api from "../api";

export const getSimulations = async () => {
  const response = await api.get("/student/simulations");
  return response.data.simulations;
};

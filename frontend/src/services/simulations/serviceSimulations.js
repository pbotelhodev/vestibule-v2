import api from "../api";

/* Coleta todos os simulados */

export const getSimulations = async () => {
  const response = await api.get("/simulations");
  return response.data;
};

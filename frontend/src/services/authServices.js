import api from "./api";

export const registerStudent = async (data) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const loginStudent = async (data) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

/* const getMe = async () => {
    const response = await api.get("/auth/me")
    return response.data
} */



import api from "../api";

export const getStudentResults = async (studentId) => {
  const response = await api.get("student/results", {
    params: { studentId },
  });
  return response.data.results;
};

import api from "../api";

export const getStudentResults = async (studentId) => {
  const response = await api.get("student/results", {
    params: { studentId },
  });
  console.log(response.data.results);
  return response.data.results;
};

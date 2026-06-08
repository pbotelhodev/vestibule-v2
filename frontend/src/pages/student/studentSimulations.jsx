import { useOutletContext } from "react-router-dom";

import StudentSimulationsContent from "../../components/student/StudentSimulationsContent";

const StudentSimulations = () => {
  const { student } = useOutletContext();

  return <StudentSimulationsContent student={student} />;
};

export default StudentSimulations;

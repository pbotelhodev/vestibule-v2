/* Tools */
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
/* Components */
import StudentSimulationsContent from "../../components/student/StudentSimulationsContent";

/* Import Service */
import { getSimulations } from "../../services/simulations/serviceSimulations";


const StudentSimulations = () => {
  /* State */
  const [simulations, setSimulations] = useState([]);

  /* Effects */
  useEffect(() => {
    const listSimulations = async () => {
      const response = await getSimulations();
      setSimulations(response);
    };
    listSimulations();
  }, []);
  console.log(simulations)
  const { student } = useOutletContext();

  return <StudentSimulationsContent student={student} simulations={simulations} />;
};

export default StudentSimulations;

/* Tools */
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

/* Components */
import StudentSimulationsContent from "../../components/student/StudentSimulationsContent";
import Loading from "../../components/ui/Loading";

/* Import Service */
import { getSimulations } from "../../services/simulations/serviceSimulations";

const StudentSimulations = () => {
  /* State */
  const [simulations, setSimulations] = useState([]);
  const [loading, setLoading] = useState(true);

  /* Effects */
  useEffect(() => {
    setLoading(true);
    const listSimulations = async () => {
      try {
        const response = await getSimulations();
        setSimulations(response);
        
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    listSimulations();
  }, []);

  const { student } = useOutletContext();

  if (loading || !simulations) {
    return <Loading />;
  }

  return (
    <StudentSimulationsContent student={student} simulations={simulations} />
  );
};

export default StudentSimulations;

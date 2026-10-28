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
  const [loading, setLoading] = useState(false);

  /* Effects */

  useEffect(() => {
    setLoading(true);
    const loadSimulations = async () => {
      try {
        const data = await getSimulations();
        setSimulations(data);
      } catch (error) {
        console.error("Erro ao buscar os simulados", error);
      } finally {
        setLoading(false);
      }
    };

    loadSimulations();
  }, []);

  const { student } = useOutletContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <StudentSimulationsContent student={student} simulations={simulations} />
  );
};

export default StudentSimulations;

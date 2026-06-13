/* Tools */
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

/* Assets */

/* Components */
import Loading from "../../components/ui/Loading";
import StudentSimulationContent from "../../components/student/studentSimulationContent";

/* Services */
import { getSimulationByPublicId } from "../../services/simulations/serviceSimulations";

const StudentSimulationPage = () => {
  const [simulation, setSimulation] = useState(null);
  const [loading, setLoading] = useState(true);
  const { simulationId } = useParams();
  const navigate = useNavigate();
  const outletContext = useOutletContext();

  const student = outletContext?.student ?? {
    name: "Aluno Vestibule",
    planActive: "free",
  };

  useEffect(() => {
    setLoading(true);

    const getSimulation = async () => {
      try {
        const response = await getSimulationByPublicId(simulationId);
        setSimulation(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getSimulation();
  }, [simulationId]);

  const handleFinishSimulation = (submission) => {
    navigate(`/student/simulados/${simulationId}/resultado`, {
      state: { submission },
    });
  };

  if (loading || !simulation) {
    return <Loading />;
  }

  return (
    <StudentSimulationContent
      student={student}
      simulation={simulation}
      onFinishSimulation={handleFinishSimulation}
    />
  );
};

export default StudentSimulationPage;

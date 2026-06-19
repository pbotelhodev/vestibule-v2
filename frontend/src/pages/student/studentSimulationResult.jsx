import { useLocation, useNavigate } from "react-router-dom";
import StudentSimulationResultContent from "../../components/student/studentSimulationResultContent";
import { useEffect, useState } from "react";
import { submitSimulationAnswers } from "../../services/simulations/serviceSimulations";

const visualStudent = {
  name: "Aluno Vestibule",
  planActive: "premium",
};

const StudentSimulationResult = () => {
  const [result, setResult] = useState();
  //const [correction, setCorrection] = useState([])
  //const [isLoading, setIsLoading] = useState(true);
  //const [error, setError] = useState(null)

  const studentId = "1d22a020-1a65-4ae4-b22a-6a76efb327f6";

  const location = useLocation();
  const submission = location.state?.submission;//Submission são os dados enviados pelo aluno
  //const source = location.state?.source;
  const navigate = useNavigate();
  console.log(result?.correction)
  

  useEffect(() => {
    if (!submission) {
      return console.log("Não chegou nenhum submission");
      /* Como nao chegou nenhum submission devemos puxar do banco */
    }
    const submitDataAndSave = async () => {
      const response = await submitSimulationAnswers(
        submission?.publicId,
        submission,
        studentId,
      );
      setResult(response);
      return response;
    };
    submitDataAndSave();
  }, [submission]);
  return (
    <StudentSimulationResultContent
      student={visualStudent}
      correction={result?.correction || []}
      summary={result?.summary}
      onBackToSimulations={() => navigate(`/student/simulados`)}
      onReviewSimulation={() => {
        navigate(`/student/simulados/${submission.publicId}`);
      }}
    />
  );
};

export default StudentSimulationResult;

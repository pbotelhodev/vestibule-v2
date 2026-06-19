import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import {
  submitSimulationAnswers,
  getSimulationResolved,
} from "../../services/simulations/serviceSimulations";

import StudentSimulationResultContent from "../../components/student/studentSimulationResultContent";

import Loading from "../../components/ui/Loading";

const visualStudent = {
  name: "Aluno Vestibule",
  planActive: "premium",
};

const StudentSimulationResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { simulationId } = useParams();

  const submission = location.state?.submission;

  const initialPublicId =
    location.state?.publicId || submission?.publicId || simulationId || null;

  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [publicId, setPublicId] = useState(initialPublicId);
  const [manualPublicId, setManualPublicId] = useState("");
  const [showPublicIdModal, setShowPublicIdModal] = useState(!initialPublicId);
  const [modalError, setModalError] = useState("");

  const studentId = "1d22a020-1a65-4ae4-b22a-6a76efb327f6";
  const hasSubmittedRef = useRef(false);

  const handleManualPublicIdSubmit = (event) => {
    event.preventDefault();

    const cleanPublicId = manualPublicId.trim();

    if (!cleanPublicId) {
      setModalError("Informe o ID do simulado.");
      return;
    }

    setResult(undefined);
    setModalError("");
    setShowPublicIdModal(false);
    setPublicId(cleanPublicId);
  };

  useEffect(() => {
    const loadResult = async () => {
      if (submission && hasSubmittedRef.current) return;

      try {
        setIsLoading(true);

        if (!publicId) {
          setShowPublicIdModal(true);
          return;
        }

        if (!submission) {
          const response = await getSimulationResolved(publicId, studentId);

          console.log(response);

          setResult(response);
          setShowPublicIdModal(false);
          setModalError("");
          return;
        }

        hasSubmittedRef.current = true;

        const response = await submitSimulationAnswers(
          submission.publicId,
          submission,
          studentId,
        );

        setResult(response);
        setShowPublicIdModal(false);
        setModalError("");
      } catch (error) {
        console.error("Erro:", error);

        setResult(undefined);
        setManualPublicId(publicId || "");
        setShowPublicIdModal(true);
        setModalError(
          "Não encontramos um resultado para esse ID. Confira o código e tente novamente.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadResult();
  }, [publicId, submission]);

  const publicIdModal = showPublicIdModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-4xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/10">
        <div className="mb-6">
          <span className="mb-3 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700">
            Resultado não encontrado
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-slate-950">
            Informe o ID do simulado
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Não conseguimos identificar automaticamente qual resultado você quer
            acessar. Informe o ID do simulado ou volte para a lista.
          </p>
        </div>

        <form onSubmit={handleManualPublicIdSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="publicId"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              ID do simulado
            </label>

            <input
              id="publicId"
              type="text"
              value={manualPublicId}
              onChange={(event) => setManualPublicId(event.target.value)}
              placeholder="Ex: mat-482913-vest"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
            />

            {modalError && (
              <p className="mt-2 text-sm font-semibold text-red-500">
                {modalError}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="submit"
              className="inline-flex h-12 flex-1 items-center justify-center rounded-2xl bg-violet-600 px-5 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-700"
            >
              Buscar resultado
            </button>

            <button
              type="button"
              onClick={() => navigate("/student/simulados")}
              className="inline-flex h-12 flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  if (isLoading && !showPublicIdModal) {
    return <Loading />;
  }

  if (!result && showPublicIdModal) {
    return publicIdModal;
  }

  return (
    <>
      {publicIdModal}

      <StudentSimulationResultContent
        student={visualStudent}
        correction={result?.correction || []}
        summary={result?.summary}
        onBackToSimulations={() => navigate("/student/simulados")}
        onReviewSimulation={() => {
          navigate(`/student/simulados/${publicId}`);
        }}
      />
    </>
  );
};

export default StudentSimulationResult;

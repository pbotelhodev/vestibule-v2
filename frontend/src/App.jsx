import { Routes, Route, Navigate } from "react-router-dom";

/* Landing Page */
import LandingHome from "./pages/landing/LandingHome";
import ErrorPage from "./pages/landing/ErrorPage";
import LoginPage from "./pages/landing/Login";
import SigUpPage from "./pages/landing/SignUp";
import ForgetPass from "./pages/landing/ForgetPass";
import Enterprise from "./pages/landing/Enterprise";
import Plans from "./pages/landing/Plans";
/* Sobre */
/* Contato */
/* Termos e Privacidade */

/* Student */
import StudentPanel from "./pages/student/studentPanel";
import StudentDashboard from "./pages/student/studentDashboard";
import StudentRelatorio from "./pages/student/studentRelatorio";
import StudentSimulation from "./pages/student/studentSimulation";
import StudentSimulations from "./pages/student/studentSimulations";
import StudentSimulationResult from "./pages/student/studentSimulationResult";
import StudentPerformance from "./pages/student/studentPerformance";
import StudentPlanLearning from "./pages/student/studentPlanLearning";
import StudentProfile from "./pages/student/studentProfile";
import StudentRanking from "./pages/student/studentRanking";
import StudentTrail from "./pages/student/studentTrail";

/* Teacher */

/* Admin */

/* Institution */

export default function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingHome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/credenciais/recuperar" element={<ForgetPass />} />
      <Route path="/signup" element={<SigUpPage />} />
      <Route path="/planos" element={<Plans />} />
      <Route path="/enterprise" element={<Enterprise />} />

      {/* Student */}
      <Route path="/student" element={<StudentPanel />}>
        <Route index element={<Navigate to="/student/dashboard" replace />} />

        <Route path="dashboard" element={<StudentDashboard />}>
          <Route path="relatorio" element={<StudentRelatorio />} />
        </Route>

        <Route path="simulados" element={<StudentSimulations />} />
        <Route path="simulados/:simulationId" element={<StudentSimulation />} />

        <Route
          path="simulados/:simulationId/resultado"
          element={<StudentSimulationResult />}
        />

        <Route path="desempenho" element={<StudentPerformance />} />
        <Route path="plano-de-estudos" element={<StudentPlanLearning />} />

        <Route path="perfil" element={<StudentProfile />} />
        <Route path="ranking" element={<StudentRanking />} />
        <Route path="trilhas" element={<StudentTrail />} />
      </Route>

      {/* Teacher */}

      {/* Institution */}

      {/* Error Page */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

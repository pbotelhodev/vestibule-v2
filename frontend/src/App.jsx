import { Routes, Route, Navigate } from "react-router-dom";

import LandingHome from "./pages/LandingHome";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/Login";
import ForgetPass from "./pages/ForgetPass";
import SigUpPage from "./pages/SignUp";
import Enterprise from "./pages/Enterprise";
import Plans from "./pages/Plans";

/* Student */
import StudentPanel from "./pages/student/studentPanel";
import StudentDashboard from "./pages/student/studentDashboard";
import StudentSimulation from "./pages/student/studentSimulation";
import StudentSimulations from "./pages/student/studentSimulations";
import StudentSimulationResult from "./pages/student/studentSimulationResult";
import StudentPerformance from "./pages/student/studentPerformance";
import StudentProfile from "./pages/student/studentProfile";
import StudentSettings from "./pages/student/studentSettings";
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
      <Route path="*" element={<ErrorPage />} />

      {/* Student */}
      <Route path="/student" element={<StudentPanel />}>
        <Route index element={<Navigate to="/student/dashboard" replace />} />
        <Route path="dashboard" element={<StudentDashboard />} />{" "}
        {/* Acessa o Dashboard do aluno */}
        <Route path="simulados" element={<StudentSimulations />} />
        <Route path="simulados/:simulationId" element={<StudentSimulation />} />
        <Route
          path="simulados/:simulationId/resultado"
          element={<StudentSimulationResult />}
        />
        <Route path="desempenho" element={<StudentPerformance />} />
        <Route path="perfil" element={<StudentProfile />} />
        <Route path="configuracoes" element={<StudentSettings />} />
      </Route>

      {/* Teacher */}

      {/* Institution */}
    </Routes>
  );
}

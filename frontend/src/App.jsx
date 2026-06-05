import { Routes, Route } from "react-router-dom";

import AlunoPage from "./pages/AlunoPage";
import EscolaPage from "./pages/EscolaPage";
import LandingHome from "./pages/LandingHome";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/Login";
import SigUpPage from "./pages/SignUp";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingHome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SigUpPage />} />
      <Route path="/aluno" element={<AlunoPage />} />
      <Route path="/escola" element={<EscolaPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

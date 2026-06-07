import { Routes, Route } from "react-router-dom";

import LandingHome from "./pages/LandingHome";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/Login";
import ForgetPass from "./pages/ForgetPass"
import SigUpPage from "./pages/SignUp";
import Enterprise from "./pages/Enterprise"
import Plans from "./pages/Plans"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingHome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/credenciais/recuperar" element={<ForgetPass />} />
      <Route path="/signup" element={<SigUpPage />} />
      <Route path="/planos" element={<Plans />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

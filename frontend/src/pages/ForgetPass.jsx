/* Imports Tools */
import { ArrowLeft, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* imports components */
import Logo from "../components/ui/Logo";
import Alert from "../components/ui/Alert";
import Loading from "../components/ui/Loading";

const ForgotPasswordPage = () => {
  /* Navigate */
  const navigate = useNavigate();

  /* States */
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState(null);

  /* Functions */
  const handleRecoverPassword = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (!email) {
        throw new Error("Informe seu e-mail para recuperar a senha.");
      }

      setAlertData({
        type: "success",
        title: "Instruções enviadas",
        message:
          "Se esse e-mail estiver cadastrado, enviaremos as instruções de recuperação.",
      });
    } catch (error) {
      setAlertData({
        type: "error",
        title: "Não foi possível continuar",
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Loading />}

      {alertData && (
        <Alert data={alertData} onClose={() => setAlertData(null)} />
      )}

      <main className="relative isolate grid min-h-dvh place-items-center overflow-hidden bg-white px-4 py-6 text-slate-900 sm:px-6">
        {/* Background */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-size-[32px_32px]" />
          <div className="absolute -top-24 -right-16 size-72 rounded-full border border-blue-200/50 bg-blue-100/60 shadow-[0_30px_120px_rgba(59,130,246,0.18)]" />
          <div className="absolute -bottom-24 -left-16 size-72 rounded-full border border-amber-200/70 bg-amber-100/70 shadow-[0_30px_120px_rgba(245,158,11,0.18)]" />
          <div className="absolute top-44 left-1/2 hidden size-2 rounded-full bg-violet-500/50 md:block" />
          <div className="absolute right-1/3 bottom-40 hidden size-2 rounded-full bg-blue-500/40 md:block" />
        </div>

        {/* Card */}
        <section className="relative z-10 w-full max-w-xl rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-2xl shadow-violet-950/10 backdrop-blur-xl sm:p-7 2xl:p-9">
          <div className="flex items-center justify-between gap-4">
            <Logo />

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-500 shadow-sm transition hover:-translate-x-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 hover:shadow-md"
            >
              <ArrowLeft className="size-4" />
              Voltar
            </button>
          </div>

          <div className="mt-8">
            <div className="grid size-14 place-items-center rounded-3xl bg-violet-50 text-violet-600">
              <Mail className="size-6" />
            </div>

            <h1 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              Recuperar senha
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              Informe o e-mail cadastrado na sua conta. Se ele existir em nossa
              base, enviaremos as instruções para recuperar seu acesso.
            </p>
          </div>

          <form onSubmit={handleRecoverPassword} className="mt-7 grid gap-4">
            <div>
              <label className="text-sm font-bold text-slate-700">E-mail</label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="joao@email.com"
                className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <button
              type="submit"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-blue-950 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-violet-600 hover:via-purple-500 hover:to-blue-600 hover:shadow-xl"
            >
              <Send className="relative z-10 size-4" />
              <span className="relative z-10">Enviar instruções</span>
              <span className="absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/40 blur-sm transition-all duration-700 group-hover:left-[120%]" />
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-500">
            Lembrou sua senha?{" "}
            <Link
              to="/login"
              className="font-extrabold text-violet-600 transition hover:text-violet-700"
            >
              Entrar na conta
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
};

export default ForgotPasswordPage;

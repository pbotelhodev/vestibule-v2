/* eslint-disable react-hooks/exhaustive-deps */
/* Imports Tools */
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

/* imports components */
import Loading from "../components/ui/Loading";
import Alert from "../components/ui/Alert";

/* import assets */
import Logo from "../components/ui/Logo";

/* Imports services */
import { loginStudent } from "../services/authServices";
import { useEffect } from "react";

const LoginPage = () => {
  /* Navigate */
  const navigate = useNavigate();
  const location = useLocation();

  /* UseForm */
  const { register, handleSubmit } = useForm();

  /* States */
  const [showPassword, setShowPassword] = useState(false);
  const [alertData, setAlertData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* Functions */
  const handleLogin = async (data) => {
    setLoading(true);

    try {
      const response = await loginStudent(data);

      console.log(response.data);
    } catch (error) {
      console.log(`Erro: ${error.response?.data?.message || error.message}`);
      
      setAlertData({
        type: "error",
        title: "Tivemos um probleminha...",
        message: error.response?.data?.message,
      });
    } finally {
      /* Aqui direciona de acordo com o tipo do usuário */
      setLoading(false);
    }
  };

  /* Effects */

  return (
    <div>
      {loading && <Loading />}

      {alertData && (
        <Alert data={alertData} onClose={() => setAlertData(null)} />
      )}

      <main className="relative isolate min-h-dvh overflow-x-hidden bg-white px-4 py-4 sm:px-6 lg:px-8 xl:h-dvh xl:overflow-hidden 2xl:px-10">
        {/* Background */}
        <div className="pointer-events-none fixed inset-0 z-0 h-dvh overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-size-[32px_32px] sm:bg-size-[36px_36px] 2xl:bg-size-[40px_40px]" />

          <div className="absolute -top-24 -right-16 size-56 animate-[floatSoft_10s_ease-in-out_infinite] rounded-full border border-blue-200/50 bg-blue-100/60 shadow-[0_30px_120px_rgba(59,130,246,0.18)] sm:right-8 sm:size-72 xl:size-80 2xl:size-96" />

          <div className="absolute -bottom-24 -left-16 size-52 animate-[floatReverse_11s_ease-in-out_infinite] rounded-full border border-amber-200/70 bg-amber-100/70 shadow-[0_30px_120px_rgba(245,158,11,0.18)] sm:left-8 sm:size-64 xl:size-72 2xl:size-88" />

          <div className="absolute top-40 left-1/2 hidden size-2 animate-[dotFloat_5s_ease-in-out_infinite] rounded-full bg-violet-500/50 md:block" />

          <div className="absolute right-1/3 bottom-40 hidden size-2 animate-[dotFloat_6s_ease-in-out_infinite_reverse] rounded-full bg-blue-500/40 md:block" />
        </div>

        {/* Área central */}
        <section className="relative z-10 grid min-h-[calc(100dvh-32px)] place-items-center xl:h-[calc(100dvh-32px)] xl:min-h-0">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 xl:grid-cols-[0.95fr_1.05fr] 2xl:max-w-360 2xl:grid-cols-[1fr_1.05fr] 2xl:gap-12">
            {/* Esquerda */}
            <div className="hidden w-full flex-col items-start justify-center xl:flex">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-500 shadow-sm transition hover:-translate-x-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 hover:shadow-md 2xl:mb-8"
              >
                <ArrowLeft className="size-4" />
                Voltar
              </button>

              <div className="max-w-xl 2xl:max-w-2xl">
                <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight text-slate-950 2xl:text-6xl">
                  Entre e continue sua preparação com clareza.
                </h1>

                <p className="mt-3 max-w-lg text-sm leading-6 font-light text-slate-500 2xl:mt-4 2xl:max-w-xl 2xl:text-base 2xl:leading-7">
                  Acesse simulados, acompanhe sua evolução e visualize os
                  próximos passos da sua rotina de estudo em um só lugar.
                </p>
              </div>

              {/* Mockup compacto */}
              <div className="mt-6 w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-violet-950/10 2xl:mt-8 2xl:max-w-2xl">
                <div className="flex items-center gap-3 bg-slate-950 px-4 py-2.5 2xl:px-5 2xl:py-3">
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="block size-3 rounded-full bg-red-400" />
                    <span className="block size-3 rounded-full bg-amber-400" />
                    <span className="block size-3 rounded-full bg-emerald-400" />
                  </div>

                  <a
                    href="https://www.vestibule.com.br"
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-0 truncate rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/60 transition hover:bg-white/15 hover:text-white"
                  >
                    app.vestibule.com.br
                  </a>
                </div>

                <div className="bg-white p-4 2xl:p-5">
                  <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr] 2xl:gap-4">
                    <div className="rounded-3xl bg-blue-700 p-4 text-white shadow-sm 2xl:p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-bold text-white/70">
                            Meta estimada
                          </p>

                          <h3 className="mt-2 text-3xl font-extrabold tracking-tight 2xl:text-4xl">
                            760 pts
                          </h3>

                          <p className="mt-0.5 text-xs font-medium text-white/70">
                            faltam 60 pontos
                          </p>
                        </div>

                        <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-extrabold text-white">
                          85%
                        </span>
                      </div>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                        <div className="h-full w-[85%] rounded-full bg-amber-400" />
                      </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm 2xl:p-5">
                      <p className="text-xs font-bold text-slate-500">
                        Acerto geral
                      </p>

                      <div className="mt-2 flex items-end justify-between gap-3">
                        <h3 className="text-3xl font-extrabold tracking-tight text-slate-950 2xl:text-4xl">
                          76%
                        </h3>

                        <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-extrabold text-violet-600">
                          +2%
                        </span>
                      </div>

                      <p className="mt-2 text-xs font-semibold text-slate-400">
                        evolução no mês
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm 2xl:mt-4 2xl:p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-violet-600">
                          Próximo simulado
                        </p>

                        <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-950 2xl:text-xl">
                          Diagnóstico ENEM
                        </h3>
                      </div>

                      <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-extrabold text-amber-600">
                        Hoje
                      </span>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[62%] rounded-full bg-linear-to-r from-blue-600 via-violet-500 to-amber-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direita */}
            <div className="mx-auto flex w-full max-w-md flex-col justify-center rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-2xl shadow-violet-950/10 backdrop-blur-xl sm:p-6 lg:max-w-xl lg:p-7 xl:max-w-xl xl:p-6 2xl:min-h-155 2xl:max-w-2xl 2xl:p-9">
              {/* Topo mobile/tablet */}
              <div className="mb-5 flex items-center justify-between gap-4 xl:hidden">
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

              {/* Logo desktop */}
              <div className="mb-5 hidden xl:block 2xl:mb-8">
                <Logo />
              </div>

              <div>
                <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 2xl:text-3xl">
                  Entre na sua conta.
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500 2xl:max-w-xl 2xl:text-base 2xl:leading-7">
                  Acesse seus simulados, desempenho por matéria e trilhas de
                  estudo personalizadas.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(handleLogin)}
                className="mt-5 grid gap-3.5 2xl:mt-6 2xl:gap-4"
              >
                {/* Email */}
                <div>
                  <label className="text-sm font-bold text-slate-700">
                    E-mail
                  </label>

                  <input
                    type="email"
                    {...register("email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="joao@email.com"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 2xl:py-3"
                  />
                </div>

                {/* Senha */}
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <label className="text-sm font-bold text-slate-700">
                      Senha
                    </label>

                    <Link
                      to="/credenciais/recuperar"
                      className="text-xs font-bold text-violet-600 transition hover:text-violet-700"
                    >
                      Esqueci minha senha
                    </Link>
                  </div>

                  <div className="relative mt-1.5">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 pr-12 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 2xl:py-3"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 transition hover:text-violet-600"
                      aria-label={
                        showPassword ? "Ocultar senha" : "Mostrar senha"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative overflow-hidden rounded-2xl bg-violet-900 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-violet-600 hover:via-purple-500 hover:to-blue-600 hover:shadow-xl 2xl:py-3.5"
                >
                  <span className="relative z-10">Entrar na plataforma</span>

                  <span className="absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/40 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-slate-50 hover:text-violet-600 hover:shadow-md 2xl:py-3.5"
                >
                  <span className="grid size-5 place-items-center rounded-full border border-slate-200 text-xs font-extrabold text-blue-600">
                    G
                  </span>
                  Entrar com Google
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-slate-500 2xl:mt-5">
                Ainda não tem conta?{" "}
                <Link
                  to="/signup"
                  state={{ infosLogin: { email } }}
                  className="font-extrabold text-violet-600 transition hover:text-violet-700"
                >
                  Criar conta
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;

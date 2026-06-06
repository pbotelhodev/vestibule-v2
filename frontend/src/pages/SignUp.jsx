/* Imports Tools */
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

/* import componets */
import Logo from "../components/ui/Logo";
import Loading from "../components/ui/Loading";
import Alert from "../components/ui/Alert";

/* import services */
import { registerStudent } from "../services/authServices";

const RegisterPage = () => {
  /* navigate */
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = location.state?.infosLogin || {};

  /* UseForm */
  const { register, handleSubmit } = useForm();

  /* States */
  const [alertData, setAlertData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataUser, setDataUser] = useState({
    name: "",
    email: initialData.email || "",
    password: initialData.password || "",
    confirmePass: "",
  });
  const [firstNameUser, setFirstNameUser] = useState();

  /* Functions */
  const handleRegister = async () => {
    setLoading(true);
    try {
      if (dataUser.password === dataUser.confirmePass) {
        const response = await registerStudent(dataUser);
        const fullName = response.student?.name || "";
        setFirstNameUser(fullName.split(" ")[0]);
      } else {
        setAlertData({
          title: `Ops...!`,
          type: "warning",
          message: "As senhas não coincidem",
        });
      }
    } catch (error) {
      console.log(`Erro: ${error.response?.data?.message || error.message}`);

      setAlertData({
        type: "error",
        title: "Tivemos um probleminha...",
        message: error.response?.data?.message || "Verifique suas credenciais.",
      });
    } finally {
      setLoading(false);
      navigate("/login", {
        state: {
          alert: {
            title: `Seja bem-vindo, ${firstNameUser}!`,
            type: "success",
            message: "Cadastro realizado com sucesso.",
          },
        },
      });
    }
  };

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
                className="mb-6 cursor-pointer inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-500 shadow-sm transition hover:-translate-x-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 hover:shadow-md 2xl:mb-8"
              >
                <ArrowLeft className="size-4" />
                Voltar
              </button>

              <div className="max-w-xl 2xl:max-w-2xl">
                <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight text-slate-950 2xl:text-6xl">
                  Crie sua conta e comece a estudar com direção.
                </h1>

                <p className="mt-3 max-w-lg text-sm leading-6 font-light text-slate-500 2xl:mt-4 2xl:max-w-xl 2xl:text-base 2xl:leading-7">
                  O Vestibule organiza simulados, desempenho e trilhas para sua
                  preparação ficar mais clara desde o primeiro acesso.
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
                            Plano de estudo
                          </p>

                          <h3 className="mt-2 text-3xl font-extrabold tracking-tight 2xl:text-4xl">
                            85%
                          </h3>

                          <p className="mt-0.5 text-xs font-medium text-white/70">
                            perfil quase completo
                          </p>
                        </div>

                        <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-extrabold text-white">
                          Novo
                        </span>
                      </div>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                        <div className="h-full w-[85%] rounded-full bg-amber-400" />
                      </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm 2xl:p-5">
                      <p className="text-xs font-bold text-slate-500">
                        Simulados
                      </p>

                      <div className="mt-2 flex items-end justify-between gap-3">
                        <h3 className="text-3xl font-extrabold tracking-tight text-slate-950 2xl:text-4xl">
                          14
                        </h3>

                        <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-extrabold text-violet-600">
                          sugeridos
                        </span>
                      </div>

                      <p className="mt-2 text-xs font-semibold text-slate-400">
                        para começar hoje
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm 2xl:mt-4 2xl:p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-violet-600">
                          Primeira trilha
                        </p>

                        <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-950 2xl:text-xl">
                          Diagnóstico ENEM
                        </h3>
                      </div>

                      <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-extrabold text-amber-600">
                        45%
                      </span>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[45%] rounded-full bg-linear-to-r from-blue-600 via-violet-500 to-amber-400" />
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
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-500 shadow-sm transition hover:-translate-x-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 hover:shadow-md"
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
                  Crie sua conta de aluno.
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500 2xl:max-w-xl 2xl:text-base 2xl:leading-7">
                  Comece com simulados, desempenho por matéria e trilhas de
                  estudo personalizadas.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(handleRegister)}
                className="mt-5 grid gap-3.5 sm:grid-cols-2 2xl:mt-6 2xl:gap-4"
              >
                {/* name */}
                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Nome completo
                  </label>

                  <input
                    type="text"
                    {...register("name")}
                    value={dataUser.name}
                    onChange={(e) =>
                      setDataUser((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="João da Silva"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 2xl:py-3"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    E-mail
                  </label>

                  <input
                    type="email"
                    {...register("email")}
                    value={dataUser.email}
                    onChange={(e) =>
                      setDataUser((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="joao@email.com"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 2xl:py-3"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Senha
                  </label>

                  <input
                    type="password"
                    {...register("password")}
                    value={dataUser.password}
                    onChange={(e) =>
                      setDataUser((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    placeholder="••••••••"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 2xl:py-3"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Confirmar senha
                  </label>

                  <input
                    type="password"
                    {...register("confirmePass")}
                    value={dataUser.confirmePass}
                    onChange={(e) =>
                      setDataUser((prev) => ({
                        ...prev,
                        confirmePass: e.target.value,
                      }))
                    }
                    placeholder="••••••••"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 2xl:py-3"
                  />
                </div>

                <button
                  type="submit"
                  className="group cursor-pointer relative overflow-hidden rounded-2xl bg-violet-900 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-violet-600 hover:via-purple-500 hover:to-blue-600 hover:shadow-xl sm:col-span-2 2xl:py-3.5"
                >
                  <span className="relative z-10">Criar conta de aluno</span>

                  <span className="absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/40 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                </button>

                <button
                  type="button"
                  className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-slate-50 hover:text-violet-600 hover:shadow-md sm:col-span-2 2xl:py-3.5"
                >
                  <span className="grid size-5 place-items-center rounded-full border border-slate-200 text-xs font-extrabold text-blue-600">
                    G
                  </span>
                  Cadastrar com Google
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-slate-500 2xl:mt-5">
                Já tem conta?{" "}
                <Link
                  to="/login"
                  className="font-extrabold text-violet-600 transition hover:text-violet-700"
                >
                  Entrar
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RegisterPage;

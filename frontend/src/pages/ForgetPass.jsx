/* eslint-disable no-unused-vars */
/* Imports Tools */
import {
  ArrowLeft,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Loader2,
  LockKeyhole,
  Mail,
  Send,
  ShieldCheck,
} from "lucide-react";
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
  const [step, setStep] = useState("email");

  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState(null);

  /* Visual Functions */
  const handleGoToCode = (e) => {
    e.preventDefault();

    setAlertData({
      type: "success",
      title: "Código enviado",
      message:
        "Se esse e-mail estiver cadastrado, enviaremos um código de 6 dígitos.",
    });

    setStep("code");
  };

  const handleGoToPassword = (e) => {
    e.preventDefault();

    setAlertData({
      type: "success",
      title: "Código validado",
      message: "Agora você pode criar uma nova senha de acesso.",
    });

    setStep("password");
  };

  const handleFinish = (e) => {
    e.preventDefault();

    setAlertData({
      type: "success",
      title: "Senha atualizada",
      message: "Sua senha foi redefinida. Entre novamente com sua nova senha.",
    });

    navigate("/login")
  };

  const handleCodeChange = (index, value) => {
    const onlyNumber = value.replace(/\D/g, "").slice(0, 1);

    const updatedCode = [...code];
    updatedCode[index] = onlyNumber;

    setCode(updatedCode);
  };

  const steps = [
    {
      id: "email",
      label: "E-mail",
    },
    {
      id: "code",
      label: "Código",
    },
    {
      id: "password",
      label: "Senha",
    },
  ];

  const currentStepIndex = steps.findIndex((item) => item.id === step);

  return (
    <div>
      {loading && <Loading />}

      {alertData && (
        <Alert data={alertData} onClose={() => setAlertData(null)} />
      )}

      <main className="relative isolate grid min-h-dvh place-items-center overflow-hidden bg-white px-4 py-6 text-slate-900 sm:px-6 lg:px-8 xl:py-4">
        {/* Background */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-size-[32px_32px]" />

          <div className="absolute -top-28 -right-20 size-76 rounded-full border border-blue-200/50 bg-blue-100/70 shadow-[0_35px_140px_rgba(59,130,246,0.20)] sm:size-88 lg:size-96 xl:size-80 2xl:size-96" />

          <div className="absolute -bottom-28 -left-20 size-76 rounded-full border border-amber-200/70 bg-amber-100/75 shadow-[0_35px_140px_rgba(245,158,11,0.18)] sm:size-88 lg:size-96 xl:size-80 2xl:size-96" />

          <div className="absolute top-1/2 left-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/45 blur-3xl sm:size-96 xl:size-80 2xl:size-96" />

          <div className="absolute top-36 left-[18%] hidden size-2 rounded-full bg-violet-500/50 md:block" />
          <div className="absolute right-[24%] bottom-36 hidden size-2 rounded-full bg-blue-500/40 md:block" />
          <div className="absolute top-[28%] right-[18%] hidden size-1.5 rounded-full bg-amber-400/70 lg:block" />
        </div>

        {/* Card */}
        <section className="relative z-10 w-full max-w-xl rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-2xl shadow-violet-950/10 backdrop-blur-xl sm:p-7 lg:p-8 xl:max-w-lg xl:p-6 2xl:max-w-2xl 2xl:p-9">
          {/* Header */}
          <div className="flex items-center justify-between gap-4">
            <Logo />

            <button
              type="button"
              onClick={() => {
                if (step === "password") {
                  setStep("code");
                  return;
                }

                if (step === "code") {
                  setStep("email");
                  return;
                }

                navigate(-1);
              }}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-extrabold text-slate-500 shadow-sm transition hover:-translate-x-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 hover:shadow-md sm:px-4 sm:text-sm xl:px-3.5 xl:py-1.5 xl:text-xs 2xl:px-4 2xl:py-2 2xl:text-sm"
            >
              <ArrowLeft className="size-4 xl:size-3.5 2xl:size-4" />
              Voltar
            </button>
          </div>

          {/* Progress */}
          <div className="mt-7 grid grid-cols-3 gap-2 sm:mt-8 xl:mt-6 2xl:mt-8">
            {steps.map((item, index) => {
              const isActive = item.id === step;
              const isDone = index < currentStepIndex;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border px-3 py-2 transition ${
                    isActive
                      ? "border-violet-200 bg-violet-50 text-violet-600"
                      : isDone
                        ? "border-blue-100 bg-blue-50 text-blue-700"
                        : "border-slate-100 bg-slate-50 text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`grid size-5 shrink-0 place-items-center rounded-full text-[10px] font-extrabold ${
                        isActive
                          ? "bg-violet-600 text-white"
                          : isDone
                            ? "bg-blue-700 text-white"
                            : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="size-3" /> : index + 1}
                    </span>

                    <span className="truncate text-[11px] font-extrabold sm:text-xs xl:text-[11px] 2xl:text-xs">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step 1 - Email */}
          {step === "email" && (
            <>
              <div className="mt-8 sm:mt-9 xl:mt-6 2xl:mt-9">
                <div className="mt-5 xl:mt-4 2xl:mt-5">
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl xl:mt-3 xl:text-2xl 2xl:mt-4 2xl:text-4xl">
                    Recuperar senha
                  </h1>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 xl:text-sm xl:leading-6 2xl:text-base 2xl:leading-7">
                    Digite o e-mail vinculado à sua conta. Se encontrarmos um
                    cadastro ativo, enviaremos um código de 6 dígitos para você
                    continuar.
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleGoToCode}
                className="mt-7 grid gap-4 sm:mt-8 xl:mt-6 xl:gap-3.5 2xl:mt-8 2xl:gap-4"
              >
                <div>
                  <label className="text-sm font-extrabold text-slate-700 xl:text-xs 2xl:text-sm">
                    E-mail cadastrado
                  </label>

                  <div className="relative mt-1.5">
                    <Mail className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-slate-400 xl:size-3.5 2xl:size-4" />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="joao@email.com"
                      className="w-full rounded-2xl border border-slate-200 bg-white py-3 pr-4 pl-11 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 xl:py-2.5 xl:pl-10 xl:text-xs 2xl:py-3 2xl:pl-11 2xl:text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group cursor-pointer relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-blue-950 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-violet-600 hover:via-purple-500 hover:to-blue-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-80 xl:py-2.5 xl:text-xs 2xl:py-3 2xl:text-sm"
                >
                  {loading ? (
                    <Loader2 className="relative z-10 size-4 animate-spin xl:size-3.5 2xl:size-4" />
                  ) : (
                    <Send className="relative z-10 size-4 xl:size-3.5 2xl:size-4" />
                  )}

                  <span className="relative z-10">
                    {loading ? "Enviando..." : "Enviar código"}
                  </span>

                  <span className="absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/40 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                </button>
              </form>
            </>
          )}

          {/* Step 2 - Code */}
          {step === "code" && (
            <>
              <div className="mt-8 sm:mt-9 xl:mt-6 2xl:mt-9">
                <div className="mt-5 xl:mt-4 2xl:mt-5">
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl xl:mt-3 xl:text-2xl 2xl:mt-4 2xl:text-4xl">
                    Verifique seu e-mail
                  </h1>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 xl:text-sm xl:leading-6 2xl:text-base 2xl:leading-7">
                    Enviamos um código de 6 dígitos para o e-mail informado.
                    Digite o código abaixo para confirmar sua identidade.
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleGoToPassword}
                className="mt-7 grid gap-4 sm:mt-8 xl:mt-6 xl:gap-3.5 2xl:mt-8 2xl:gap-4"
              >
                <div>
                  <label className="text-sm font-extrabold text-slate-700 xl:text-xs 2xl:text-sm">
                    Código de verificação
                  </label>

                  <div className="mt-2 grid grid-cols-6 gap-2 sm:gap-3 xl:gap-2 2xl:gap-3">
                    {code.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) =>
                          handleCodeChange(index, e.target.value)
                        }
                        className="aspect-square w-full rounded-2xl border border-slate-200 bg-white text-center text-lg font-extrabold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 sm:text-xl xl:rounded-xl xl:text-base 2xl:rounded-2xl 2xl:text-xl"
                        placeholder="0"
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-slate-50/70 px-4 py-3 xl:px-3.5 xl:py-3 2xl:px-4">
                  <p className="text-xs leading-5 text-slate-500 2xl:text-sm 2xl:leading-6">
                    Não recebeu o código?{" "}
                    <button
                      type="button"
                      className="font-extrabold cursor-pointer text-violet-600 transition hover:text-violet-700"
                    >
                      Enviar novamente
                    </button>
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative cursor-pointer inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-blue-950 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-violet-600 hover:via-purple-500 hover:to-blue-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-80 xl:py-2.5 xl:text-xs 2xl:py-3 2xl:text-sm"
                >
                  {loading ? (
                    <Loader2 className="relative z-10 size-4 animate-spin xl:size-3.5 2xl:size-4" />
                  ) : (
                    <ShieldCheck className="relative z-10 size-4 xl:size-3.5 2xl:size-4" />
                  )}

                  <span className="relative z-10">
                    {loading ? "Validando..." : "Validar código"}
                  </span>

                  <span className="absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/40 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                </button>
              </form>
            </>
          )}

          {/* Step 3 - Password */}
          {step === "password" && (
            <>
              <div className="mt-8 sm:mt-9 xl:mt-6 2xl:mt-9">
                <div className="mt-5 xl:mt-4 2xl:mt-5">
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl xl:mt-3 xl:text-2xl 2xl:mt-4 2xl:text-4xl">
                    Crie uma nova senha
                  </h1>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 xl:text-sm xl:leading-6 2xl:text-base 2xl:leading-7">
                    Escolha uma senha segura para recuperar o acesso à sua conta
                    e continuar seus simulados no Vestibule.
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleFinish}
                className="mt-7 grid gap-4 sm:mt-8 xl:mt-6 xl:gap-3.5 2xl:mt-8 2xl:gap-4"
              >
                <div>
                  <label className="text-sm font-extrabold text-slate-700 xl:text-xs 2xl:text-sm">
                    Nova senha
                  </label>

                  <div className="relative mt-1.5">
                    <LockKeyhole className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-slate-400 xl:size-3.5 2xl:size-4" />

                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Digite sua nova senha"
                      className="w-full rounded-2xl border border-slate-200 bg-white py-3 pr-12 pl-11 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 xl:py-2.5 xl:pl-10 xl:text-xs 2xl:py-3 2xl:pl-11 2xl:text-sm"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 transition hover:text-violet-600"
                    >
                      {showPassword ? (
                        <EyeOff className="size-4 xl:size-3.5 2xl:size-4" />
                      ) : (
                        <Eye className="size-4 xl:size-3.5 2xl:size-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-extrabold text-slate-700 xl:text-xs 2xl:text-sm">
                    Confirmar nova senha
                  </label>

                  <div className="relative mt-1.5">
                    <LockKeyhole className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-slate-400 xl:size-3.5 2xl:size-4" />

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirme sua nova senha"
                      className="w-full rounded-2xl border border-slate-200 bg-white py-3 pr-12 pl-11 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 xl:py-2.5 xl:pl-10 xl:text-xs 2xl:py-3 2xl:pl-11 2xl:text-sm"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 transition hover:text-violet-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="size-4 xl:size-3.5 2xl:size-4" />
                      ) : (
                        <Eye className="size-4 xl:size-3.5 2xl:size-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="rounded-3xl border border-violet-100 xl:hidden bg-violet-50/70 px-4 py-3 xl:px-3.5 xl:py-3 2xl:px-4">
                  <p className="text-xs leading-5 text-violet-700  2xl:text-sm 2xl:leading-6">
                    Use uma senha com letras, números e pelo menos 8 caracteres
                    para manter sua conta mais segura.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative cursor-pointer inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-blue-950 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-violet-600 hover:via-purple-500 hover:to-blue-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-80 xl:py-2.5 xl:text-xs 2xl:py-3 2xl:text-sm"
                >
                  {loading ? (
                    <Loader2 className="relative z-10 size-4 animate-spin xl:size-3.5 2xl:size-4" />
                  ) : (
                    <CheckCircle2 className="relative z-10 size-4 xl:size-3.5 2xl:size-4" />
                  )}

                  <span className="relative z-10">
                    {loading ? "Salvando..." : "Redefinir senha"}
                  </span>

                  <span className="absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/40 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                </button>
              </form>
            </>
          )}

          {/* Footer */}
          <div className="mt-6 rounded-3xl border border-slate-100 bg-slate-50/70 px-4 py-4 text-center xl:mt-5 xl:px-3.5 xl:py-3 2xl:mt-6 2xl:px-4 2xl:py-4">
            <p className="text-sm leading-6 text-slate-500 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
              Lembrou sua senha?{" "}
              <Link
                to="/login"
                className="font-extrabold text-violet-600 transition hover:text-violet-700"
              >
                Entrar na conta
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ForgotPasswordPage;

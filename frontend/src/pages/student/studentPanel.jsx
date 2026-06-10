import { Outlet } from "react-router-dom";

import PanelAside from "../../components/student/panelAside";

const StudentPanel = () => {
  const student = {
    id: "user_fake_id",
    authProvider: "LOCAL",
    avatarUrl: null,
    createdAt: new Date().toISOString(),
    email: "pp@teste.com",
    emailVerifiedAt: null,
    googleId: null,
    institutionCode: null,
    lastLoginAt: null,
    name: "Pedro Paulo Mendes Botelho",
    passwordHash: 12345,
    phone: null,
    role: "STUDENT",
    status: "ACTIVE",
    studentType: "INDIVIDUAL",
    updatedAt: new Date().toISOString(),
    /* Inserir no db essa coluna */
    planActive: "premium",
  };

  return (
    <main className="relative min-h-dvh bg-white text-blue-950">
      {/* Fundo fixo */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white">
        {/* Fundo quadriculado suave */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ede9fe_1px,transparent_1px),linear-gradient(to_bottom,#ede9fe_1px,transparent_1px)] bg-size-[56px_56px] opacity-45" />

        {/* Pontinhos sutis */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#8b5cf6_1px,transparent_0)] bg-size-[28px_28px] opacity-10" />

        {/* Bolas sólidas grandes */}
        <div className="absolute -top-28 right-10 size-72 rounded-full bg-violet-200/70 md:size-88 2xl:size-104 animate-[floatSoft_9s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 -left-36 size-72 rounded-full bg-blue-100/80 md:size-88 2xl:size-100 animate-[floatReverse_11s_ease-in-out_infinite]" />
        <div className="absolute right-87 bottom-12 size-60 rounded-full bg-amber-100/80 md:size-76 2xl:size-88 animate-[floatSoft_10s_ease-in-out_infinite]" />

        {/* Bolinhas pequenas */}
        <div className="absolute top-24 left-28 hidden size-3 rounded-full bg-violet-500/60 md:block animate-[dotFloat_6s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-44 hidden size-2.5 rounded-full bg-blue-500/50 lg:block animate-[dotFloat_7s_ease-in-out_infinite]" />
        <div className="absolute top-[46%] left-[34%] hidden size-2 rounded-full bg-amber-400/75 md:block animate-[dotFloat_8s_ease-in-out_infinite]" />
      </div>

      <PanelAside student={student} />

      {/* Conteúdo rolável */}
      <section className="relative min-h-dvh px-4 py-4 pt-20 md:pl-24 md:pt-4 lg:pr-8 xl:pl-28 2xl:px-10 2xl:pl-32">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-430">
          <Outlet context={{ student }} />
        </div>
      </section>
    </main>
  );
};

export default StudentPanel;

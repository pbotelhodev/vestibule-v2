import { Outlet } from "react-router-dom";

import StudentAside from "../../components/student/panelAside";

const StudentPanel = () => {
  const student = {
    id: "user_fake_id",
    name: "Pedro Paulo Mendes Botelho",
    email: "pp@teste.com",
    role: "STUDENT",
    status: "ACTIVE",
    authProvider: "LOCAL",
    googleId: null,
    studentType: "INDIVIDUAL",
    institutionCode: null,
    avatarUrl: null,
    phone: null,
    emailVerifiedAt: null,
    lastLoginAt: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    plan: "free",
  };

  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900">
      <StudentAside student={student} />

      <section className="min-h-dvh px-4 py-4 pl-24 sm:px-6 lg:pl-28 lg:pr-8">
        <div className="mx-auto w-full max-w-7xl">
          <Outlet context={{ student }} />
        </div>
      </section>
    </main>
  );
};

export default StudentPanel;

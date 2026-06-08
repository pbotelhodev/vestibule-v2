/* Const Tools */
import { useOutletContext } from "react-router-dom";

/* Const Assets */

/* Const components */
import FreeDashboard from "../../components/student/FreeDashboard";
import PremiumDashboard from "../../components/student/PremiuimDashboard";
import ProDashboard from "../../components/student/ProDashboard";

/* Const services */

/* Const services */

const StudentDashboard = () => {
  const { student } = useOutletContext();

  const currentPlan = student?.plan || "free";

  const dashboards = {
    free: <FreeDashboard student={student} />,
    pro: <ProDashboard student={student} />,
    premium: <PremiumDashboard student={student} />,
  };

  return dashboards[currentPlan] || dashboards.free;
};
export default StudentDashboard;

/* Const Tools */
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
/* Const Assets */

/* Const components */
import FreeDashboard from "../../components/student/FreeDashboard";
import PremiumDashboard from "../../components/student/PremiuimDashboard";
import ProDashboard from "../../components/student/ProDashboard";

/* Import services */
import { getStudentResults } from "../../services/dashboard/callDashboard";

const StudentDashboard = () => {
  const { student } = useOutletContext();

  const [data, setData] = useState();

  useEffect(() => {
    const dashboardData = async () => {
      try {
        const response = await getStudentResults(student.id);
        setData(response)
        console.log(response);
        return 
      } catch (error) {
        console.error(error);
      }
    };
    dashboardData();
  }, []);

  const currentPlan = student?.planActive || "free";

  const dashboards = {
    free: <FreeDashboard data={data} student={student} />,
    pro: <ProDashboard data={data} student={student} />,
    premium: <PremiumDashboard data={data} student={student} />,
  };

  return dashboards[currentPlan] || dashboards.free;
};
export default StudentDashboard;

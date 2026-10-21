/* Tools */
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

/* Assets */

/* Components */
import Loading from "../../components/ui/Loading"; //Importa o componente de loading

/* Services */

const StudentSimulation = () => {
  const [loading, setLoading] = useState(true); //Chama a página de loading
  const { simulationId } = useParams(); //Chama o parâmetro simulationId
  const navigate = useNavigate(); //Chama a funçao de navegar
  const outletContext = useOutletContext(); //Chama o contexto
  const student = outletContext?.student; //Coleta os dados student do contexto
};

export default StudentSimulation;

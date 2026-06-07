import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => {navigate("/")}} className="flex cursor-pointer items-center gap-2">
      <img src={LogoImg} alt="Vestibule" className="h-10 w-auto" />

      <div className="flex flex-col gap-0 justify-center">
        <h2 className="m-0 text-xl leading-none font-bold tracking-tight text-slate-950">
          Vestibule
        </h2>

        <p className="m-0 text-[9px] leading-none uppercase tracking-[0.2em] text-blue-700">
          Student SaaS
        </p>
      </div>
    </div>
  );
};

export default Logo;

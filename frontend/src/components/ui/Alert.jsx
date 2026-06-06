/* eslint-disable react-hooks/set-state-in-effect */
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const Alert = ({ data, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (data) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(() => onClose?.(), 300); // espera a animação terminar
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [data, onClose]);

  if (!data) return null;

  const colors = {
    success: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
    },
    info: {
      bg: "bg-violet-50",
      border: "border-violet-200",
      text: "text-violet-700",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-700",
    },
  };

  const style = colors[data.type] || colors.info;

  return (
    <div
      className={`fixed top-0 left-1/2 z-50 w-80 max-w-full -translate-x-1/2 transform transition-all duration-300 ${
        show ? "translate-y-6 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      <div
        className={`flex flex-col items-start rounded-2xl border ${style.border} ${style.bg} p-4 shadow-lg font-plus-jakarta-sans`}
      >
        <div className="flex w-full justify-between items-start">
          <div>
            <h3 className={`font-bold text-sm mb-1 ${style.text}`}>
              {data.title}
            </h3>
            <p className={`text-xs ${style.text}`}>{data.message}</p>
          </div>
          {onClose && (
            <button
              onClick={() => setShow(false)}
              className={`ml-3 rounded-full p-1 ${style.text} hover:text-opacity-80`}
              aria-label="Fechar alerta"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;

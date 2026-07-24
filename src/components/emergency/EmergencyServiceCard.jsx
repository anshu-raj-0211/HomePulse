import { FaArrowRight } from "react-icons/fa";

function EmergencyServiceCard({
  title,
  subtitle,
  icon,
  color = "bg-slate-900",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`${color} w-full rounded-3xl p-5 flex items-center justify-between shadow-lg hover:scale-[1.02] transition-all duration-300`}
    >
      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
          {icon}
        </div>

        <div className="text-left">

          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="text-slate-300 text-sm mt-1">
            {subtitle}
          </p>

        </div>

      </div>

      <FaArrowRight className="text-white text-lg" />

    </button>
  );
}

export default EmergencyServiceCard;
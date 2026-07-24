import { FaClock, FaPills } from "react-icons/fa";

function NextMedicineCard() {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 shadow-lg border border-slate-800">

      <div className="flex items-center gap-3 mb-5">
        <FaPills className="text-blue-400 text-2xl" />
        <h2 className="text-xl font-bold text-white">
          Next Medicine
        </h2>
      </div>

      <h3 className="text-2xl font-semibold text-white">
        Paracetamol
      </h3>

      <p className="text-slate-400 mt-1">
        650 mg
      </p>

      <div className="flex items-center gap-2 mt-5 text-blue-400">
        <FaClock />
        <span>8:00 PM</span>
      </div>

    </div>
  );
}

export default NextMedicineCard;
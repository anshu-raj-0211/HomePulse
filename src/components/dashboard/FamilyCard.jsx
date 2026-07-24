import { FaUsers } from "react-icons/fa";

function FamilyCard() {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 shadow-lg border border-slate-800">

      <div className="flex items-center gap-3">

        <FaUsers className="text-green-400 text-2xl" />

        <div>

          <h2 className="text-xl font-bold text-white">
            Family Care
          </h2>

          <p className="text-slate-400 mt-1">
            2 Members Connected
          </p>

        </div>

      </div>

    </div>
  );
}

export default FamilyCard;
import {
  FaHeartbeat,
  FaTint,
  FaWeight,
  FaRulerVertical,
} from "react-icons/fa";

function HealthInfoCard() {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-white mb-6">
        Health Information
      </h2>

      <div className="grid grid-cols-2 gap-5">

        <div className="bg-slate-800 rounded-2xl p-4">
          <FaTint className="text-red-400 text-xl mb-3" />
          <p className="text-slate-400 text-sm">Blood Group</p>
          <h3 className="text-xl font-bold text-white">B+</h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4">
          <FaWeight className="text-green-400 text-xl mb-3" />
          <p className="text-slate-400 text-sm">Weight</p>
          <h3 className="text-xl font-bold text-white">68 kg</h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4">
          <FaRulerVertical className="text-blue-400 text-xl mb-3" />
          <p className="text-slate-400 text-sm">Height</p>
          <h3 className="text-xl font-bold text-white">175 cm</h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4">
          <FaHeartbeat className="text-pink-400 text-xl mb-3" />
          <p className="text-slate-400 text-sm">Status</p>
          <h3 className="text-xl font-bold text-green-400">
            Healthy
          </h3>
        </div>

      </div>

    </div>
  );
}

export default HealthInfoCard;
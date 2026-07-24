import {
  FaPhoneAlt,
  FaHospital,
  FaAmbulance,
} from "react-icons/fa";

function EmergencyCard() {
  return (
    <div className="bg-red-600 rounded-3xl p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-white">
        🚨 Emergency
      </h2>

      <p className="text-red-100 mt-2">
        Get help immediately when needed.
      </p>

      <div className="grid grid-cols-3 gap-3 mt-6">

        <button className="bg-white text-red-600 rounded-2xl py-4 flex flex-col items-center gap-2 hover:scale-105 transition">
          <FaPhoneAlt size={22} />
          <span className="text-sm font-medium">SOS</span>
        </button>

        <button className="bg-white text-red-600 rounded-2xl py-4 flex flex-col items-center gap-2 hover:scale-105 transition">
          <FaHospital size={22} />
          <span className="text-sm font-medium">Hospital</span>
        </button>

        <button className="bg-white text-red-600 rounded-2xl py-4 flex flex-col items-center gap-2 hover:scale-105 transition">
          <FaAmbulance size={22} />
          <span className="text-sm font-medium">Ambulance</span>
        </button>

      </div>

    </div>
  );
}

export default EmergencyCard;
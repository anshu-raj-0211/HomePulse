import { FaHeartbeat } from "react-icons/fa";

function AINurseCard() {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-purple-700 rounded-3xl p-6 shadow-xl">

      <div className="flex items-center gap-3">
        <FaHeartbeat className="text-3xl text-white" />

        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Health Companion
          </h2>

          <p className="text-violet-100 mt-2">
            Ask health questions, understand medicines, and receive guidance anytime.
          </p>
        </div>

      </div>

      <button className="mt-6 bg-white text-purple-700 font-semibold px-5 py-3 rounded-xl hover:scale-105 transition">
        Talk Now
      </button>

    </div>
  );
}

export default AINurseCard;
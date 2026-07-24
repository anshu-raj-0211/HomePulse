import { FaPhoneAlt } from "react-icons/fa";

function SOSCard() {
  return (
    <div className="bg-red-600 rounded-3xl p-8 text-center shadow-xl">

      <div className="w-24 h-24 mx-auto rounded-full bg-white flex items-center justify-center">

        <FaPhoneAlt className="text-red-600 text-4xl" />

      </div>

      <h2 className="text-3xl font-bold text-white mt-6">
        SOS
      </h2>

      <p className="text-red-100 mt-3">
        Press immediately during an emergency.
      </p>

      <button className="mt-8 bg-white text-red-600 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition">
        Call Emergency
      </button>

    </div>
  );
}

export default SOSCard;
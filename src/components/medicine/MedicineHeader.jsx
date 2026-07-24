import { FaPlus } from "react-icons/fa";

function MedicineHeader({ onAddClick }) {
  return (
    <div className="flex items-center justify-between mb-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          💊 Medicine Manager
        </h1>

        <p className="text-slate-400 mt-2">
          Manage your daily medicines effortlessly.
        </p>
      </div>

      <button
        onClick={onAddClick}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition-all duration-300 shadow-lg"
      >
        <FaPlus />
        Add Medicine
      </button>

    </div>
  );
}

export default MedicineHeader;
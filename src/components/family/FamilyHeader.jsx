import { FaUserPlus } from "react-icons/fa";

function FamilyHeader({ onAddClick }) {
  return (
    <div className="flex items-center justify-between mb-8">

      <div>
        <h1 className="text-3xl font-bold text-white">
          👨‍👩‍👧 Family Care
        </h1>

        <p className="text-slate-400 mt-2">
          Manage your loved ones' health in one place.
        </p>
      </div>

      <button
        onClick={onAddClick}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
      >
        <FaUserPlus />
        Add Member
      </button>

    </div>
  );
}

export default FamilyHeader;
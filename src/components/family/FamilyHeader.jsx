import { FaPlus, FaUsers } from "react-icons/fa";

function FamilyHeader({ onAddClick }) {
  return (
    <div className="flex items-center justify-between mb-8">

      <div>
        <div className="flex items-center gap-3">

          <div className="bg-blue-600 p-3 rounded-2xl">
            <FaUsers className="text-white text-xl" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">
              Family Members
            </h1>

            <p className="text-slate-400 mt-1">
              Manage your loved ones' health information
            </p>
          </div>

        </div>
      </div>

      <button
        onClick={onAddClick}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl font-semibold"
      >
        <FaPlus />
        Add Member
      </button>

    </div>
  );
}

export default FamilyHeader;
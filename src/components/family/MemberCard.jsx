import {
  FaUser,
  FaPhone,
  FaTint,
  FaPills,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

function MemberCard({ member, onDelete, onEdit }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg">

      <div className="flex justify-between">

        <div>

          <div className="flex items-center gap-3">

            <FaUser className="text-blue-400 text-xl" />

            <h2 className="text-2xl font-bold text-white">
              {member.name}
            </h2>

          </div>

          <p className="text-slate-400 mt-2">
            Age: {member.age}
          </p>

        </div>

        <div className="flex gap-3">

          <button
            onClick={() => onEdit(member)}
            className="text-blue-400"
          >
            <FaEdit />
          </button>

          <button
            onClick={() => onDelete(member.id)}
            className="text-red-500"
          >
            <FaTrash />
          </button>

        </div>

      </div>

      <div className="mt-5 space-y-3">

        <div className="flex items-center gap-3 text-slate-300">
          <FaPhone />
          {member.phone}
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <FaTint />
          Blood Group: {member.bloodGroup}
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <FaPills />
          {member.medicines} Medicines
        </div>

      </div>

    </div>
  );
}

export default MemberCard;
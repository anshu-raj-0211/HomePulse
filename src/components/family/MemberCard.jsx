import {
  FaUser,
  FaPhone,
  FaTint,
  FaHeartbeat,
  FaUserFriends,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

function MemberCard({
  member,
  onDelete,
  onEdit,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg hover:border-blue-500 transition-all duration-300">

      {/* Header */}
      <div className="flex justify-between items-start">

        <div>

          <div className="flex items-center gap-3">

            <div className="bg-blue-600 p-3 rounded-2xl">
              <FaUser className="text-white text-lg" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                {member.name}
              </h2>

              <div className="flex items-center gap-2 mt-1 text-blue-400">
                <FaUserFriends />
                <span>{member.relationship}</span>
              </div>
            </div>

          </div>

        </div>

        <div className="flex gap-3">

          <button
            onClick={() => onEdit(member)}
            className="text-blue-400 hover:text-blue-300 transition"
          >
            <FaEdit size={18} />
          </button>

          <button
            onClick={() => onDelete(member.id)}
            className="text-red-500 hover:text-red-400 transition"
          >
            <FaTrash size={18} />
          </button>

        </div>

      </div>

      {/* Details */}

      <div className="mt-6 space-y-4">

        <div className="flex items-center gap-3 text-slate-300">
          <FaPhone className="text-green-400" />
          <span>{member.phone}</span>
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <FaTint className="text-red-400" />
          <span>Blood Group: {member.bloodGroup}</span>
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <FaHeartbeat className="text-pink-400" />
          <span>
            {member.condition || "No medical condition"}
          </span>
        </div>

      </div>

    </div>
  );
}

export default MemberCard;
import {
  FaClock,
  FaTrash,
  FaCheckCircle,
  FaEdit,
} from "react-icons/fa";

function MedicineCard({
  medicine,
  onDelete,
  onToggleTaken,
  onEdit,
}) {
  const getStatusColor = () => {
    switch (medicine.status) {
      case "Taken":
        return "text-green-400";
      case "Upcoming":
        return "text-yellow-400";
      case "Missed":
        return "text-red-400";
      default:
        return "text-slate-300";
    }
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 shadow-lg hover:border-blue-500 transition">

      {/* Header */}
      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-xl font-semibold text-white">
            {medicine.name}
          </h2>

          <p className="text-slate-400 mt-1">
            {medicine.dosage}
          </p>
        </div>

        <div className="flex gap-3">

          <button
            onClick={() => onEdit(medicine)}
            className="text-blue-400 hover:text-blue-300 transition"
          >
            <FaEdit size={18} />
          </button>

          <button
            onClick={() => onDelete(medicine.id)}
            className="text-red-500 hover:text-red-400 transition"
          >
            <FaTrash size={18} />
          </button>

        </div>

      </div>

      {/* Footer */}

      <div className="flex justify-between items-center mt-6">

        <div className="flex items-center gap-2 text-slate-300">
          <FaClock />
          <span>{medicine.time}</span>
        </div>

        <div className="flex items-center gap-4">

          <span className={`font-medium ${getStatusColor()}`}>
            {medicine.status}
          </span>

          <button
            onClick={() => onToggleTaken(medicine.id)}
            className={`p-2 rounded-full transition ${
              medicine.status === "Taken"
                ? "bg-green-600"
                : "bg-slate-700 hover:bg-green-600"
            }`}
          >
            <FaCheckCircle className="text-white" />
          </button>

        </div>

      </div>

    </div>
  );
}

export default MedicineCard;
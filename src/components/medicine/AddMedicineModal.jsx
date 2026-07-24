import { useState } from "react";

function AddMedicineModal({
  isOpen,
  onClose,
  onAddMedicine,
}) {
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const resetForm = () => {
    setName("");
    setDosage("");
    setTime("");
  };

  const handleSave = async () => {
    if (!name.trim() || !dosage.trim() || !time) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      setLoading(true);

      await onAddMedicine({
        name: name.trim(),
        dosage: dosage.trim(),
        time,
        status: "Upcoming",
      });

      resetForm();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to save medicine.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-slate-900 w-[90%] max-w-md rounded-3xl p-6 border border-slate-700">

        <h2 className="text-2xl font-bold text-white mb-6">
          Add Medicine
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Medicine Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Dosage (e.g. 500mg)"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
          />

        </div>

        <div className="flex gap-3 mt-8">

          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            disabled={loading}
            className="flex-1 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddMedicineModal;
import { useState } from "react";

function AddMemberModal({ isOpen, onClose, onAddMember }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [medicines, setMedicines] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (
      !name ||
      !age ||
      !phone ||
      !bloodGroup ||
      !medicines
    ) {
      alert("Please fill all fields.");
      return;
    }

    onAddMember({
      id: Date.now(),
      name,
      age,
      phone,
      bloodGroup,
      medicines,
    });

    setName("");
    setAge("");
    setPhone("");
    setBloodGroup("");
    setMedicines("");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-slate-900 w-[90%] max-w-md rounded-3xl p-6">

        <h2 className="text-2xl font-bold text-white mb-6">
          Add Family Member
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-slate-800 rounded-xl p-3 mb-4 text-white"
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full bg-slate-800 rounded-xl p-3 mb-4 text-white"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-slate-800 rounded-xl p-3 mb-4 text-white"
        />

        <input
          type="text"
          placeholder="Blood Group"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="w-full bg-slate-800 rounded-xl p-3 mb-4 text-white"
        />

        <input
          type="number"
          placeholder="Medicines Count"
          value={medicines}
          onChange={(e) => setMedicines(e.target.value)}
          className="w-full bg-slate-800 rounded-xl p-3 mb-6 text-white"
        />

        <div className="flex gap-3">

          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-slate-700 text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
          >
            Add Member
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddMemberModal;
import { useEffect, useState } from "react";

function EditMemberModal({
  isOpen,
  onClose,
  member,
  onSave,
}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [medicines, setMedicines] = useState("");

  useEffect(() => {
    if (member) {
      setName(member.name);
      setAge(member.age);
      setPhone(member.phone);
      setBloodGroup(member.bloodGroup);
      setMedicines(member.medicines);
    }
  }, [member]);

  if (!isOpen || !member) return null;

  const handleSave = () => {
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

    onSave({
      ...member,
      name,
      age,
      phone,
      bloodGroup,
      medicines,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-slate-900 w-[90%] max-w-md rounded-3xl p-6">

        <h2 className="text-2xl font-bold text-white mb-6">
          Edit Family Member
        </h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-slate-800 rounded-xl p-3 mb-4 text-white"
        />

        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full bg-slate-800 rounded-xl p-3 mb-4 text-white"
        />

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-slate-800 rounded-xl p-3 mb-4 text-white"
        />

        <input
          type="text"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="w-full bg-slate-800 rounded-xl p-3 mb-4 text-white"
        />

        <input
          type="number"
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
            onClick={handleSave}
            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditMemberModal;
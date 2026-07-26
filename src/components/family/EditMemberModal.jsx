import { useEffect, useState } from "react";

function EditMemberModal({
  isOpen,
  onClose,
  member,
  onSave,
}) {
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [condition, setCondition] = useState("");

  useEffect(() => {
    if (member) {
      setName(member.name || "");
      setRelationship(member.relationship || "");
      setPhone(member.phone || "");
      setBloodGroup(member.bloodGroup || "");
      setCondition(member.condition || "");
    }
  }, [member]);

  if (!isOpen || !member) return null;

  const handleSave = async () => {
    if (
      !name.trim() ||
      !relationship.trim() ||
      !phone.trim() ||
      !bloodGroup.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    await onSave({
      ...member,
      name: name.trim(),
      relationship: relationship.trim(),
      phone: phone.trim(),
      bloodGroup,
      condition: condition.trim(),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-[90%] max-w-md p-6">

        <h2 className="text-2xl font-bold text-white mb-6">
          Edit Family Member
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-xl border border-slate-700 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Relationship"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-xl border border-slate-700 outline-none focus:border-blue-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-xl border border-slate-700 outline-none focus:border-blue-500"
          />

          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-xl border border-slate-700 outline-none focus:border-blue-500"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <textarea
            rows="3"
            placeholder="Medical Condition (Optional)"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-xl border border-slate-700 outline-none resize-none focus:border-blue-500"
          />

        </div>

        <div className="flex gap-3 mt-8">

          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditMemberModal;
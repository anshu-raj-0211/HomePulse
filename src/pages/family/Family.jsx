import { useState } from "react";

import FamilyHeader from "../../components/family/FamilyHeader";
import MemberCard from "../../components/family/MemberCard";
import AddMemberModal from "../../components/family/AddMemberModal";
import EditMemberModal from "../../components/family/EditMemberModal";

function Family() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Rahul Singh",
      age: 52,
      phone: "9876543210",
      bloodGroup: "B+",
      medicines: 3,
    },
    {
      id: 2,
      name: "Priya Singh",
      age: 48,
      phone: "9876501234",
      bloodGroup: "O+",
      medicines: 2,
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  // Add Member
  const handleAddMember = (member) => {
    setMembers((prev) => [...prev, member]);
  };

  // Delete Member
  const handleDeleteMember = (id) => {
    setMembers((prev) =>
      prev.filter((member) => member.id !== id)
    );
  };

  // Edit Member
  const handleEditClick = (member) => {
    setSelectedMember(member);
    setShowEditModal(true);
  };

  const handleSaveMember = (updatedMember) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === updatedMember.id
          ? updatedMember
          : member
      )
    );

    setShowEditModal(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">

      <FamilyHeader
        onAddClick={() => setShowAddModal(true)}
      />

      <div className="space-y-5 mt-8">

        {members.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onDelete={handleDeleteMember}
            onEdit={handleEditClick}
          />
        ))}

      </div>

      <AddMemberModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAddMember={handleAddMember}
      />

      <EditMemberModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        member={selectedMember}
        onSave={handleSaveMember}
      />

    </main>
  );
}

export default Family;
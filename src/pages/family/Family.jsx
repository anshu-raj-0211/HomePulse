import { useState } from "react";

import useFamily from "../../hooks/useFamily";

import FamilyHeader from "../../components/family/FamilyHeader";
import MemberCard from "../../components/family/MemberCard";
import AddMemberModal from "../../components/family/AddMemberModal";
import EditMemberModal from "../../components/family/EditMemberModal";
function Family() {
  const {
    familyMembers,
    loading,
    createFamilyMember,
    editFamilyMember,
    removeFamilyMember,
  } = useFamily();

  const [openAddModal, setOpenAddModal] = useState(false);

  const [openEditModal, setOpenEditModal] = useState(false);

  const [selectedMember, setSelectedMember] = useState(null);

  const handleAddMember = async (member) => {
    await createFamilyMember(member);
  };

  const handleDeleteMember = async (id) => {
    await removeFamilyMember(id);
  };

  const handleEditClick = (member) => {
    setSelectedMember(member);
    setOpenEditModal(true);
  };

  const handleSaveMember = async (member) => {
    await editFamilyMember(member);

    setOpenEditModal(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 flex justify-center items-center text-white text-xl">
        Loading Family...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">

      <FamilyHeader
        onAddClick={() => setOpenAddModal(true)}
      />

      <div className="space-y-5 mt-8">

        {familyMembers.length > 0 ? (
          familyMembers.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              onDelete={handleDeleteMember}
              onEdit={handleEditClick}
            />
          ))
        ) : (
          <div className="text-center py-16 text-slate-400">
            No family members added yet.
          </div>
        )}

      </div>

      <AddMemberModal
        isOpen={openAddModal}
        onClose={() => setOpenAddModal(false)}
        onAddMember={handleAddMember}
      />

      <EditMemberModal
        isOpen={openEditModal}
        onClose={() => setOpenEditModal(false)}
        member={selectedMember}
        onSave={handleSaveMember}
      />

    </main>
  );
}

export default Family;
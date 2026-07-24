import { useMemo, useState } from "react";

import MedicineHeader from "../../components/medicine/MedicineHeader";
import ProgressCard from "../../components/medicine/ProgressCard";
import SearchBar from "../../components/medicine/SearchBar";
import FilterTabs from "../../components/medicine/FilterTabs";
import MedicineCard from "../../components/medicine/MedicineCard";
import AddMedicineModal from "../../components/medicine/AddMedicineModal";
import EditMedicineModal from "../../components/medicine/EditMedicineModal";

import useMedicines from "../../hooks/useMedicines";

function Medicine() {
  const {
    medicines,
    loading,
    createMedicine,
    removeMedicine,
    editMedicine,
    toggleTaken,
  } = useMedicines();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [openAddModal, setOpenAddModal] = useState(false);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const handleAddMedicine = async (medicine) => {
    await createMedicine(medicine);
  };

  const handleDeleteMedicine = async (id) => {
    await removeMedicine(id);
  };

  const handleToggleTaken = async (id) => {
    const medicine = medicines.find((m) => m.id === id);

    if (!medicine) return;

    await toggleTaken(medicine);
  };

  const handleEditClick = (medicine) => {
    setSelectedMedicine(medicine);
    setOpenEditModal(true);
  };

  const handleSaveMedicine = async (updatedMedicine) => {
    await editMedicine(updatedMedicine);

    setOpenEditModal(false);
  };

  const filteredMedicines = useMemo(() => {
    return medicines.filter((medicine) => {
      const searchMatch = medicine.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const filterMatch =
        filter === "All"
          ? true
          : medicine.status === filter;

      return searchMatch && filterMatch;
    });
  }, [medicines, search, filter]);

  const total = medicines.length;

  const taken = medicines.filter(
    (medicine) => medicine.status === "Taken"
  ).length;

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-xl">
        Loading Medicines...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">

      <MedicineHeader
        onAddClick={() => setOpenAddModal(true)}
      />

      <ProgressCard
        taken={taken}
        total={total}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FilterTabs
        filter={filter}
        setFilter={setFilter}
      />

      <div className="space-y-5 mt-8">

        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((medicine) => (
            <MedicineCard
              key={medicine.id}
              medicine={medicine}
              onDelete={handleDeleteMedicine}
              onToggleTaken={handleToggleTaken}
              onEdit={handleEditClick}
            />
          ))
        ) : (
          <div className="text-center py-10 text-slate-400">
            No medicines found.
          </div>
        )}

      </div>

      <AddMedicineModal
        isOpen={openAddModal}
        onClose={() => setOpenAddModal(false)}
        onAddMedicine={handleAddMedicine}
      />

      <EditMedicineModal
        isOpen={openEditModal}
        onClose={() => setOpenEditModal(false)}
        medicine={selectedMedicine}
        onSave={handleSaveMedicine}
      />

    </main>
  );
}

export default Medicine;
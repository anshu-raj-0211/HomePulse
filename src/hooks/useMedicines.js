import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

import {
  addMedicine,
  getMedicines,
  deleteMedicine,
  updateMedicine,
} from "../services/medicineService";

function useMedicines() {
  const { currentUser } = useAuth();

  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMedicines();
  }, [currentUser]);

  const loadMedicines = async () => {
    if (!currentUser) return;

    try {
      setLoading(true);

      const data = await getMedicines(currentUser.uid);

      setMedicines(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createMedicine = async (medicine) => {
    try {
      await addMedicine({
        ...medicine,
        userId: currentUser.uid,
      });

      await loadMedicines();
    } catch (error) {
      console.error(error);
    }
  };

  const removeMedicine = async (id) => {
    try {
      await deleteMedicine(id);

      await loadMedicines();
    } catch (error) {
      console.error(error);
    }
  };

  const editMedicine = async (medicine) => {
    try {
      await updateMedicine(medicine.id, medicine);

      await loadMedicines();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTaken = async (medicine) => {
    const status =
      medicine.status === "Taken"
        ? "Upcoming"
        : "Taken";

    try {
      await updateMedicine(medicine.id, {
        ...medicine,
        status,
      });

      await loadMedicines();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    medicines,
    loading,
    createMedicine,
    removeMedicine,
    editMedicine,
    toggleTaken,
  };
}

export default useMedicines;
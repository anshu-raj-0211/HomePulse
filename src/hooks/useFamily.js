import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

import {
  addFamilyMember,
  getFamilyMembers,
  updateFamilyMember,
  deleteFamilyMember,
} from "../services/familyService";

function useFamily() {
  const { currentUser } = useAuth();

  const [familyMembers, setFamilyMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFamilyMembers();
  }, [currentUser]);

  const loadFamilyMembers = async () => {
    if (!currentUser) return;

    try {
      setLoading(true);

      const data = await getFamilyMembers(currentUser.uid);

      setFamilyMembers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createFamilyMember = async (member) => {
    try {
      await addFamilyMember({
        ...member,
        userId: currentUser.uid,
      });

      await loadFamilyMembers();
    } catch (error) {
      console.error(error);
    }
  };

  const editFamilyMember = async (member) => {
    try {
      await updateFamilyMember(member.id, member);

      await loadFamilyMembers();
    } catch (error) {
      console.error(error);
    }
  };

  const removeFamilyMember = async (id) => {
    try {
      await deleteFamilyMember(id);

      await loadFamilyMembers();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    familyMembers,
    loading,
    createFamilyMember,
    editFamilyMember,
    removeFamilyMember,
  };
}

export default useFamily;
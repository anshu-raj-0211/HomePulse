import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const familyCollection = collection(db, "family");

export const getFamilyMembers = async (userId) => {
  const q = query(
    familyCollection,
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addFamilyMember = async (member) => {
  await addDoc(familyCollection, member);
};

export const updateFamilyMember = async (id, member) => {
  const ref = doc(db, "family", id);

  await updateDoc(ref, member);
};

export const deleteFamilyMember = async (id) => {
  const ref = doc(db, "family", id);

  await deleteDoc(ref);
};
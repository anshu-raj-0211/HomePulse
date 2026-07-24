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

const medicineCollection = collection(db, "medicines");

// Add Medicine
export const addMedicine = async (medicine) => {
  const docRef = await addDoc(medicineCollection, medicine);
  return docRef.id;
};

// Get Medicines of Logged-in User
export const getMedicines = async (uid) => {
  const q = query(
    medicineCollection,
    where("userId", "==", uid)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Delete Medicine
export const deleteMedicine = async (id) => {
  await deleteDoc(doc(db, "medicines", id));
};

// Update Medicine
export const updateMedicine = async (id, medicine) => {
  await updateDoc(
    doc(db, "medicines", id),
    medicine
  );
};
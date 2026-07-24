import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkVmxAzzLnJMBQVbqPBFm9uYa3FwfdSyo",
  authDomain: "homepulse-27d32.firebaseapp.com",
  projectId: "homepulse-27d32",
  storageBucket: "homepulse-27d32.firebasestorage.app",
  messagingSenderId: "696422643498",
  appId: "1:696422643498:web:2e6acfeb51f36d4a5f9053",
  measurementId: "G-3K5WSF2G2Y",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firebase";

function LogoutCard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    try {
      await signOut(auth);

      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-600 hover:bg-red-700 rounded-3xl p-5 flex justify-center items-center gap-3 transition"
    >
      <FaSignOutAlt className="text-white text-xl" />

      <span className="text-white font-bold text-lg">
        Logout
      </span>
    </button>
  );
}

export default LogoutCard;
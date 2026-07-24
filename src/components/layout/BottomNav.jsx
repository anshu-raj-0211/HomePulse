import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaPills,
  FaHeartbeat,
  FaUsers,
  FaUser,
} from "react-icons/fa";

function BottomNav() {
  const linkClass = ({ isActive }) =>
    `flex flex-col items-center text-xs ${
      isActive ? "text-blue-500" : "text-gray-400"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-slate-900 border-t border-slate-700 h-16 flex justify-around items-center">

      <NavLink to="/dashboard" className={linkClass}>
        <FaHome size={20} />
        Home
      </NavLink>

      <NavLink to="/medicine" className={linkClass}>
        <FaPills size={20} />
        Medicine
      </NavLink>

      <NavLink to="/nurse" className={linkClass}>
        <FaHeartbeat size={20} />
        Nurse
      </NavLink>

      <NavLink to="/family" className={linkClass}>
        <FaUsers size={20} />
        Family
      </NavLink>

      <NavLink to="/profile" className={linkClass}>
        <FaUser size={20} />
        Profile
      </NavLink>

    </nav>
  );
}

export default BottomNav;
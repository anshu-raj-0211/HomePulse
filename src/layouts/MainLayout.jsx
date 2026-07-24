import { Outlet } from "react-router-dom";
import BottomNav from "../components/layout/BottomNav";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pb-20">
      <Outlet />
      <BottomNav />
    </div>
  );
}

export default MainLayout;
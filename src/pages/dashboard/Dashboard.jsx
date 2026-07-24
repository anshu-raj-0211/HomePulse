import WelcomeCard from "../../components/dashboard/WelcomeCard";
import ProgressOverview from "../../components/dashboard/ProgressOverview";
import NextMedicineCard from "../../components/dashboard/NextMedicineCard";
import AINurseCard from "../../components/dashboard/AINurseCard";
import FamilyCard from "../../components/dashboard/FamilyCard";
import EmergencyCard from "../../components/dashboard/EmergencyCard";

function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">

      <WelcomeCard />

      <div className="mt-6">
        <ProgressOverview
          taken={2}
          total={5}
        />
      </div>

      <div className="mt-6">
        <NextMedicineCard />
      </div>

      <div className="mt-6">
        <AINurseCard />
      </div>

      <div className="mt-6">
        <FamilyCard />
      </div>

      <div className="mt-6 mb-24">
        <EmergencyCard />
      </div>

    </main>
  );
}

export default Dashboard;

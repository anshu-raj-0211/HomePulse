import ProfileHeader from "../../components/profile/ProfileHeader";
import UserInfoCard from "../../components/profile/UserInfoCard";
import HealthInfoCard from "../../components/profile/HealthInfoCard";
import EmergencyCard from "../../components/profile/EmergencyCard";
import SettingsCard from "../../components/profile/SettingsCard";
import LogoutCard from "../../components/profile/LogoutCard";

function Profile() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">

      <ProfileHeader />

      <div className="mt-6">
        <UserInfoCard />
      </div>

      <div className="mt-6">
        <HealthInfoCard />
      </div>

      <div className="mt-6">
        <EmergencyCard />
      </div>

      <div className="mt-6">
        <SettingsCard />
      </div>

      <div className="mt-6 mb-24">
        <LogoutCard />
      </div>

    </main>
  );
}

export default Profile;
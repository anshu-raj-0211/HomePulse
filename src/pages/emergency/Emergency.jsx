import {
  FaHospital,
  FaAmbulance,
  FaShieldAlt,
} from "react-icons/fa";

import EmergencyHeader from "../../components/emergency/EmergencyHeader";
import SOSCard from "../../components/emergency/SOSCard";
import EmergencyServiceCard from "../../components/emergency/EmergencyServiceCard";
import EmergencyContacts from "../../components/emergency/EmergencyContacts";

function Emergency() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">

      <EmergencyHeader />

      <div className="mt-6">
        <SOSCard />
      </div>

      <div className="mt-6 space-y-4">

        <EmergencyServiceCard
          title="Nearby Hospitals"
          subtitle="Find the nearest hospital quickly"
          icon={<FaHospital />}
          color="bg-blue-600"
          onClick={() => alert("Google Maps integration coming soon!")}
        />

        <EmergencyServiceCard
          title="Call Ambulance"
          subtitle="Get emergency medical assistance"
          icon={<FaAmbulance />}
          color="bg-green-600"
          onClick={() => alert("Ambulance calling feature coming soon!")}
        />

        <EmergencyServiceCard
          title="Police Assistance"
          subtitle="Contact the nearest police station"
          icon={<FaShieldAlt />}
          color="bg-indigo-600"
          onClick={() => alert("Police contact feature coming soon!")}
        />

      </div>

      <div className="mt-6 mb-24">
        <EmergencyContacts />
      </div>

    </main>
  );
}

export default Emergency;
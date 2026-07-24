import { FaPhoneAlt, FaUserShield } from "react-icons/fa";

function EmergencyContacts() {
  const contacts = [
    {
      name: "Father",
      phone: "+91 9876543210",
    },
    {
      name: "Mother",
      phone: "+91 9876501234",
    },
  ];

  return (
    <div className="bg-slate-900 rounded-3xl p-6 shadow-lg">

      <div className="flex items-center gap-3 mb-6">

        <FaUserShield className="text-blue-400 text-2xl" />

        <h2 className="text-2xl font-bold text-white">
          Emergency Contacts
        </h2>

      </div>

      <div className="space-y-4">

        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-slate-800 rounded-2xl p-4"
          >
            <div>
              <h3 className="text-white font-semibold">
                {contact.name}
              </h3>

              <p className="text-slate-400 text-sm">
                {contact.phone}
              </p>
            </div>

            <button className="bg-green-600 hover:bg-green-700 p-3 rounded-xl transition">
              <FaPhoneAlt className="text-white" />
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}

export default EmergencyContacts;
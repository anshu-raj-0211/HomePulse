import {
  FaBell,
  FaMoon,
  FaChevronRight,
} from "react-icons/fa";

function SettingsCard() {
  const settings = [
    {
      title: "Notifications",
      icon: <FaBell className="text-yellow-400" />,
    },
    {
      title: "Dark Mode",
      icon: <FaMoon className="text-blue-400" />,
    },
  ];

  return (
    <div className="bg-slate-900 rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-white mb-6">
        Settings
      </h2>

      <div className="space-y-4">

        {settings.map((item) => (
          <button
            key={item.title}
            className="w-full flex justify-between items-center bg-slate-800 rounded-2xl p-4 hover:bg-slate-700 transition"
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <span className="text-white font-medium">
                {item.title}
              </span>
            </div>

            <FaChevronRight className="text-slate-400" />
          </button>
        ))}

      </div>

    </div>
  );
}

export default SettingsCard;
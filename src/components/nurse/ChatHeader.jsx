import { FaRobot } from "react-icons/fa";

function ChatHeader() {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 rounded-3xl p-6 shadow-xl">

      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
          <FaRobot className="text-3xl text-blue-600" />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">
            AI Health Companion
          </h1>

          <p className="text-blue-100 mt-2">
            Your personal AI nurse is always ready to help.
          </p>
        </div>

      </div>

    </div>
  );
}

export default ChatHeader;
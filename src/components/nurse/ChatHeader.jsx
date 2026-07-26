import { FaUserNurse } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

function ChatHeader() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 px-6 py-4">

      <div className="max-w-5xl mx-auto flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">

            <FaUserNurse
              className="text-white text-2xl"
            />

          </div>

          <div>

            <h1 className="text-white text-2xl font-bold">
              AI Nurse
            </h1>

            <div className="flex items-center gap-2 mt-1">

              <FaCircle
                className="text-green-400 text-[10px]"
              />

              <span className="text-slate-400 text-sm">
                Online • Powered by Gemini
              </span>

            </div>

          </div>

        </div>

        <div className="hidden md:block">

          <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">

            HomePulse Assistant

          </span>

        </div>

      </div>

    </header>
  );
}

export default ChatHeader;
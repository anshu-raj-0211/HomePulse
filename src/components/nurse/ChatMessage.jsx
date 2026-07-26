import { FaUser } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa6";

function ChatMessage({ message }) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex items-end gap-3 max-w-[85%] ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}

        <div
          className={`h-11 w-11 rounded-full flex items-center justify-center shrink-0 ${
            isUser
              ? "bg-blue-600"
              : "bg-gradient-to-br from-cyan-500 to-blue-600"
          }`}
        >
          {isUser ? (
            <FaUser className="text-white text-sm" />
          ) : (
            <FaUserNurse className="text-white text-lg" />
          )}
        </div>

        {/* Message Bubble */}

        <div
          className={`rounded-3xl px-5 py-4 shadow-lg whitespace-pre-wrap break-words ${
            isUser
              ? "bg-blue-600 text-white rounded-br-md"
              : "bg-slate-800 text-slate-100 rounded-bl-md border border-slate-700"
          }`}
        >
          {message.text}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function ChatInput({
  onSend,
  disabled,
}) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-slate-900 border-t border-slate-800 p-4">

      <div className="max-w-5xl mx-auto flex gap-3">

        <textarea
          rows={1}
          value={message}
          disabled={disabled}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask your AI Nurse anything..."
          className="flex-1 bg-slate-800 text-white rounded-2xl px-5 py-4 resize-none outline-none border border-slate-700 focus:border-blue-500"
        />

        <button
          onClick={handleSend}
          disabled={disabled}
          className="h-14 w-14 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center transition"
        >
          <FaPaperPlane className="text-white" />
        </button>

      </div>

    </div>
  );
}

export default ChatInput;
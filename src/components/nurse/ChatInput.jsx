import { FaPaperPlane } from "react-icons/fa";

function ChatInput({ value, onChange, onSend }) {
  return (
    <div className="flex gap-3 mt-6">

      <input
        type="text"
        placeholder="Ask your AI Nurse..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500"
      />

      <button
        onClick={onSend}
        className="bg-blue-600 hover:bg-blue-700 px-6 rounded-2xl transition"
      >
        <FaPaperPlane className="text-white" />
      </button>

    </div>
  );
}

export default ChatInput;
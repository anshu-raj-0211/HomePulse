function SuggestionCard({ text, onClick }) {
  return (
    <button
      onClick={() => onClick(text)}
      className="w-full text-left bg-slate-900 border border-slate-800 hover:border-blue-500 rounded-2xl p-4 transition-all duration-300"
    >
      <p className="text-white font-medium">
        {text}
      </p>
    </button>
  );
}

export default SuggestionCard;
function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300"
    >
      {text}
    </button>
  );
}

export default Button;
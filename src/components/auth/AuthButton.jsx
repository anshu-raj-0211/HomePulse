function AuthButton({
  text,
  onClick,
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        bg-blue-600
        hover:bg-blue-700
        disabled:bg-slate-700
        disabled:cursor-not-allowed
        text-white
        font-semibold
        py-4
        rounded-2xl
        transition-all
        duration-300
      "
    >
      {text}
    </button>
  );
}

export default AuthButton;
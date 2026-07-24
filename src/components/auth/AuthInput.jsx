function AuthInput({
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        bg-slate-800
        border
        border-slate-700
        rounded-2xl
        px-4
        py-4
        text-white
        placeholder:text-slate-400
        outline-none
        focus:border-blue-500
        transition
      "
    />
  );
}

export default AuthInput;
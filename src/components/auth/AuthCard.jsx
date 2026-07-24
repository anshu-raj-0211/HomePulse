function AuthCard({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-slate-900 rounded-3xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-white text-center">
          {title}
        </h1>

        <p className="text-slate-400 text-center mt-2 mb-8">
          {subtitle}
        </p>

        <div className="space-y-5">
          {children}
        </div>

      </div>

    </div>
  );
}

export default AuthCard;
import { Link } from "react-router-dom";



function Welcome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">

        {/* Logo */}
        <div className="w-28 h-28 mx-auto rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shadow-2xl">
          <span className="text-5xl">❤️</span>
        </div>

        {/* App Name */}
        <h1 className="mt-8 text-5xl font-bold text-white">
          HomePulse
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-xl text-slate-300">
          Your Personal Nurse
        </p>

        <p className="mt-2 text-slate-400 leading-7">
          Helping you and your family stay healthy with smart reminders,
          daily care and emergency support.
        </p>

        {/* Button */}
        <Link to="/dashboard">
  <button className="mt-10 w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold text-lg">
    Get Started
  </button>
</Link>

      </div>
    </main>
  );
}

export default Welcome;
function ProgressOverview({ taken, total }) {
  const progress = total === 0 ? 0 : (taken / total) * 100;

  return (
    <div className="bg-slate-900 rounded-3xl p-6 shadow-lg">

      <h2 className="text-xl font-bold text-white">
        Today's Progress
      </h2>

      <div className="w-full h-3 bg-slate-700 rounded-full mt-5 overflow-hidden">

        <div
          className="h-full bg-green-500 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />

      </div>

      <div className="flex justify-between mt-4 text-slate-300">

        <span>{taken} of {total} Medicines</span>

        <span>{Math.round(progress)}%</span>

      </div>

    </div>
  );
}

export default ProgressOverview;
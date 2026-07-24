function ProgressCard({ taken, total }) {
  const progress = total === 0 ? 0 : (taken / total) * 100;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-6 text-white shadow-xl">

      <h2 className="text-2xl font-bold">
        Today's Progress
      </h2>

      <p className="mt-2 text-blue-100">
        Keep taking your medicines on time 💙
      </p>

      <div className="w-full h-4 bg-white/20 rounded-full mt-6 overflow-hidden">

        <div
          className="h-full bg-white rounded-full transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        ></div>

      </div>

      <div className="flex justify-between items-center mt-4">

        <span className="font-medium">
          {taken} of {total} Taken
        </span>

        <span className="font-bold text-xl">
          {Math.round(progress)}%
        </span>

      </div>

    </div>
  );
}

export default ProgressCard;
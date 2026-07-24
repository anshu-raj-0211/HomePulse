function FilterTabs({ filter, setFilter }) {
  const tabs = ["All", "Upcoming", "Taken", "Missed"];

  return (
    <div className="flex gap-3 mt-6 flex-wrap">

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`px-5 py-2 rounded-full transition font-medium ${
            filter === tab
              ? "bg-blue-600 text-white"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          {tab}
        </button>
      ))}

    </div>
  );
}

export default FilterTabs;
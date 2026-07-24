function WelcomeCard() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 p-6 shadow-xl">

      <p className="text-sm text-blue-100">
        Welcome Back 👋
      </p>

      <h1 className="text-3xl font-bold text-white mt-2">
        {greeting}
      </h1>

      <p className="text-blue-100 mt-3">
        Stay healthy. Every medicine you take on time is a step toward a healthier life.
      </p>

    </div>
  );
}

export default WelcomeCard;
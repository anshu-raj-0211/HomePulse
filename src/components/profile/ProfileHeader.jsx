import { FaUserCircle } from "react-icons/fa";

function ProfileHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-3xl p-6 shadow-xl">

      <div className="flex items-center gap-5">

        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">

          <FaUserCircle className="text-5xl text-blue-600" />

        </div>

        <div>

          <h1 className="text-3xl font-bold text-white">
            Anshu Raj
          </h1>

          <p className="text-blue-100 mt-2">
            AI & Healthcare Enthusiast
          </p>

        </div>

      </div>

    </div>
  );
}

export default ProfileHeader;
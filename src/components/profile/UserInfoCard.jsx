import { FaEnvelope, FaPhone } from "react-icons/fa";

function UserInfoCard() {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-white mb-6">
        Personal Information
      </h2>

      <div className="space-y-5">

        <div className="flex items-center gap-4">

          <FaEnvelope className="text-blue-400" />

          <div>

            <p className="text-slate-400 text-sm">
              Email
            </p>

            <p className="text-white">
              anshuraj@example.com
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <FaPhone className="text-green-400" />

          <div>

            <p className="text-slate-400 text-sm">
              Phone
            </p>

            <p className="text-white">
              +91 9876543210
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UserInfoCard;
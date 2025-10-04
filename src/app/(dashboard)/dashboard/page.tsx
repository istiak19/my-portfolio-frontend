import { getServerSession } from "next-auth/next";
import { authOptions } from "@/src/helpers/authOptions";
import { meUser } from "@/src/services/userService";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (!session)
    return (
      <div className="flex items-center justify-center h-screen text-red-500 font-semibold text-xl">
        Unauthorized – Please login first
      </div>
    );

  const token = session.user.accessToken as string;
  const userResponse = await meUser(token);

  if (!userResponse?.success)
    return (
      <div className="flex items-center justify-center h-screen text-red-500 font-semibold text-xl">
        Failed to load user data
      </div>
    );

  const user = userResponse.data;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text drop-shadow-md">
            Welcome, {user?.email}
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            Here is your personalized dashboard.
          </p>
        </div>

        {/* User Info Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">User ID</h2>
            <p className="text-lg font-mono">{user?.id}</p>
          </div>

          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-lg font-mono">{user?.email}</p>
          </div>

          {/* Add more cards here */}
          <div className="bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-xl p-6 shadow-lg col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Additional Info</h2>
            <p className="text-lg">
              You can add more details here, like role, last login, or any
              custom data from your backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
import { cookies } from "next/headers";
import { meUser } from "@/src/services/userService";
import { User } from "@/src/type";

export const metadata = {
    title: "Dashboard – Istiak Ahamed",
    description:
        "Portfolio of Istiak Ahamed, a passionate full-stack web developer specializing in building modern, responsive web applications using Next.js, React, and MongoDB.",
};

const Dashboard = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
        return <div className="p-6 text-red-500">Unauthorized! Please login.</div>;
    }

    const data = await meUser(token);

    if (!data.success || !data.data) {
        return <div className="p-6 text-red-500">{data.message || "Unauthorized!"}</div>;
    }

    const user: User = data.data;

    return (
        <div className="bg-gray-50 dark:bg-black p-6 md:p-12">
            <div className="container mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Welcome, {user.name || "User"}!
                </h1>
                <p className="text-gray-700 dark:text-gray-300 mb-6">Email: {user.email}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="font-semibold text-lg">Profile</h2>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">Manage your profile information.</p>
                    </div>

                    <div className="bg-green-100 dark:bg-green-900 p-4 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="font-semibold text-lg">Settings</h2>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">Update account settings securely.</p>
                    </div>

                    <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="font-semibold text-lg">Analytics</h2>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">View usage statistics and metrics.</p>
                    </div>

                    <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="font-semibold text-lg">Support</h2>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">Contact support for help.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
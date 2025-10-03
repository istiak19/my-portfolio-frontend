// import { meUser } from "@/src/services/userService";

export const metadata = {
    title: "Dashboard – Istiak Ahamed",
    description:
        "Portfolio of Istiak Ahamed, a passionate full-stack web developer specializing in building modern, responsive web applications using Next.js, React, and MongoDB.",
};

const Home = async () => {
    // const user = await meUser();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-12">
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow rounded-xl p-6 flex items-center gap-6">
                <div>
                    Ami
                    {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {user.name || "User"}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">{user.email}</p> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
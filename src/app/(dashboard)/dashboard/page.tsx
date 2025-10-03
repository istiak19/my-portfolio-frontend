// // import { meUser } from "@/src/services/userService";

// export const metadata = {
//     title: "Dashboard – Istiak Ahamed",
//     description:
//         "Portfolio of Istiak Ahamed, a passionate full-stack web developer specializing in building modern, responsive web applications using Next.js, React, and MongoDB.",
// };

// const Home = async () => {
//     // const user = await meUser();

//     return (
//         <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-12">
//             <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow rounded-xl p-6 flex items-center gap-6">
//                 <div>
//                     Ami
//                     {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
//                         {user.name || "User"}
//                     </h1>
//                     <p className="text-gray-600 dark:text-gray-300">{user.email}</p> */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

import { cookies } from "next/headers";

const Dashboard = async () => {
    // cookies() async নয়, সরাসরি call করতে হবে
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me/1`, {
        headers: {
            Cookie: `accessToken=${token}`, // ✅ backend এ cookie forward করলাম
        },
        cache: "no-store", // cache এ না রাখার জন্য
    });

    const data = await res.json();

    if (!data.success) {
        return <div className="p-6 text-red-500">Unauthorized!</div>;
    }

    // console.log(data)

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
            <p className="mt-2 text-gray-600">Logged in as: {data.data.email}</p>
        </div>
    );
};

export default Dashboard;
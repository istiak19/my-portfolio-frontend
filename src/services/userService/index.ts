import { ApiResponse, User } from "@/src/type";

export const meUser = async (token: string): Promise<ApiResponse<User>> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me/1`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Failed to fetch user:", err);
        return { success: false, message: "Failed to fetch user" };
    }
};
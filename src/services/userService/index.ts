export const meUser = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
            method: "GET",
            credentials: "include",
        });

        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data?.data || null;

    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
};
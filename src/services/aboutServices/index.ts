import { AboutResponse } from "@/src/type";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAboutData = async (): Promise<AboutResponse | null> => {
    if (!API_URL) {
        console.warn("NEXT_PUBLIC_API_URL is missing");
        return null;
    }

    try {
        const res = await fetch(`${API_URL}/info`, { cache: "force-cache" });
        if (!res.ok) throw new Error("Failed to fetch about data");
        return await res.json();
    } catch (error) {
        console.error("Error in getAboutData:", error);
        return null;
    }
};
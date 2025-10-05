const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getBlogs = async () => {
    if (!API_URL) {
        console.warn("NEXT_PUBLIC_API_URL is missing");
        return null;
    }

    try {
        const res = await fetch(`${API_URL}/blog`, {
            method: "GET",
            credentials: "include",
            next: { revalidate: 60, tags: ["BLOGS"] },
        });

        if (!res.ok) return null;
        const data = await res.json();
        return data?.data || null;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return null;
    }
};

export const getBlogById = async (id: number) => {
    if (!API_URL) {
        console.warn("NEXT_PUBLIC_API_URL is missing");
        return null;
    }
    if (!id) return null;

    try {
        const res = await fetch(`${API_URL}/blog/${id}`, {
            method: "GET",
            next: { revalidate: 60 },
        });

        if (!res.ok) return null;
        const data = await res.json();
        return data?.data || null;
    } catch (error) {
        console.error(`Error fetching blog ID ${id}:`, error);
        return null;
    }
};
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProjects = async () => {
    if (!API_URL) {
        console.warn("NEXT_PUBLIC_API_URL is not defined");
        return null;
    }

    try {
        const res = await fetch(`${API_URL}/project`, {
            method: "GET",
            credentials: "include",
            next: { revalidate: 60 },
        });

        if (!res.ok) return null;

        const data = await res.json();
        return data?.data || null;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return null;
    }
};

export const getProjectById = async (id: number) => {
    if (!API_URL) {
        console.warn("NEXT_PUBLIC_API_URL is not defined");
        return null;
    }
    if (!id) return null;

    try {
        const res = await fetch(`${API_URL}/project/${id}`, {
            method: "GET",
            next: { revalidate: 60 },
        });

        if (!res.ok) return null;

        const data = await res.json();
        return data?.data || null;
    } catch (error) {
        console.error(`Error fetching project by ID ${id}:`, error);
        return null;
    }
};
export type Skills = {
    frontend: string[];
    backend: string[];
    database: string[];
    toolsAndPlatforms: string[];
    softSkills: string[];
};

export type Hobby = {
    title: string;
    description: string;
};

export type AboutData = {
    location: string;
    introduction: string;
    skills: Skills;
    journey: string;
    hobbies: Hobby[];
};

export type AboutResponse = {
    data: AboutData;
};

export const getAboutData = async (): Promise<AboutResponse | null> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/info`, {
            cache: "force-cache",
        });
        if (!res.ok) throw new Error("Failed to fetch about data");
        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};
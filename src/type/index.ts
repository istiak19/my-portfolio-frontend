export type IProject = {
    id: number;
    title: string;
    description: string;
    challenges?: string;
    improvements?: string;
    technologies: string;
    serverLink?: string;
    clientLink?: string;
    liveLink?: string;
    features: string[];
    image: string;
    createdAt: string;
    updatedAt: string;
};

export type ProjectsProps = {
    projects: IProject[];
};

export interface ProjectCardProps {
    project: IProject;
};

export type Blog = {
    id: number;
    title: string;
    slug: string;
    content: string;
    published: boolean;
    image: string;
};
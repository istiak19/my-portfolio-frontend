export interface NavLink {
    name: string;
    path: string;
};

export interface IProject {
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

export interface ProjectsProps {
    projects: IProject[];
};

export interface ProjectCardProps {
    project: IProject;
};

export interface IBlog {
    id: number;
    title: string;
    slug: string;
    content: string;
    published: boolean;
    image: string;
    createdAt?: string;
    updatedAt?: string;
};

export interface BlogProps {
    blogs: IBlog[];
}

export interface BlogCardProps {
    blog: IBlog;
};

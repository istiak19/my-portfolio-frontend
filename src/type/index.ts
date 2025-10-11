export interface NavLink {
    name: string;
    path: string;
};

export interface NavbarProps {
    isLoggedIn?: boolean;
};

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

export interface UpdateBlogProps {
    blog: IBlog;
    decoded: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
};

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
};

export interface Skill {
    icon: React.ReactElement;
    label: string;
    color: string;
};
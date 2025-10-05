"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/src/services/projectServices";
import ProjectGrid from "./ProjectGrid";
import { IProject } from "@/src/type";

const ProjectSection = () => {
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        getProjects().then((data) => {
            const project = data.slice(0, 3);
            setProjects(project);
        });
    }, []);

    return (
        <div>
            <ProjectGrid projects={projects} />
        </div>
    );
};

export default ProjectSection;
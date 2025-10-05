import Project from '@/src/components/CreateProject/Project';

export const metadata = {
  title: "Create Project – Istiak Ahamed",
  description:
    "Portfolio of Istiak Ahamed, a passionate full-stack web developer specializing in building modern, responsive web applications using Next.js, React, and MongoDB.",
};

const page = () => {
  return (
    <div>
      <Project />
    </div>
  );
};

export default page;
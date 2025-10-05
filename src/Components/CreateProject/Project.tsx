"use client";

import { useSession } from "next-auth/react";
import CreateProject from "@/src/components/CreateProject/CreateProject";

const Project = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session?.user?.accessToken) return <p>Please log in first.</p>;

  return (
    <div>
      <CreateProject decoded={session.user.accessToken} />
    </div>
  );
};

export default Project;
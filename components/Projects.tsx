"use client";

import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/projects";

const Projects = () => {
  const router = useRouter();

  return (
    <section className="mt-10 sm:mt-[200px] relative flex justify-center items-center flex-col px-3 lg:px-50">
      <div className="w-full max-w-4xl">

      <h1 className="text-3xl sm:text-5xl font-heading ml-1 text-center">My Projects</h1>
      <h1 className="text-gray-700 dark:text-white/80 text-[1.1rem] sm:text-[1.2rem] ml-1 mt-2 text-center">
        A showcase of my work and side projects
      </h1>

      <div className="grid justify-center gap-3 sm:gap-5 sm:grid-cols-2 mt-4 sm:mt-8">
        {projects.map((project: any) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            image={project.image}
            title={project.title}
            subtitle={project.subtitle}
            links={project.links}
          />
        ))}
      </div>

        {/* <div className="flex justify-end mt-8 mr-3">
          <Button
            onClick={() => router.push(`/projects`)}
            className="text-white bg-gray-400 dark:bg-gray-800 rounded-xl hover:cursor-pointer hover:scale-x-105 transition-all duration-300 origin-right"
          >
            View all
            <ChevronRight className="size-4" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;

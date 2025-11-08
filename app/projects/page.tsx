import { Project } from "@/types";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

const page = () => {

  return (
    <section className="mt-22 relative flex justify-center flex-col px-3 lg:px-50">
      <h1 className="text-3xl sm:text-5xl font-heading ml-1">My Projects</h1>
      <h1 className="text-gray-700 dark:text-white/80 text-[1.1rem] sm:text-[1.2rem] ml-1 mt-2">
        Here are some stuff i've made over the years
      </h1>

      <div className="grid justify-center gap-3 sm:gap-5 sm:grid-cols-2 mt-4 sm:mt-5">
        {projects.map((project: Project) => (
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

      <div className="flex justify-end mt-8 mr-3">
        
      </div>
    </section>
  );
};

export default page;

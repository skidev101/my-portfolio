import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section
    id="work"
    className="mx-auto max-w-[680px] px-6 py-16 sm:px-8 sm:py-24"
  >
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
        Selected work
      </h2>
      <a
        href="https://github.com/skidev101"
        target="_blank"
        rel="noreferrer"
        className="text-sm text-copy transition-colors duration-150 ease-out hover:text-ink"
      >
        More on GitHub
      </a>
    </div>

    <div className="mt-10 grid gap-12 sm:mt-12 sm:gap-16">
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;

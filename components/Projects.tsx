import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

const Projects = () => (
  <section id="work" className="mx-auto w-[calc(100%_-_32px)] max-w-[960px] py-20 sm:w-[calc(100%_-_48px)] sm:py-32">
    <div className="flex items-baseline gap-3 sm:gap-[18px]"><span className="technical-label text-signal">04</span><h2 className="font-display text-[1.8rem] font-normal tracking-[-0.03em] sm:text-[2.2rem]">Selected work</h2><span className="technical-label ml-auto text-copy">{String(projects.length).padStart(2, "0")} projects</span></div>
    <div className="flex flex-col justify-between gap-5 py-7 sm:flex-row sm:items-end"><p className="m-0 max-w-[380px] text-copy leading-6">Products I designed, built, and shipped across interfaces, infrastructure, and real-world workflows.</p><a className="font-mono text-[0.72rem] uppercase transition-colors hover:text-signal" href="https://github.com/skidev101" target="_blank" rel="noreferrer">View GitHub <span className="text-signal">↗</span></a></div>
    <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.slug} {...project} index={index} />)}</div>
  </section>
);

export default Projects;

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen w-[calc(100%_-_32px)] max-w-[960px] pt-32 pb-20 sm:w-[calc(100%_-_48px)] sm:pt-44">
      <div className="flex items-baseline gap-3"><span className="technical-label text-signal">Index</span><h1 className="font-display text-4xl tracking-[-0.03em] sm:text-6xl">Project archive</h1></div>
      <p className="max-w-lg py-8 text-copy">Designed, engineered, and shipped by Monaski across product interfaces and full-stack systems.</p>
      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.slug} {...project} index={index} />)}</div>
    </main>
  );
}

import { getProjectBySlug, projects } from "@/lib/projects";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProjectBySlug((await params).slug);
  if (!project) notFound();

  return (
    <main className="mx-auto min-h-screen w-[calc(100%_-_32px)] max-w-[960px] pt-28 pb-20 sm:w-[calc(100%_-_48px)] sm:pt-40">
      <Link href="/#work" className="technical-label inline-flex items-center gap-2 text-copy transition-colors hover:text-signal"><ArrowLeft size={14} /> Back to work</Link>
      <div className="mt-8 grid gap-8 py-8 md:grid-cols-[1fr_300px] md:items-end"><div><span className="technical-label text-signal">Case file / {project.slug}</span><h1 className="mt-4 font-display text-5xl tracking-[-0.04em] sm:text-7xl">{project.title}</h1><p className="mt-3 max-w-xl text-lg text-copy">{project.subtitle}</p></div><div className="flex gap-2 md:justify-end"><a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 bg-ink px-4 font-mono text-[0.68rem] uppercase text-canvas transition-colors hover:bg-signal">Live project <ArrowUpRight size={15} /></a><a href={project.links.github} target="_blank" rel="noreferrer" aria-label="View source code" className="flex size-11 items-center justify-center bg-zinc-900 transition-colors hover:bg-signal"><Github size={16} /></a></div></div>
      <div className="grid gap-10 py-12 md:grid-cols-[1fr_1.5fr] md:gap-[12%]"><div><p className="technical-label text-copy">Overview</p><p className="mt-5 max-w-[180px] font-mono text-xs uppercase text-signal">{project.outcome}</p></div><p className="text-lg leading-8 text-copy">{project.description}</p></div>
      <div className="grid gap-4 py-8 sm:grid-cols-3">{[["Role", project.role], ["Category", project.category], ["Year", project.year]].map(([label, value]) => <div key={label} className="bg-zinc-900 p-4"><p className="technical-label text-copy">{label}</p><p className="mt-3 text-sm text-ink">{value}</p></div>)}</div>
      <div className="py-8"><p className="technical-label text-copy">What I built</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{project.highlights.map((highlight, index) => <div key={highlight} className="flex gap-3 text-sm leading-6 text-copy"><span className="technical-label text-signal">0{index + 1}</span><span>{highlight}</span></div>)}</div></div>
      <div className="py-6"><span className="technical-label text-copy">Built with</span><div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">{project.stack.map((tech) => <span key={tech} className="technical-label text-ink">{tech}</span>)}</div></div>
      <div className="grid gap-4 py-12 md:grid-cols-2">{project.images.map((image, index) => <div key={`${image}-${index}`} className="relative aspect-[1.4] overflow-hidden bg-zinc-900"><Image src={image} alt={`${project.title} interface view ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>)}</div>
    </main>
  );
}

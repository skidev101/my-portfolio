import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  if (!project) return {};

  const path = `/projects/${project.slug}`;
  return {
    title: project.title,
    description: project.subtitle,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: `${project.title} — ${project.category}`,
      description: project.subtitle,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProjectBySlug((await params).slug);
  if (!project) notFound();

  const details = [
    ["Role", project.role],
    ["Category", project.category],
    ["Year", project.year],
  ];

  return (
    <main
      id="main"
      tabIndex={-1}
      className="mx-auto max-w-[1100px] px-6 pt-28 pb-20 sm:px-8 sm:pt-32"
    >
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-sm text-copy transition-colors duration-150 ease-out hover:text-ink"
      >
        <ArrowLeft size={14} aria-hidden="true" />
        All work
      </Link>

      <header className="mt-10">
        <h1 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-[42rem] text-lg leading-8 text-copy">
          {project.subtitle}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-ink px-4 text-sm font-medium text-canvas transition-[background-color,transform] duration-150 ease-out hover:bg-copy active:scale-[0.98]"
          >
            Live site
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line-strong px-4 text-sm font-medium text-ink transition-[background-color,border-color,transform] duration-150 ease-out hover:border-quiet hover:bg-surface active:scale-[0.98]"
          >
            Source
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </header>

      {/* Hairlines come from the grid gap showing the container's own colour */}
      <dl className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
        {details.map(([label, value]) => (
          <div key={label} className="bg-canvas px-5 py-6">
            <dt className="text-xs text-quiet">{label}</dt>
            <dd className="mt-2 text-sm text-ink">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-14 grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">
        <h2 className="text-sm font-medium text-ink">Overview</h2>
        <div className="max-w-[42rem]">
          <p className="text-lg leading-8 text-ink">{project.outcome}</p>
          <p className="mt-5 text-base leading-7 text-copy">
            {project.description}
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">
        <h2 className="text-sm font-medium text-ink">What I built</h2>
        <ul className="max-w-[42rem] divide-y divide-line">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="py-3.5 text-[0.9375rem] leading-6 text-copy first:pt-0 last:pb-0"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">
        <h2 className="text-sm font-medium text-ink">Built with</h2>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <li
              key={technology}
              className="rounded-md border border-line px-2.5 py-1.5 font-mono text-xs text-copy"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        {project.images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface"
          >
            <Image
              src={image}
              alt={`${project.title} interface, view ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 520px"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors duration-150 ease-out hover:text-signal"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to all work
        </Link>
      </div>
    </main>
  );
}

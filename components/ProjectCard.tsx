import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

const ProjectCard = ({ slug, image, title, subtitle, links, stack, index, category, year, role }: Project & { index?: number }) => (
  <article>
    <Link href={`/projects/${slug}`} className="group relative block aspect-[1.35] overflow-hidden bg-zinc-900">
      <Image src={image} alt={`${title} project preview`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover saturate-[.65] transition duration-500 group-hover:scale-[1.035] group-hover:saturate-100" />
      <span className="technical-label absolute top-3.5 left-3.5 z-10 flex items-center gap-2 text-white"><i className="size-2 rotate-45 bg-signal" />{String((index ?? 0) + 1).padStart(2, "0")}</span><span className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1 font-mono text-[0.68rem] uppercase text-white opacity-0 transition-opacity group-hover:opacity-100">Inspect <ArrowUpRight size={15} /></span>
    </Link>
    <div className="grid gap-3 pt-4 sm:grid-cols-[1.3fr_1fr]"><div><h3 className="font-display text-[1.55rem] font-normal">{title}</h3><p className="mt-1 text-sm text-copy">{subtitle}</p></div><div className="technical-label flex flex-wrap content-start gap-x-2 gap-y-1 text-copy">{stack.slice(0, 3).map((tech) => <span key={tech}>{tech}{tech !== stack.slice(0, 3).at(-1) && <b className="ml-2 font-normal text-signal">/</b>}</span>)}</div><div className="technical-label col-span-full flex flex-wrap items-center gap-x-4 gap-y-2 pt-2.5"><span className="text-signal">{category}</span><span>{year}</span><span>{role}</span><Link className="ml-auto transition-colors hover:text-signal" href={`/projects/${slug}`}>Case file <span className="text-signal">↗</span></Link>{links.live && <a className="transition-colors hover:text-signal" href={links.live} target="_blank" rel="noreferrer">Live <span className="text-signal">↗</span></a>}</div></div>
  </article>
);

export default ProjectCard;

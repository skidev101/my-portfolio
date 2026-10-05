import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

const ProjectCard = ({
  slug,
  image,
  title,
  subtitle,
  links,
  index,
}: Project & { index?: number }) => (
  <article className="group/article">
    <Link
      href={`/projects/${slug}`}
      className="group relative block aspect-[1.35] overflow-hidden bg-zinc-900 ring-1 ring-white/[0.08] transition-all duration-300 group-hover/article:ring-signal/40 group-hover/article:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
    >
      <Image
        src={image}
        alt={`${title} project preview`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover saturate-[.7] transition-all duration-500 group-hover/article:scale-[1.03] group-hover/article:saturate-100"
      />
      <span className="technical-label absolute top-4 left-4 z-10 flex items-center gap-2 text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10">
        <i className="size-1.5 rotate-45 bg-signal" />
        {String((index ?? 0) + 1).padStart(2, "0")}
      </span>
    </Link>
    <div className="pt-5">
      <h3 className="font-display text-[1.65rem] font-normal tracking-[-0.02em] transition-colors group-hover/article:text-signal">
        {title}
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-copy">{subtitle}</p>
      <div className="technical-label mt-5 flex items-center gap-5">
        <Link
          className="group/link inline-flex items-center gap-1.5 transition-colors hover:text-signal"
          href={`/projects/${slug}`}
        >
          Case file{" "}
          <ArrowUpRight
            size={13}
            className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </Link>
        <a
          className="group/link inline-flex items-center gap-1.5 text-copy transition-colors hover:text-signal"
          href={links.live}
          target="_blank"
          rel="noreferrer"
        >
          Live{" "}
          <ArrowUpRight
            size={13}
            className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  </article>
);

export default ProjectCard;

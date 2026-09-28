import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

const actionClass =
  "inline-flex items-center gap-1 rounded-md border border-line-strong px-2.5 py-1.5 text-xs font-medium text-copy transition-[color,border-color,background-color] duration-150 ease-out hover:border-quiet hover:bg-surface hover:text-ink";

/* Full-width cards. Three projects shown at scale beat six shown as
   thumbnails, and a single column avoids the orphan a two-up grid leaves. */
const ProjectCard = ({
  slug,
  image,
  title,
  subtitle,
  links,
  stack,
}: Project) => (
  <article className="group">
    <Link
      href={`/projects/${slug}`}
      aria-label={`${title} — read the case study`}
      className="block overflow-hidden rounded-lg border border-line bg-surface"
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={image}
          alt={`${title} interface`}
          fill
          sizes="(max-width: 1100px) 100vw, 1036px"
          className="object-cover object-top transition-transform duration-300 ease-out fine-pointer:group-hover:scale-[1.02]"
        />
      </div>
    </Link>

    <div className="mt-5 flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
      <div className="max-w-[36rem]">
        <h3 className="text-xl font-semibold tracking-[-0.01em]">
          <Link
            href={`/projects/${slug}`}
            className="transition-colors duration-150 ease-out hover:text-signal"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-1.5 text-[0.9375rem] leading-6 text-copy">
          {subtitle}
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href={links.live}
          target="_blank"
          rel="noreferrer"
          className={actionClass}
        >
          Live
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className={actionClass}
        >
          Code
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </div>

    <ul className="mt-4 flex flex-wrap gap-1.5">
      {stack.map((technology) => (
        <li
          key={technology}
          className="rounded border border-line px-2 py-1 font-mono text-xs text-quiet"
        >
          {technology}
        </li>
      ))}
    </ul>
  </article>
);

export default ProjectCard;

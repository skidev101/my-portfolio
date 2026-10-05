import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

const actionClass =
  "group/btn inline-flex items-center gap-1.5 rounded-md border border-line-strong px-2.5 py-1.5 text-xs font-medium text-copy transition-[color,border-color,background-color] duration-150 ease-out hover:border-quiet hover:bg-surface hover:text-ink";

const actionArrowClass =
  "transition-transform duration-150 fine-pointer:group-hover/btn:translate-x-0.5 fine-pointer:group-hover/btn:-translate-y-0.5";

const readCaseStudyClass =
  "group/read inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-150 ease-out hover:text-signal";

/* Full-width cards. Three projects shown at scale beat six shown as
   thumbnails, and a single column avoids the orphan a two-up grid leaves.
   The card carries the outcome and the first two decisions so the reasoning
   reads before the click; the full write-up stays the reward. */
const ProjectCard = ({
  slug,
  image,
  title,
  subtitle,
  role,
  year,
  outcome,
  highlights,
  links,
  stack,
}: Project) => {
  const href = `/projects/${slug}`;

  return (
    <article className="group">
      <Link
        href={href}
        aria-label={`${title} — read the case study`}
        className="block overflow-hidden rounded-lg border border-line bg-surface transition-all duration-300 fine-pointer:group-hover:border-line-strong fine-pointer:group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={image}
            alt={`${title} interface`}
            fill
            sizes="(max-width: 1100px) 100vw, 1036px"
            className="object-cover object-top transition-transform duration-500 ease-out fine-pointer:group-hover:scale-[1.02]"
          />
        </div>
      </Link>

      <div className="mt-5 flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
        <div className="max-w-[36rem]">
          <h3 className="text-xl font-semibold tracking-[-0.01em]">
            <Link
              href={href}
              className="transition-colors duration-150 ease-out hover:text-signal"
            >
              {title}
            </Link>
          </h3>
          <p className="mt-1.5 text-[0.9375rem] leading-6 text-copy">
            {subtitle}
          </p>
          <p className="mt-2 text-sm text-quiet">
            {role} · <span className="font-mono">{year}</span>
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
            <ArrowUpRight
              size={13}
              aria-hidden="true"
              className={actionArrowClass}
            />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className={actionClass}
          >
            Code
            <ArrowUpRight
              size={13}
              aria-hidden="true"
              className={actionArrowClass}
            />
          </a>
        </div>
      </div>

      <p className="mt-5 max-w-[36rem] text-lg leading-8 text-ink">{outcome}</p>

      <ul className="mt-4 max-w-[36rem] divide-y divide-line">
        {highlights.slice(0, 2).map((highlight) => (
          <li
            key={highlight}
            className="py-3.5 text-[0.9375rem] leading-6 text-copy first:pt-0 last:pb-0"
          >
            {highlight}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {stack.map((technology) => (
          <li
            key={technology}
            className="rounded-sm border border-line bg-surface/60 px-2 py-0.5 font-mono text-[11px] text-quiet transition-colors duration-150 fine-pointer:hover:border-line-strong fine-pointer:hover:text-ink"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-line pt-4">
        <Link href={href} className={readCaseStudyClass}>
          Read case study
          <ArrowRight
            size={14}
            aria-hidden="true"
            className="transition-transform duration-150 fine-pointer:group-hover/read:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;

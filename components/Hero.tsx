import { ArrowDown } from "lucide-react";

const resumeHref = "/assets/resume/Ojomona_Inedu_Resume.pdf";

const primary =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-medium text-canvas transition-[background-color,transform] duration-150 ease-out hover:bg-copy active:scale-[0.98]";

const secondary =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line-strong px-4 text-sm font-medium text-ink transition-[background-color,border-color,transform] duration-150 ease-out hover:border-quiet hover:bg-surface active:scale-[0.98]";

const Hero = () => (
  <section className="mx-auto max-w-[1100px] px-6 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
    <div className="animate-rise max-w-[44rem]">
      <h1 className="text-display font-semibold">Monaski</h1>

      <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-copy">
        <span>Full-stack engineer</span>
        <span aria-hidden="true" className="text-line-strong">
          /
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
          Available for work
        </span>
        <span aria-hidden="true" className="text-line-strong">
          /
        </span>
        <span>Nigeria, remote</span>
      </p>

      <p className="mt-8 max-w-[38rem] text-lg leading-8 text-copy">
        I&apos;m Ojomona Ethan Inedu. I carry a product from the first useful
        interaction through to the systems that keep it{" "}
        <span className="font-serif italic text-ink/95">reliable</span> — product
        decisions and engineering decisions as{" "}
        <span className="font-serif italic text-ink/95">one decision</span>.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#work" className={primary}>
          View work
          <ArrowDown size={16} aria-hidden="true" />
        </a>
        <a href={resumeHref} download className={secondary}>
          Résumé
        </a>
      </div>
    </div>
  </section>
);

export default Hero;

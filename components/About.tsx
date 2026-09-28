import { ArrowUpRight } from "lucide-react";

const linkClass =
  "inline-flex items-center gap-1 text-sm text-ink underline-offset-4 transition-colors duration-150 ease-out hover:text-signal hover:underline";

const About = () => (
  <section
    id="about"
    className="mx-auto max-w-[1100px] px-6 py-16 sm:px-8 sm:py-24"
  >
    <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
      <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
        About
      </h2>

      <div className="max-w-[42rem]">
        <p className="text-base leading-7 text-copy">
          I&apos;m a full-stack engineer based in Nigeria, working remotely. I
          take a product across the whole path — the interface someone uses, the
          services behind it, and the deployment that keeps it up.
        </p>
        <p className="mt-5 text-base leading-7 text-copy">
          My default is clear interfaces and architecture another engineer can
          pick up later. Most of the work I&apos;m proud of is the part that is
          boring when it is right.
        </p>

        <div className="mt-7 flex flex-wrap gap-5">
          <a
            className={linkClass}
            href="https://github.com/skidev101"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a
            className={linkClass}
            href="https://linkedin.com/in/ojomonaethaninedu"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a className={linkClass} href="mailto:skidev101@gmail.com">
            Email
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;

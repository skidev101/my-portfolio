import { ArrowUpRight, FileText, Github, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

const CallToAction = () => (
  <section
    id="contact"
    className="mx-auto w-[calc(100%_-_32px)] max-w-[960px] py-20 sm:w-[calc(100%_-_48px)] sm:pt-32 sm:pb-24"
  >
    <div className="flex items-baseline gap-3 sm:gap-[18px]">
      <span className="technical-label text-signal">06</span>
      <h2 className="font-display text-[1.8rem] font-normal tracking-[-0.03em] sm:text-[2.2rem]">
        Work together
      </h2>
    </div>
    <div className="mt-10 bg-zinc-900 px-6 py-8 sm:px-10 sm:py-10">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-[12%]">
        <div>
          <p className="technical-label text-signal">Open channel / 001</p>
          <h3 className="mt-5 max-w-sm font-display text-3xl leading-[1.02] tracking-[-0.035em] sm:text-[2.6rem]">
            Let&apos;s build something worth keeping.
          </h3>
          <p className="mt-5 max-w-sm text-sm leading-6 text-copy">
            Available for product engineering, full-stack builds, and interfaces
            where the details matter.
          </p>
          <a
            href="mailto:skidev101@gmail.com"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase transition-colors hover:text-signal"
          >
            <Mail size={15} className="text-signal" /> skidev101@gmail.com{" "}
            <ArrowUpRight size={13} />
          </a>
          <div className="technical-label mt-7 flex flex-wrap gap-5 text-copy">
            <a
              className="inline-flex items-center gap-1.5 transition-colors hover:text-signal"
              href="https://github.com/skidev101"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={13} /> GitHub
            </a>
            <a
              className="inline-flex items-center gap-1.5 transition-colors hover:text-signal"
              href="/assets/resume/Ojomona_Inedu_Resume.pdf"
              download
            >
              <FileText size={13} /> Resume
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  </section>
);

export default CallToAction;

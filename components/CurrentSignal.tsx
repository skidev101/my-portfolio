import { ArrowUpRight, GitBranch, Radio } from "lucide-react";

const CurrentSignal = () => (
  <section className="mx-auto w-[calc(100%_-_32px)] max-w-[960px] py-20 sm:w-[calc(100%_-_48px)] sm:py-28">
    <div className="relative overflow-hidden bg-zinc-900 px-6 py-8 sm:px-10 sm:py-10">
      <div aria-hidden="true" className="absolute -right-10 -bottom-20 h-64 w-24 rotate-[22deg] bg-signal" />
      <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_240px] md:items-end">
        <div>
          <p className="technical-label flex items-center gap-2 text-signal"><Radio size={13} /> Current signal</p>
          <h2 className="mt-5 max-w-xl font-display text-3xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">Building Zury into a calmer academic operating system.</h2>
          <p className="mt-5 max-w-lg text-sm leading-6 text-copy">Exploring offline-aware planning, contextual AI, and low-bandwidth product architecture for university students.</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3 font-mono text-xs uppercase text-zinc-300"><GitBranch size={15} className="text-signal" /><span>37 public repositories</span></div>
          <a href="https://github.com/skidev101" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase transition-colors hover:text-signal">Follow the build log <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </div>
  </section>
);

export default CurrentSignal;

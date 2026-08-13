"use client";

import { ArrowUpRight, FileText, Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 sm:py-5">
      <div className="mx-auto flex max-w-[960px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-mono text-xs font-bold tracking-[0.05em] uppercase" onClick={() => setOpen(false)}>
          <span className="inline-block h-5 w-1.5 -skew-x-[22deg] bg-signal" />
          <span>monaski</span>
        </Link>

        <nav className="hidden items-center gap-7 font-mono text-[0.69rem] text-copy uppercase md:flex" aria-label="Primary navigation">
          <a className="transition-colors hover:text-signal" href="/#work">Work</a>
          <a className="transition-colors hover:text-signal" href="/#about">About</a>
          <a className="transition-colors hover:text-signal" href="/#experience">Experience</a>
          <a className="transition-colors hover:text-signal" href="/#contact">Contact</a>
          <a href="/assets/resume/Ojomona_Inedu_Resume.pdf" download className="flex items-center gap-1.5 border-b border-ink pb-1 text-ink transition-colors hover:text-signal">
            Resume <FileText size={14} />
          </a>
        </nav>

        <button type="button" className="flex size-10 items-center justify-center bg-zinc-900 text-ink md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="absolute top-[72px] right-4 left-4 flex flex-col border border-zinc-700 bg-ink px-5 pt-2 pb-5 font-mono text-xs text-canvas uppercase md:hidden" aria-label="Mobile navigation">
          <a className="border-b border-zinc-700 py-4 hover:text-signal" href="/#work" onClick={() => setOpen(false)}>01 / Work</a>
          <a className="border-b border-zinc-700 py-4 hover:text-signal" href="/#about" onClick={() => setOpen(false)}>02 / About</a>
          <a className="border-b border-zinc-700 py-4 hover:text-signal" href="/#experience" onClick={() => setOpen(false)}>03 / Experience</a>
          <a className="border-b border-zinc-700 py-4 hover:text-signal" href="/#contact" onClick={() => setOpen(false)}>04 / Contact</a>
          <a className="border-b border-zinc-700 py-4 hover:text-signal" href="/assets/resume/Ojomona_Inedu_Resume.pdf" download>05 / Resume</a>
          <div className="flex flex-wrap gap-4 pt-5 text-[0.64rem] text-zinc-400">
            <a className="flex items-center gap-1 hover:text-signal" href="https://github.com/skidev101" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            <a className="flex items-center gap-1 hover:text-signal" href="https://linkedin.com/in/ojomonaethaninedu" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a className="flex items-center gap-1 hover:text-signal" href="https://x.com/monaski_" target="_blank" rel="noreferrer"><ArrowUpRight size={16} /> X / Twitter</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

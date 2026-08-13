"use client";

import { ArrowUpRight, FileText, Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { number: "01", label: "Work", href: "/#work" },
  { number: "02", label: "About", href: "/#about" },
  { number: "03", label: "Experience", href: "/#experience" },
  { number: "04", label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="relative mx-auto max-w-[960px]">
        <div className="flex h-14 items-center justify-between border border-white/[0.06] bg-canvas/80 px-4 shadow-[0_12px_36px_rgba(0,0,0,0.22)] backdrop-blur-xl supports-[backdrop-filter]:bg-canvas/65 sm:px-5">
          <Link href="/" className="flex items-center gap-2.5 font-mono text-xs font-bold tracking-[0.05em] uppercase" onClick={() => setOpen(false)}>
            <span className="inline-block h-5 w-1.5 -skew-x-[22deg] bg-signal" />
            <span>monaski</span>
          </Link>

          <nav className="hidden items-center gap-6 font-mono text-[0.66rem] text-copy uppercase md:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} className="transition-colors hover:text-ink" href={item.href}>{item.label}</a>
            ))}
            <a href="/assets/resume/Ojomona_Inedu_Resume.pdf" download className="flex items-center gap-1.5 text-copy transition-colors hover:text-ink">
              Resume <FileText size={13} />
            </a>
          </nav>

          <button type="button" className="flex size-9 items-center justify-center bg-zinc-900 text-ink transition-colors hover:bg-zinc-800 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {open && (
          <nav id="mobile-navigation" className="absolute inset-x-0 top-[62px] border border-white/[0.07] bg-[#101010]/95 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:hidden" aria-label="Mobile navigation">
            <div className="px-2 pt-2 pb-4">
              <p className="technical-label text-zinc-600">Navigate / Monaski</p>
            </div>

            <div>
              {navigation.map((item) => (
                <a key={item.href} className="group flex items-center justify-between px-2 py-3.5 transition-colors hover:text-signal" href={item.href} onClick={() => setOpen(false)}>
                  <span className="font-display text-2xl tracking-[-0.025em]">{item.label}</span>
                  <span className="technical-label text-zinc-600 transition-colors group-hover:text-signal">{item.number}</span>
                </a>
              ))}
            </div>

            <a className="mt-3 flex items-center justify-between bg-ink px-4 py-3.5 font-mono text-[0.68rem] uppercase text-canvas transition-colors hover:bg-signal" href="/assets/resume/Ojomona_Inedu_Resume.pdf" download>
              Download resume <FileText size={15} />
            </a>

            <div className="mt-3 grid grid-cols-3 border-t border-white/[0.07] pt-3">
              <a className="flex min-h-12 flex-col items-center justify-center gap-1.5 text-zinc-500 transition-colors hover:text-signal" href="https://github.com/skidev101" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /><span className="font-mono text-[0.58rem] uppercase">GitHub</span></a>
              <a className="flex min-h-12 flex-col items-center justify-center gap-1.5 border-x border-white/[0.07] text-zinc-500 transition-colors hover:text-signal" href="https://linkedin.com/in/ojomonaethaninedu" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /><span className="font-mono text-[0.58rem] uppercase">LinkedIn</span></a>
              <a className="flex min-h-12 flex-col items-center justify-center gap-1.5 text-zinc-500 transition-colors hover:text-signal" href="https://x.com/monaski_" target="_blank" rel="noreferrer" aria-label="X / Twitter"><ArrowUpRight size={15} /><span className="font-mono text-[0.58rem] uppercase">X / Twitter</span></a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";

const Hero = () => (
  <section id="home" className="relative mx-auto flex min-h-[820px] w-[calc(100%_-_32px)] max-w-[960px] flex-col justify-between pb-8 pt-28 sm:min-h-screen sm:w-[calc(100%_-_48px)] sm:pt-36">
    <div className="technical-label relative z-10 flex justify-between text-copy"><span>Independent engineer / 001</span><span>Nigeria · Remote</span></div>

    <div aria-hidden="true" className="pointer-events-none absolute top-[29%] right-[-12vw] hidden h-64 w-72 overflow-hidden sm:block">
      <div className="absolute top-10 right-8 h-44 w-16 -skew-x-[22deg] bg-signal/90" />
      <div className="absolute top-4 right-2 h-52 w-24 -skew-x-[22deg] border border-zinc-700" />
      <span className="technical-label absolute right-0 bottom-5 text-zinc-600">22° / signal</span>
    </div>

    <div className="relative z-10 grid items-center gap-14 py-16 md:grid-cols-[minmax(0,1fr)_210px] md:gap-[9%] md:py-20">
      <div>
        <p className="technical-label flex items-center gap-2 text-copy"><span className="size-1.5 rounded-full bg-signal" /> Available for selected work</p>
        <h1 className="mt-7 max-w-3xl font-display text-[clamp(4rem,9vw,7.4rem)] font-medium leading-[0.82] tracking-[-0.055em]">MONASKI<span className="text-signal">.</span></h1>
        <p className="mt-8 max-w-[500px] font-display text-2xl leading-[1.08] tracking-[-0.025em] text-ink sm:text-3xl">Full-stack engineer building reliable systems and thoughtful digital products.</p>
        <p className="mt-5 max-w-[500px] text-base leading-7 text-copy">I&apos;m Ojomona Ethan Inedu. I work from product idea to shipped interface, with a focus on systems that stay clear under real constraints.</p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          <Link href="#work" className="inline-flex min-h-11 items-center justify-center gap-2 bg-ink px-4 font-mono text-[0.68rem] uppercase text-canvas transition-colors hover:bg-signal"><span>Explore work</span><ArrowDown size={16} /></Link>
          <a href="https://github.com/skidev101" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 bg-zinc-900 px-4 font-mono text-[0.68rem] uppercase transition-colors hover:bg-zinc-800">GitHub <Github size={16} /></a>
        </div>
      </div>

      <div className="relative mx-auto md:mr-0">
        <div className="technical-label absolute -top-8 left-0 whitespace-nowrap text-zinc-500">Ojomona Ethan Inedu</div>
        <div className="relative size-40 overflow-hidden rounded-full bg-zinc-800 ring-1 ring-zinc-700 sm:size-[190px]"><Image src="/dp.png" alt="Ojomona Ethan Inedu, working as Monaski" fill priority sizes="(max-width: 640px) 160px, 190px" className="object-cover grayscale" /></div>
        <span aria-hidden="true" className="absolute -right-3 bottom-2 size-5 rotate-45 bg-signal" />
        <div className="technical-label absolute -right-2 -bottom-8 whitespace-nowrap text-zinc-500">Product / systems</div>
      </div>
    </div>

    <div className="technical-label relative z-10 flex justify-between text-copy"><span>Selected systems below</span><ArrowUpRight size={15} /></div>
  </section>
);

export default Hero;

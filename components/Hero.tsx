import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";

const Hero = () => (
  <section id="home" className="relative mx-auto flex min-h-[860px] w-[calc(100%_-_32px)] max-w-[960px] flex-col justify-between overflow-visible pb-8 pt-28 sm:min-h-screen sm:w-[calc(100%_-_48px)] sm:pt-36">
    <div className="technical-label relative z-10 flex justify-between text-copy"><span>Independent engineer / 001</span><span>Nigeria · Remote</span></div>

    <div aria-hidden="true" className="pointer-events-none absolute top-[20%] right-[-18vw] left-[-18vw] h-[58%] overflow-hidden">
      <div className="absolute top-[14%] left-[41%] h-[72%] w-[16vw] min-w-28 -skew-x-[22deg] bg-signal" />
      <div className="absolute top-[4%] left-[54%] h-[84%] w-px rotate-[22deg] bg-zinc-700" />
      <div className="absolute top-[61%] left-[25%] h-px w-[62%] rotate-[-11deg] bg-zinc-800" />
      <div className="technical-label absolute top-[12%] left-[58%] text-zinc-600">Axis / 22°</div>
      <div className="technical-label absolute right-[13%] bottom-[20%] text-zinc-600">Signal / Monaski</div>
    </div>

    <div className="relative z-10 grid items-center gap-16 py-16 md:grid-cols-[minmax(0,1fr)_240px] md:gap-[8%] md:py-20">
      <div>
        <p className="technical-label flex items-center gap-2 text-copy"><span className="size-1.5 rounded-full bg-signal shadow-[0_0_14px_rgba(240,122,60,.8)]" /> Available for selected work</p>
        <h1 className="mt-7 font-display text-[clamp(4.1rem,10vw,8rem)] font-medium leading-[0.76] tracking-[-0.055em] text-ink">MONA<br /><span className="ml-[11%] text-canvas [text-shadow:-1px_-1px_0_#f2f0ea,1px_-1px_0_#f2f0ea,-1px_1px_0_#f2f0ea,1px_1px_0_#f2f0ea]">SKI</span></h1>
        <p className="mt-10 max-w-[500px] text-base leading-7 text-zinc-300 sm:text-[1.08rem]">Full-stack engineer building reliable systems and thoughtful digital products, from the interface people touch to the architecture underneath.</p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          <Link href="#work" className="inline-flex min-h-11 items-center justify-center gap-2 bg-ink px-4 font-mono text-[0.68rem] uppercase text-canvas transition-colors hover:bg-signal"><span>Explore work</span><ArrowDown size={16} /></Link>
          <a href="https://github.com/skidev101" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 bg-zinc-900 px-4 font-mono text-[0.68rem] uppercase transition-colors hover:bg-zinc-800">37 repositories <Github size={16} /></a>
        </div>
      </div>

      <div className="relative mx-auto md:mr-0">
        <div className="technical-label absolute -top-8 left-0 whitespace-nowrap text-zinc-500">Person behind the signal</div>
        <div className="relative size-44 overflow-hidden rounded-full bg-zinc-800 ring-4 ring-canvas sm:size-[220px]"><Image src="/dp.png" alt="Ojomona Ethan Inedu, working as Monaski" fill priority sizes="(max-width: 640px) 176px, 220px" className="object-cover grayscale" /></div>
        <span aria-hidden="true" className="absolute -right-4 bottom-3 size-9 rotate-45 bg-signal" />
        <div className="technical-label absolute -right-3 -bottom-8 whitespace-nowrap text-zinc-500">Full stack / Product minded</div>
      </div>
    </div>

    <div className="technical-label relative z-10 flex justify-between text-copy"><span>Selected systems below</span><ArrowUpRight size={15} /></div>
  </section>
);

export default Hero;

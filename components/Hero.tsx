import Link from "next/link";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import Threads from "./Threads";

const Hero = () => (
  <section
    id="home"
    className="relative mx-auto flex min-h-[820px] w-[calc(100%_-_32px)] max-w-[960px] flex-col justify-between pb-8 pt-28 sm:min-h-screen sm:w-[calc(100%_-_48px)] sm:pt-36"
  >
    {/*<div className="technical-label relative z-10 flex justify-between text-copy">
      <span>Skilled engineer / 001</span>
      <span>Nigeria · Remote</span>
    </div>*/}

    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-[25%] right-[-12vw] hidden h-72 w-[min(48vw,520px)] opacity-70 [mask-image:linear-gradient(to_right,transparent_0%,black_36%,black_100%)] sm:block"
    >
      <Threads color={[150, 150, 144]} amplitude={0.65} distance={0.35} />
      <span className="technical-label absolute right-0 bottom-2 text-zinc-600">
        Signal / 001
      </span>
    </div>

    <div className="relative z-10 grid items-center gap-14 py-16 md:grid-cols-[minmax(0,1fr)_210px] md:gap-[9%] md:py-20">
      <div>
        <p className="technical-label flex items-center gap-2 text-copy">
          <span className="size-1.5 rounded-full bg-signal" /> Available for
          work
        </p>
        <h1 className="mt-7 max-w-3xl font-display text-[clamp(4rem,9vw,7.4rem)] font-medium leading-[0.82] tracking-[-0.055em]">
          MONASKI<span className="text-signal ml-2">.</span>
        </h1>
        <p className="mt-8 max-w-[500px] font-display text-2xl leading-[1.08] tracking-[-0.025em] text-ink sm:text-3xl">
          Full-stack engineer building reliable systems and thoughtful digital
          products.
        </p>
        <p className="mt-5 max-w-[500px] text-base leading-7 text-copy">
          I&apos;m Ojomona Ethan Inedu. I work from product idea to shipped
          interface, with a focus on systems that stay clear under real
          constraints.
        </p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          <Link
            href="#work"
            className="inline-flex min-h-11 items-center justify-center gap-2 bg-ink px-4 font-mono text-[0.68rem] uppercase text-canvas transition-colors hover:bg-signal"
          >
            <span>Explore work</span>
            <ArrowDown size={16} />
          </Link>
          <a
            href="https://github.com/skidev101"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 bg-zinc-900 px-4 font-mono text-[0.68rem] uppercase transition-colors hover:bg-zinc-800"
          >
            GitHub <Github size={16} />
          </a>
        </div>
      </div>

      <div className="relative mx-auto md:mr-0">
        <div className="technical-label absolute -top-8 left-0 whitespace-nowrap text-zinc-500">
          Monaski / signal mark
        </div>
        <div className="relative grid size-40 place-items-center overflow-hidden bg-zinc-900 ring-1 ring-white/[0.08] sm:size-[190px]">
          <div aria-hidden="true" className="absolute inset-0 opacity-70">
            {[18, 30, 42, 54, 66, 78].map((top, index) => (
              <span
                key={top}
                className="absolute left-[-12%] h-px w-[125%] bg-zinc-700"
                style={{
                  top: `${top}%`,
                  transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)`,
                }}
              />
            ))}
          </div>
          <span className="relative z-10 font-display text-7xl font-medium tracking-[-0.08em] text-ink sm:text-8xl">
            M
          </span>
          <span
            aria-hidden="true"
            className="absolute right-[20%] h-[58%] w-2 -skew-x-[22deg] bg-signal"
          />
          <span className="technical-label absolute right-3 bottom-3 text-zinc-500">
            001
          </span>
        </div>
        <div className="technical-label absolute -right-2 -bottom-8 whitespace-nowrap text-zinc-500">
          Product / systems
        </div>
      </div>
    </div>

    <div className="technical-label relative z-10 flex justify-between text-copy">
      <span>Selected systems below</span>
      <ArrowDown size={15} />
    </div>
  </section>
);

export default Hero;

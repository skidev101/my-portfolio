"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const technologies = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express", slug: "express" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Redis", slug: "redis" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "PWA", slug: "pwa" },
  { name: "Vercel", slug: "vercel" },
];

const TechStack = () => {
  const x = useMotionValue(0);
  const animation = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    animation.current = animate(x, [0, -650], { duration: 30, ease: "linear", repeat: Infinity });
    return () => animation.current?.stop();
  }, [x]);

  return (
    <section className="mx-auto w-[calc(100%_-_32px)] max-w-[960px] py-20 sm:w-[calc(100%_-_48px)] sm:py-28">
      <div className="flex items-baseline gap-3 sm:gap-[18px]"><span className="technical-label text-signal">05</span><h2 className="font-display text-[1.8rem] font-normal tracking-[-0.03em] sm:text-[2.2rem]">Tools I reach for</h2></div>
      <div className="relative mt-10 overflow-hidden py-4 before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-gradient-to-r before:from-canvas before:to-transparent after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-canvas after:to-transparent">
        <motion.div style={{ x }} className="flex w-max items-center gap-10" onMouseEnter={() => animation.current?.pause()} onMouseLeave={() => animation.current?.play()}>
          {[...technologies, ...technologies].map((technology, index) => <div key={`${technology.slug}-${index}`} className="group flex items-center gap-3 whitespace-nowrap"><span className="grid size-9 place-items-center bg-zinc-900 transition-colors group-hover:bg-zinc-800"><img src={`https://cdn.simpleicons.org/${technology.slug}/8a8a84`} alt="" className="size-4 opacity-80 transition group-hover:opacity-100" /></span><span className="font-mono text-[0.68rem] uppercase text-copy transition-colors group-hover:text-ink">{technology.name}</span></div>)}
        </motion.div>
      </div>
      <p className="technical-label mt-3 text-copy">Interface / systems / delivery</p>
    </section>
  );
};

export default TechStack;

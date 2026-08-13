"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Tailwind CSS", "PWA", "AI workflows", "Vercel",
];

const TechStack = () => {
  const track = [...technologies, ...technologies];
  const x = useMotionValue(0);
  const animation = useRef<ReturnType<typeof animate> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animation.current = animate(x, [0, -520], { duration: 26, ease: "linear", repeat: Infinity });
    return () => animation.current?.stop();
  }, [x]);

  return (
    <section className="mx-auto w-[calc(100%_-_32px)] max-w-[960px] py-20 sm:w-[calc(100%_-_48px)] sm:py-28">
      <div className="flex items-baseline gap-3 sm:gap-[18px]"><span className="technical-label text-signal">04</span><h2 className="font-display text-[1.8rem] font-normal tracking-[-0.03em] sm:text-[2.2rem]">Tools I reach for</h2></div>
      <div className="relative mt-10 overflow-hidden py-5 before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-gradient-to-r before:from-canvas before:to-transparent after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-canvas after:to-transparent">
        <motion.div ref={trackRef} style={{ x }} className="flex w-max items-center gap-8" onMouseEnter={() => animation.current?.pause()} onMouseLeave={() => animation.current?.play()}>
          {track.map((technology, index) => <span key={`${technology}-${index}`} className="flex items-center gap-8 whitespace-nowrap font-mono text-xs uppercase text-copy transition-colors hover:text-ink"><i className="size-1.5 rotate-45 bg-signal" />{technology}</span>)}
        </motion.div>
      </div>
      <p className="technical-label mt-3 text-copy">Interface / systems / delivery</p>
    </section>
  );
};

export default TechStack;

"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function TechStack() {
  const technologies = [
    { name: "HTML", slug: "html5" },
    { name: "CSS", slug: "css" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "Javascript", slug: "javascript" },
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "Typescript", slug: "typescript" },
    { name: "ExpressJS", slug: "express" },
    { name: "MongoDB", slug: "mongodb" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Redis", slug: "redis" },
    { name: "Git", slug: "git" },
    { name: "Sanity", slug: "sanity" },
  ];

  // Duplicate array for seamless looping
  const doubledTech = [
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  const x = useMotionValue(0);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const totalWidth = containerRef.current.scrollWidth / 2;

    animationRef.current = animate(x, [0, -totalWidth], {
      duration: 35,
      ease: "linear",
      repeat: Infinity,
    });

    return () => animationRef.current?.stop();
  }, [x]);

  return (
    <section className="py-12 md:py-22 bg-transparent text-white overflow-hidden">
      <div className="font-heading max-w-4xl mx-auto text-center text-black overflow-hidden mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stack I use</h2>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
          Technologies I work with to build products that solve real problems
        </p>

        {/* Marquee */}
        <div className="relative w-full">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background/90 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background/90 to-transparent z-10" />

          <motion.div
            ref={containerRef}
            className="flex gap-10 md:gap-14 py-4"
            style={{ x }}
            onMouseEnter={() => animationRef.current?.pause()}
            onMouseLeave={() => animationRef.current?.play()}
          >
            {doubledTech.map((tech, index) => (
              <div
                key={`${tech.slug}-${index}`}
                className="flex flex-col items-center flex-shrink-0 group"
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/9ca3af`}
                  alt={`${tech.name} logo`}
                  className="
                    w-10 h-10 md:w-10 md:h-10
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                  onMouseOver={(e) =>
                    (e.currentTarget.src = `https://cdn.simpleicons.org/${tech.slug}`)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = `https://cdn.simpleicons.org/${tech.slug}/9ca3af`)
                  }
                />

                <span
                  className="
                  mt-3 text-sm md:text-base
                  text-gray-400
                  group-hover:text-gray-500
                  transition-colors
                "
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// components/TechStack.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function TechStack() {
  const technologies = [
    { name: 'HTML', slug: 'html5' },
    { name: 'CSS', slug: 'css' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'Javascript', slug: 'javascript' },
    { name: 'React', slug: 'react' },
    { name: 'Next.js', slug: 'nextdotjs' },
    { name: 'Typescript', slug: 'typescript' },
    { name: 'ExpressJS', slug: 'express' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'PostgreSQL', slug: 'postgresql' },
    { name: 'Redis', slug: 'redis' },
    { name: 'Git', slug: 'git' },
    { name: 'Sanity', slug: 'sanity' },
  ];

  // Duplicate the array → creates seamless loop without visible reset
  const doubledTech = [...technologies, ...technologies];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-12 md:py-16 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stack I use
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Technologies I work with to build products that solve real problems
        </p>

        {/* Marquee wrapper */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fade masks on left & right */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />

          {/* Scrolling content */}
          <motion.div
            className="flex gap-8 md:gap-12 py-4"
            initial={{ x: 0 }}
            animate={isPaused ? { x: 0 } : { x: '-50%' }}
            transition={{
              duration: isPaused ? 0 : 35, // 35s for one full cycle — adjust speed here
              ease: 'linear',
              repeat: isPaused ? 0 : Infinity,
              repeatType: 'loop',
            }}
          >
            {doubledTech.map((tech, index) => (
              <div
                key={`${tech.slug}-${index}`}
                className="flex flex-col items-center flex-shrink-0 group"
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/${tech.slug}`}
                  alt={`${tech.name} logo`}
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-24 md:h-24 transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
                />
                <span className="mt-3 text-sm md:text-base text-gray-400 group-hover:text-gray-200 transition-colors">
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
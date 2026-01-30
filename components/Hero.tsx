"use client";

import { useRef } from "react";
import Image from "next/image";
import BgPattern from "./BgPattern";
import BlurText from "./BlurText";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe } from "./ui/globe";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const globeY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex justify-center flex-col"
    >
      <div className="relative min-h-screen overflow-hidden">
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 -z-10 -mt-10"
        >
          <BgPattern />
        </motion.div>

        <div className="mt-20 flex flex-col justify-center items-centermd:flex-row md:px-4 lg:px-22">
          <div className="relative flex flex-col justify-left md:justify-center items-left md:items-center text-left md:text-center pb-[100px] md:py-[50px] w-full">
            <motion.div style={{ y: globeY }}>
              <Image
                src="/dp.png"
                alt="profile-dp"
                width={140}
                height={140}
                className="w-[110px] md:w-[140px] h-[110px] md:h-[140px] object-cover mt-10 ml-3 md:mt-0 rounded-full"
              />
            </motion.div>

            <motion.div
              style={{ y: textY }}
              className="mt-4 ml-4 max-w-3xl text-left md:text-center"
            >
              <BlurText
                text="Hi, I'm Ethan."
                delay={150}
                animateBy="words"
                direction="bottom"
                className="flex justify-left md:justify-center text-5xl sm:text-7xl font-heading"
              />
              <BlurText
                text="Web Developer"
                delay={300}
                animateBy="words"
                direction="bottom"
                className="flex justify-left md:justify-center text-5xl sm:text-7xl font-heading"
              />

              <motion.p
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="text-gray-600 dark:text-gray-300 mt-4 text-lg"
              >
                I build modern, scalable web solutions with a focus on
                performance, usability, and clean design that deliver real
                business value.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-left md:justify-center mt-6 gap-3"
              >
                <Button
                  onClick={() => console.log("hire me!!")}
                  className="flex items-center gap-2 hover:px-4 text-white rounded-full hover:cursor-pointer hover:scale-x-105 transition-all duration-300 active:scale-95"
                >
                  Hire Me
                </Button>
                <Button className="hover:px-4 text-gray-700 dark:text-gray-300 hover:text-black bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 hover:bg-gray-300 active:scale-95 hover:cursor-pointer rounded-full">
                  View Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* <div>
          <Image
            src="/white-globe.png"
            alt="globe"
            width={250}
            height={250}
            className="object-cover invert-100 dark:invert-0 mt-10 lg:mt-0"
          />
          <Globe className="w-[100px] h-[100px] mt-40 mr-20 float-right" />
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import Image from "next/image";
import BgPattern from "./BgPattern";
import BlurText from "./BlurText";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Globe } from "./ui/globe";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex justify-center flex-col min-h-screen"
    >
      <BgPattern />

      <div className="flex flex-col md:flex-row justify-between items-center px-4 lg:px-22 py-[150px]">
        <div className=" relative py-[50px] w-full">
          <motion.div
            initial={{ scaleY: 0, opacity: 0, x: -20 }}
            animate={{ scaleY: 1, opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.3,
            }}
            className="absolute left-0 top-0 w-[1px] h-[370px] bg-gray-600 origin-top z-10"
          ></motion.div>

          <div className="ml-4 max-w-4xl">
            <BlurText
              text="Hi, I'm Ethan."
              delay={150}
              animateBy="words"
              direction="bottom"
              className="text-5xl sm:text-7xl font-heading"
            />
            <BlurText
              text="A Web Developer"
              delay={300}
              animateBy="words"
              direction="bottom"
              className="text-5xl sm:text-7xl font-heading"
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
              I create things for the web that takes your business to the next
              level
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex mt-6 gap-3"
            >

              <Button
                onClick={() => console.log("hire me!!")}
                className="flex items-center gap-2 hover:px-4 text-white rounded-xl hover:cursor-pointer hover:scale-x-105 transition-all duration-300 active:scale-95"
              >
                Hire Me!
              </Button>
              <Button
                className="hover:px-4 text-gray-700 dark:text-gray-300 hover:text-black bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 hover:bg-gray-300 active:scale-95 hover:cursor-pointer rounded-full"
              >
                My Resume
              </Button>
            </motion.div>
          </div>
        </div>

        <div>
          <Image
            src="/white-globe.png"
            alt="globe"
            width={250}
            height={250}
            className="object-cover invert-100 dark:invert-0 mt-10 lg:mt-0"
          />
          {/* <Globe className="w-[100px] h-[100px] mt-40 mr-20 float-right" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

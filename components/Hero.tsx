"use client";

import BgPattern from "./BgPattern";
import BlurText from "./BlurText";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex justify-center flex-col min-h-screen"
    >
      <BgPattern />

      <div className="px-4 sm:px-22 py-[150px]">
        <div className=" relative sm:max-w-1/2 py-[50px]">
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
                className="px-4 py-2 text-md hover:scale-x-105 origin-left text-white transition-all duration-150 hover:cursor-pointer rounded-xl"
              >
                Hire Me!
              </Button>
              <Button className="px-4 py-2 text-md hover:scale-x-108 origin-left text-white bg-gray-300 hover:bg-black dark:bg-gray-600 transition-all duration-150 hover:cursor-pointer rounded-full">
                My Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

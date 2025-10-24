"use client"

import BgPattern from "./BgPattern";
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
        <div className="sm:max-w-1/2 border-l-1 border-gray-600 py-[50px]">
          <div className="ml-4">
            {/* <h1 className="text-5xl sm:text-7xl font-heading">
              Hi, I'm Ethan. <br /> A Web Developer
            </h1> */}
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="text-5xl sm:text-7xl font-heading"
            >
              Hi, I'm Ethan. <br /> A Web Developer
            </motion.h1>
            {/* <p className="text-md sm:text-lg mt-3">
              I create things for the web that takes your business to the next
              level
            </p> */}

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-300 mt-4 text-lg"
            >
             
                I create things for the web that takes your business to the next
                level
              
            </motion.p>

            <div className="flex mt-6 gap-3">
              <Button className="px-4 py-2 text-md hover:scale-x-105 origin-left text-white transition-all duration-150 hover:cursor-pointer rounded-xl">
                Hire Me!
              </Button>
              <Button className="px-4 py-2 text-md hover:scale-x-108 origin-left text-white bg-black/30 hover:bg-black dark:bg-gray-600 transition-all duration-150 hover:cursor-pointer rounded-full">
                My Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

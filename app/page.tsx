import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default page;

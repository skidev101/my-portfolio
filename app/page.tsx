import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import LineSeparator from "@/components/LineSeparator";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <LineSeparator />
      <Projects />
      <LineSeparator />
      <TechStack />
      <LineSeparator />
      <CallToAction />
      <LineSeparator />
      <Footer />
    </>
  );
};

export default page;
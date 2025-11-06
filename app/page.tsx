import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import LineSeparator from "@/components/LineSeparator";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <LineSeparator />
      <Projects />
      <LineSeparator />
      <CallToAction />
      <LineSeparator />
      <Footer />
    </>
  );
};

export default page;
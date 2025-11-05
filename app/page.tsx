import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <CallToAction />
      <ContactForm />
    </>
  );
};

export default page;
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <TechStack />
      <CallToAction />
      <Footer />
    </main>
  );
}

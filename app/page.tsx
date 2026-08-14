import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <CallToAction />
      <Footer />
    </main>
  );
}

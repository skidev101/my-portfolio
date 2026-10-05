import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <CallToAction />
      <Footer />
    </main>
  );
}

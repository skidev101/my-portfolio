import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import CurrentSignal from "@/components/CurrentSignal";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return <main><Hero /><About /><Projects /><CurrentSignal /><TechStack /><CallToAction /><Footer /></main>;
}

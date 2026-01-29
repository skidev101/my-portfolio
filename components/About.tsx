import { TechCloud } from "./TechCloud";

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-center items-center flex-col min-h-screen w-full max-h-max -mt-18 md:mt-0"
    >
      <div className="max-w-4xl">

      <h1 className="text-black/90 dark:text-white/90 text-5xl font-heading text-center">
        About Me
      </h1>

      <p className="text-[1.1rem] text-gray-600 dark:text-gray-300 mt-3 sm:mt-8">
        I'm a web developer with a strong focus on building clean, reliable, and
        user-centered applications. I enjoy turning ideas into well-structured,
        maintainable solutions that perform well across devices and browsers.
        <br />
        <br />
        My work emphasizes modern frontend technologies, thoughtful UI/UX
        design, and scalable architecture. I'm constantly learning and refining
        my skills, whether that's improving performance, writing cleaner code,
        or exploring new tools and frameworks to stay current in the fast-moving
        web ecosystem.
      </p>
      </div>

      <div>{/* <TechCloud /> */}</div>
    </section>
  );
};

export default About;

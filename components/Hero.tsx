import BgPattern from "./BgPattern";

const Hero = () => {
  return (
    <section className="relative flex justify-center flex-col min-h-screen">
      <BgPattern />

      <div className="px-22 py-[150px]">
        <div className="max-w-1/2 border-l-1 py-[50px]">
          <h1 className="text-6xl ml-2">Hi, I'm Ethan</h1>
          <p className="text-lg ml-2">A passionate Fullstack developer</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

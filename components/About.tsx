const About = () => (
  <section id="about" className="mx-auto w-[calc(100%_-_32px)] max-w-[960px] py-20 sm:w-[calc(100%_-_48px)] sm:py-32">
    <div className="flex items-baseline gap-3 sm:gap-[18px]"><span className="technical-label text-signal">02</span><h2 className="font-display text-[1.8rem] font-normal tracking-[-0.03em] sm:text-[2.2rem]">About / approach</h2></div>
    <div className="grid gap-9 pt-10 md:grid-cols-2 md:gap-[15%] md:pt-14">
      <p className="max-w-[430px] font-display text-[1.85rem] leading-[1.05] tracking-[-0.03em] sm:text-[2.1rem]">I work where product decisions and engineering decisions become the same thing.</p>
      <div className="max-w-[480px] text-base leading-7 text-copy"><p className="mb-5">I&apos;m Ojomona Ethan Inedu, a full-stack engineer taking web products from the first useful interaction through the systems that keep them reliable.</p><p className="mb-5">My default is clear interfaces, deliberate architecture, and code another engineer can understand later. Based in Nigeria and available for remote product work.</p><div className="mt-8 flex gap-6 font-mono text-[0.72rem] uppercase"><a className="transition-colors hover:text-signal" href="https://github.com/skidev101" target="_blank" rel="noreferrer">GitHub <span className="text-signal">↗</span></a><a className="transition-colors hover:text-signal" href="mailto:skidev101@gmail.com">Email <span className="text-signal">↗</span></a></div></div>
    </div>
  </section>
);

export default About;

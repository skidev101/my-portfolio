import { experience } from "@/lib/experience";

const Experience = () => (
  <section id="experience" className="mx-auto w-[calc(100%_-_32px)] max-w-[960px] py-20 sm:w-[calc(100%_-_48px)] sm:py-32">
    <div className="flex items-baseline gap-3 sm:gap-[18px]"><span className="technical-label text-signal">03</span><h2 className="font-display text-[1.8rem] font-normal tracking-[-0.03em] sm:text-[2.2rem]">Experience</h2></div>
    <div className="mt-10 space-y-8">
      {experience.map((item) => (
        <div key={`${item.company}-${item.role}`} className="grid gap-3 sm:grid-cols-[1fr_150px] sm:gap-8">
          <div className="flex gap-4">
            <span aria-hidden="true" className="mt-2 size-2 shrink-0 rotate-45 bg-signal" />
            <div><h3 className="font-display text-xl font-normal">{item.role}</h3><p className="mt-1 text-sm text-copy">{item.company}</p><p className="mt-3 max-w-lg text-sm leading-6 text-copy">{item.summary}</p></div>
          </div>
          <p className="technical-label text-copy sm:pt-1">{item.period}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;

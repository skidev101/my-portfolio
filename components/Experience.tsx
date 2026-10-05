import { experience } from "@/lib/experience";

const Experience = () => (
  <section
    id="experience"
    className="mx-auto max-w-[680px] px-6 py-16 sm:px-8 sm:py-24"
  >
    <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
      <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
        Experience
      </h2>

      {/* Hairlines do the separating; no cards, no bullets */}
      <div className="divide-y divide-line">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="py-6 first:pt-0 last:pb-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-base font-medium text-ink">
                {item.role}
                <span className="text-quiet"> · {item.company}</span>
              </h3>
              <p className="font-mono text-xs text-quiet">{item.period}</p>
            </div>
            <p className="mt-2 max-w-[36rem] text-[0.9375rem] leading-6 text-copy">
              {item.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;

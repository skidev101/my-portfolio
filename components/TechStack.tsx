import { technologies } from "@/lib/technologies";

const TechStack = () => (
  <section className="mx-auto max-w-[680px] px-6 py-16 sm:px-8 sm:py-24">
    <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
      <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
        Tools
      </h2>
      <ul className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md border border-line px-2.5 py-1.5 font-mono text-xs text-copy"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TechStack;

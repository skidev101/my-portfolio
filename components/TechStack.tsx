const groups = [
  { label: "Interface", items: "React / Next.js / TypeScript / Tailwind CSS" },
  { label: "Systems", items: "Node.js / Express / PostgreSQL / MongoDB / Redis" },
  { label: "Product", items: "Offline-first / PWA / AI workflows / CMS architecture" },
  { label: "Delivery", items: "Git / Vercel / Resend / Firebase / Cloudinary" },
];

const TechStack = () => (
  <section className="mx-auto w-[calc(100%_-_32px)] max-w-[960px] py-20 sm:w-[calc(100%_-_48px)] sm:py-32">
    <div className="flex items-baseline gap-3 sm:gap-[18px]"><span className="technical-label text-signal">04</span><h2 className="font-display text-[1.8rem] font-normal tracking-[-0.03em] sm:text-[2.2rem]">Tools I reach for</h2></div>
    <div className="mt-10 space-y-6">{groups.map((group) => <div className="grid gap-2 text-base text-copy sm:grid-cols-[180px_1fr] sm:gap-7 sm:text-[1.1rem]" key={group.label}><span className="technical-label text-ink">{group.label}</span><span>{group.items}</span></div>)}</div>
  </section>
);

export default TechStack;

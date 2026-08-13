import ContactForm from "./ContactForm";

const CallToAction = () => (
  <section id="contact" className="mx-auto w-[calc(100%_-_32px)] max-w-[960px] py-20 sm:w-[calc(100%_-_48px)] sm:pt-32 sm:pb-24">
    <div className="flex items-baseline gap-3 sm:gap-[18px]"><span className="technical-label text-signal">06</span><h2 className="font-display text-[1.8rem] font-normal tracking-[-0.03em] sm:text-[2.2rem]">Start a conversation</h2></div>
    <div className="grid gap-9 pt-10 md:grid-cols-2 md:gap-[15%] md:pt-14"><div><p className="max-w-[430px] font-display text-[1.85rem] leading-[1.05] tracking-[-0.03em] sm:text-[2.1rem]">Have a product, system, or idea that needs a careful pair of hands?</p><a className="mt-8 inline-block border-b border-ink pb-1 font-mono text-[0.75rem] uppercase transition-colors hover:text-signal" href="mailto:skidev101@gmail.com">skidev101@gmail.com <span className="text-signal">↗</span></a></div><ContactForm /></div>
  </section>
);

export default CallToAction;

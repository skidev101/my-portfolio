import { ArrowUpRight } from "lucide-react";
import ContactForm from "./ContactForm";

const CallToAction = () => (
  <section
    id="contact"
    className="mx-auto max-w-[680px] px-6 py-16 sm:px-8 sm:py-24"
  >
    <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
      <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
        Contact
      </h2>

      <div className="max-w-[42rem]">
        <p className="text-lg leading-8 text-ink">
          Available for product engineering and full-stack work.
        </p>
        <p className="mt-3 text-base leading-7 text-copy">
          Email is the fastest route and reaches me directly.
        </p>

        <a
          href="mailto:skidev101@gmail.com"
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-ink px-4 text-sm font-medium text-canvas transition-[background-color,transform] duration-150 ease-out hover:bg-copy active:scale-[0.98]"
        >
          skidev101@gmail.com
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <div className="mt-10 border-t border-line pt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;

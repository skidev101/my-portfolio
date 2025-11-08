import ContactForm from "./ContactForm";
import { Meteors } from "./ui/meteors";

const CallToAction = () => {
  return (
    <section
      id="about"
      className="mt-18 sm:mt-10 flex text-left flex-col max-h-max px-3 lg:px-50 sm:py-20"
    >
      <div className="w-full text-center bg-card px-4 sm:px-0 py-6 rounded-t-4xl sm:rounded-t-[150px] border border-gray-300 dark:border-gray-500">
        <h1 className="text-black/90 dark:text-white/90 text-3xl sm:text-5xl font-heading">
          Let's take your dream out of this world
        </h1>
      </div>

      <div className="relative overflow-hidden w-full min-h-[460px] sm:min-h-[390px] text-center bg-card mt-1 sm:mt-2 rounded-2xl border border-gray-300 dark:border-gray-500">
        <div className="absolute inset-0">
          <Meteors />
        </div>
        <div className="relative z-10">
          <ContactForm />
        </div>
      </div>
      {/* <p className="text-[1.1rem] text-gray-600 dark:text-gray-300 mt-3">
      </p> */}
    </section>
  );
};

export default CallToAction;

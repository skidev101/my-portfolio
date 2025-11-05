const CallToAction = () => {
  const services = ["Ecommerce website", "Blog site", "Portfolio site"];

  return (
    <section
      id="about"
      className="-mt-18 sm:mt-10 flex text-left flex-col max-h-max px-3 lg:px-50 sm:py-20"
    >
      <h1 className="text-black/90 dark:text-white/90 text-5xl font-heading">
        Let's build your dream together
      </h1>

      <p className="text-[1.1rem] text-gray-600 dark:text-gray-300 mt-3">
        Whether it's a
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-background/80 rounded-xl p-4">
        {services.map((service: string, i) => (
          <div key={i} className="w-full px-4 py-7 rounded-3xl bg-card dark:bg-[#201e1e] border border-gray-300 dark:border-gray-500 dark:shadow-md drop-shadow-lg">
            {service}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CallToAction;


const ContactForm = () => {
  return (
    <section
      id="about"
      className="-mt-18 sm:mt-0 flex flex-col max-h-max px-3 lg:px-50"
    >
      <h1 className="text-black/90 dark:text-white/90 text-5xl font-heading">
        Get in touch
      </h1>

      <form>
        <input type="text" name="name" placeholder="Enter your name" />
      </form>
    </section>
  )
}

export default ContactForm
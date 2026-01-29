import { Github, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full mt-10 py-10">
      {/* Copyright */}
      <p className="text-gray-600 dark:text-gray-300 font-heading">
        &copy; Copyright {new Date().getFullYear()} Monaski
      </p>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-4 mt-2">
        {/* GitHub */}
        <a
          href="https://github.com/skidev101"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>

        {/* Mail */}
        <a
          href="mailto:your-email@example.com"
          className="text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>

        {/* Twitter / X */}
        <a
          href="https://x.com/monaski_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="X / Twitter"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5"
          >
            <title>X</title>
            <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

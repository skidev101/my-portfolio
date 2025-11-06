import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-10 py-10">
      <div>
        <p className="text-gray-600 dark:text-gray-300 font-heading">
          Copyright &copy; {new Date().getFullYear()} Monaski
        </p>
      </div>
      <div className="flex justify-center items-center gap-2 mt-1">
        <a href="https://x.com/monaski_">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
          </svg>
        </a>
        <Github className="size-5" />
        <Mail className="size-5" />
      </div>
    </div>
  );
};

export default Footer;

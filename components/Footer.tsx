import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/skidev101", Icon: Github },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ojomonaethaninedu",
    Icon: Linkedin,
  },
  { label: "Email", href: "mailto:skidev101@gmail.com", Icon: Mail },
];

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-[680px] flex-wrap items-center justify-between gap-x-8 gap-y-5 px-6 py-10 sm:px-8">
      <p className="text-sm text-quiet">
        © {new Date().getFullYear()} Ojomona Ethan Inedu
      </p>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(href.startsWith("http")
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
            className="flex items-center gap-2 text-sm text-copy transition-colors duration-150 ease-out hover:text-ink"
          >
            <Icon size={15} aria-hidden="true" />
            {label}
          </a>
        ))}
        <a
          href="/assets/resume/Ojomona_Inedu_Resume.pdf"
          download
          className="text-sm text-copy transition-colors duration-150 ease-out hover:text-ink"
        >
          Résumé
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

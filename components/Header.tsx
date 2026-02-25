"use client";

import { FileText, Github, Home, Linkedin, Twitter } from "lucide-react";
// import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import StaggeredMenu from "./StaggeredMenu";
import { useState, useEffect } from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const navItems = [
    {
      icon: <FileText className="size-5" />,
      label: "Resume",
      link: "/assets/resume/Ojomona_Inedu_Resume.pdf",
      download: true,
    },
    { icon: <Home className="size-5" />, label: "Home", link: "/" },
    {
      label: "GitHub",
      icon: <Github className="size-5" />,
      link: "https://github.com/skidev101/",
      external: true,
    },
  ];

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about me", link: "#about" },
    { label: "Services", ariaLabel: "View my services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    {
      label: "Twitter",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-4 h-4"
        >
          <title>X</title>
          <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
        </svg>
      ),
      link: "https://x.com/monaski_",
    },
    {
      label: "GitHub",
      icon: <Github className="size-5" />,
      link: "https://github.com/skidev101",
    },
    {
      label: "LinkedIn",
      icon: <Linkedin className="size-5" />,
      link: "https://linkedin.com/in/ojomonaethaninedu",
    },
    {
      label: "Resume",
      icon: <FileText className="size-5" />,
      link: "http://example.com/resume.pdf",
      download: true,
    },
  ];

  const NavItemContent = ({ icon, label }: any) => (
    <>
      <span className="absolute inset-0 bg-gray-200 dark:bg-gray-600/30 rounded-xl origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />

      <span className="relative z-10 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:text-primary">
        {icon}
      </span>

      <span className="absolute -bottom-10 ml-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out text-sm bg-white/70 dark:bg-black/70 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm text-gray-800 dark:text-gray-200 whitespace-nowrap">
        {label}
      </span>
    </>
  );

  return (
    <header className="fixed z-20 inset-x-0 mt-6 flex justify-center align-center">
      <nav
        className="hidden liquid-nav md:flex gap-3 items-center px-4 md:px-5 py-2 md:py-3 rounded-2xl md:rounded-3xl text-gray-700 dark:text-gray-20 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-[12px] backdrop-saturate-150 shadow-xs relative"
        // style={{
        //   filter: "url(#liquid-glass)",
        // }}
      >
        <Link href="/" className="hidden md:block">
          Monaski
        </Link>
        {/* <ModeToggle /> */}
        <Separator
          orientation="vertical"
          className="hidden md:block ml-2 data-[orientation=vertical]:h-6"
        />
        {navItems.map((item, i) => {
          if (item.download) {
            return (
              <a
                key={item.label}
                href={item.link}
                download
                className="group relative flex items-center justify-center p-2 rounded-xl"
              >
                <NavItemContent icon={item.icon} label={item.label} />
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.link}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group relative flex items-center justify-center p-2 rounded-xl"
            >
              <NavItemContent icon={item.icon} label={item.label} />
            </Link>
          );
        })}

        {/* <ModeToggle /> */}

        <Separator
          orientation="vertical"
          className="hidden sm:flex mr-2 data-[orientation=vertical]:h-6"
        />

        <Button
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="hidden sm:flex bg-gray-200 rounded-xl hover:text-white transition-all duration-300 hover:px-5"
        >
          Hire me
        </Button>
      </nav>
      <div className="flex sm:hidden fixed top-6 right-7 z-20 bg-gray-50 px-10 py-4 rounded-full">
        {mounted && (
          <div className="fixed top-10 right-0 z-20 after:bg-amber-800 after:p-10 after:h-10 after:fixed after:bottom-0 after:content-['']">
            <StaggeredMenu
              isFixed={true}
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="#F97316"
              openMenuButtonColor="#F97316"
              changeMenuColorOnOpen={true}
              colors={["#C55A11", "#F97316"]}
              accentColor="#F97316"
              onMenuOpen={() => console.log("Menu opened")}
              onMenuClose={() => console.log("Menu closed")}
              className="font-heading sm:hidden"
              // renderMenuContent={(isOpen) =>
              //   isOpen && (
              //     <ModeToggle className="text-black dark:text-white pr-10" />
              //   )
              // }
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

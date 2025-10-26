"use client";

import { FileText, Github, Home, Linkedin, Twitter } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import StaggeredMenu from "./StaggeredMenu";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const navItems = [
    { icon: <Home className="size-5" />, label: "Home", link: "#home" },
    { icon: <FileText className="size-5" />, label: "Resume", link: "#resume" },
    {
      label: "GitHub",
      icon: <Github className="size-5" />,
      link: "https://github.com/skidev101",
    },
    {
      label: "Twitter",
      icon: <Twitter className="size-5" />,
      link: "https://x.com/monaski_",
    },
  ];

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Services", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    {
      label: "Twitter",
      icon: <Twitter className="size-5" />,
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
    },
  ];

  return (
    <div className="relative flex items-center">
      <nav className="fixed z-20 top-0 w-full flex justify-between items-center p-4 backdrop-blur-sm">
        <h1 className="text-2xl mt-2 sm:mt-0 sm:text-3xl font-heading">Monaski</h1>

        <div className="hidden sm:flex gap-3 items-center border border-gray-500 backdrop-blur-2xl rounded-3xl px-5 py-2 bg-white/70 dark:bg-black/50 text-gray-700 dark:text-gray-300">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-2 rounded-xl"
            >
              {/* Stretchy background */}
              <span className="absolute inset-0 bg-gray-300/30 dark:bg-gray-600/30 rounded-xl origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />

              <span className="relative z-10 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:text-primary">
                {item.icon}
              </span>

              <span className="absolute -bottom-10 ml-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out text-sm bg-white/70 dark:bg-black/70 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm text-gray-800 dark:text-gray-200 whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}

          <ModeToggle />
        </div>
      </nav>
      {mounted && (
        <div className="fixed top-10 right-0 z-20">
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
            renderMenuContent={(isOpen) =>
              isOpen && <ModeToggle className="text-black dark:text-white" />
            }
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;

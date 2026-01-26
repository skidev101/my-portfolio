"use client";

import { FileText, Github, Home, Linkedin, Twitter } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
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
    { icon: <FileText className="size-5" />, label: "Resume", link: "#resume" },
    { icon: <Home className="size-5" />, label: "Home", link: "/" },
    {
      label: "GitHub",
      icon: <Github className="size-5" />,
      link: "https://github.com/skidev101/",
    },
    // {
    //   label: "Twitter",
    //   icon: <Twitter className="size-5" />,
    //   link: "https://x.com/monaski_/",
    // },
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
    <header className="fixed z-20 inset-x-0 mt-6 flex justify-center align-center">
      <nav className="hidden sm:flex gap-3 items-center border border-slate-300 backdrop-blur-2xl rounded-[1.4em] px-5 py-2 dark:bg-black/30 text-gray-700 dark:text-gray-300">
        <h1>Monaski</h1>
        <Separator
          orientation="vertical"
          className="ml-2 data-[orientation=vertical]:h-6"
        />
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            target={item.link.startsWith("https") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-2 rounded-xl"
          >
            {/* Stretchy background */}
            <span className="absolute inset-0 bg-gray-200 dark:bg-gray-600/30 rounded-xl origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />

            <span className="relative z-10 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:text-primary">
              {item.icon}
            </span>

            <span className="absolute -bottom-10 ml-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out text-sm bg-white/70 dark:bg-black/70 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm text-gray-800 dark:text-gray-200 whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ))}

        {/* <ModeToggle /> */}

        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-6"
        />

        <Button className="bg-gray-200 rounded-xl hover:text-white transition-all duration-300 hover:px-5">Hire me</Button>
      </nav>
      {/* {mounted && (
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
                isOpen && (
                  <ModeToggle className="text-black dark:text-white pr-10" />
                )
              }
            />
          </div>
        )} */}
    </header>
  );
};

export default Header;

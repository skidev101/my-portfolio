"use client"

import { FileText, Github, Linkedin, Twitter } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import StaggeredMenu from "./StaggeredMenu";

const Projects = () => {
  const menuItems = [
      { label: "Home", ariaLabel: "Go to home page", link: "/" },
      { label: "About", ariaLabel: "Learn about us", link: "/about" },
      { label: "Services", ariaLabel: "View our services", link: "/services" },
      { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
    ];
  
    const socialItems = [
      { label: "Twitter", icon: <Twitter className="size-5" />, link: "https://x.com/monaski_" },
      { label: "GitHub", icon: <Github className="size-5" />, link: "https://github.com/skidev101" },
      { label: "LinkedIn", icon: <Linkedin className="size-5" />, link: "https://linkedin.com/in/ojomonaethaninedu" },
      { label: "Resume", icon: <FileText className="size-5" />, link: "http://example.com/resume.pdf" },
    ];



  return (
    <section className="relative flex justify-center flex-col min-h-screen font-sans-serif">
      <StaggeredMenu
          isFixed={false}
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
          renderMenuContent={(isOpen) => (
            isOpen && <ModeToggle className="text-black dark:text-white" />
          )}
        />
    </section>
  );
};

export default Projects;

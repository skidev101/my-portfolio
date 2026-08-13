import { Github, Linkedin, Mail } from "lucide-react";

const toRoman = (value: number) => {
  const numerals = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ] as const;

  return numerals.reduce((result, [number, numeral]) => {
    while (value >= number) {
      result += numeral;
      value -= number;
    }
    return result;
  }, "");
};

const Footer = () => (
  <footer className="mx-auto flex w-[calc(100%_-_32px)] max-w-[960px] flex-col justify-between gap-4 py-5 text-copy sm:w-[calc(100%_-_48px)] sm:flex-row sm:items-center"><span className="technical-label">© {toRoman(new Date().getFullYear())} Monaski</span><div className="flex gap-[17px]"><a className="transition-colors hover:text-signal" href="https://github.com/skidev101" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a><a className="transition-colors hover:text-signal" href="https://linkedin.com/in/ojomonaethaninedu" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a><a className="transition-colors hover:text-signal" href="mailto:skidev101@gmail.com" aria-label="Email"><Mail size={16} /></a></div></footer>
);

export default Footer;

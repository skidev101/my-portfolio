"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Engineer",
  "Product Builder",
  "Systems Architect",
  "Software Engineer",
];

export default function RoleSwitcher() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 250);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block font-medium text-ink transition-all duration-300 ${
        fade ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-xs -translate-y-1"
      }`}
    >
      {roles[index]}
    </span>
  );
}

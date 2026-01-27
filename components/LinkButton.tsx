"use client";

import { Button } from "./ui/button";
import { ReactNode } from "react";

interface ButtonProps {
  text?: string;
  externalLink: string;
  className?: string;
  icon?: ReactNode;
}

const LinkButton = ({ text, externalLink, className, icon }: ButtonProps) => {
  return (
    <Button
      onClick={() => window.open(externalLink)}
      className={`inline-flex items-center gap-2 hover:px-4 text-white rounded-xl hover:cursor-pointer hover:scale-x-105 transition-all duration-300 active:scale-95 ${className}`}
    >
      {text}
      {icon}
    </Button>
  );
};

export default LinkButton;

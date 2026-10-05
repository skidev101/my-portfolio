"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

interface CopyEmailButtonProps {
  email?: string;
  className?: string;
}

export default function CopyEmailButton({
  email = "skidev101@gmail.com",
  className = "",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy email address ${email}`}
      title="Click to copy email address"
      className={`group relative inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1 font-mono text-xs text-copy transition-colors duration-150 fine-pointer:hover:border-line-strong fine-pointer:hover:text-ink ${className}`}
    >
      <Mail size={13} className="text-quiet transition-colors fine-pointer:group-hover:text-signal" />
      <span>{email}</span>
      {copied ? (
        <Check size={13} className="text-signal animate-in fade-in zoom-in-75 duration-150" />
      ) : (
        <Copy size={13} className="text-quiet transition-colors fine-pointer:group-hover:text-ink" />
      )}
      {copied && (
        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-surface px-2 py-0.5 font-mono text-[10px] text-ink border border-line-strong shadow-md">
          Copied to clipboard!
        </span>
      )}
    </button>
  );
}

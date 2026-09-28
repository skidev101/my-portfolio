"use client";

import { FileText, Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/skidev101", Icon: Github },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ojomonaethaninedu",
    Icon: Linkedin,
  },
];

const resumeHref = "/assets/resume/Ojomona_Inedu_Resume.pdf";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
        return;
      }

      /* Cycle through the toggle and the panel, so the close control stays
         reachable by keyboard rather than only by Escape */
      if (event.key !== "Tab") return;
      const focusable: HTMLElement[] = [];
      if (toggleRef.current) focusable.push(toggleRef.current);
      if (panelRef.current) {
        focusable.push(
          ...panelRef.current.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          ),
        );
      }
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    /* A resize past the breakpoint would otherwise leave the page locked */
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onBreakpoint = () => {
      if (desktop.matches) close();
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          onClick={() => close()}
          className="text-[0.9375rem] font-semibold tracking-[-0.01em] transition-colors duration-150 ease-out hover:text-signal"
        >
          Monaski
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm text-copy md:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-150 ease-out hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={resumeHref}
            download
            className="flex items-center gap-1.5 rounded-md border border-line-strong px-3 py-1.5 text-sm text-ink transition-colors duration-150 ease-out hover:border-quiet hover:bg-surface"
          >
            <FileText size={14} aria-hidden="true" />
            Résumé
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="-mr-2 flex size-11 items-center justify-center rounded-md text-ink transition-[background-color,transform] duration-150 ease-out hover:bg-surface active:scale-[0.98] md:hidden"
        >
          {open ? (
            <X size={19} aria-hidden="true" />
          ) : (
            <Menu size={19} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Out of flow: in flow it would reserve its own height even while
          closed, and the fixed header would cover a slice of every page. */}
      <div
        ref={panelRef}
        id="mobile-navigation"
        inert={!open}
        data-open={open}
        className="absolute inset-x-0 top-full border-b border-line bg-canvas/95 backdrop-blur-xl transition-[opacity,transform] duration-200 ease-out data-[open=false]:pointer-events-none data-[open=false]:-translate-y-1 data-[open=false]:opacity-0 md:hidden"
      >
        <nav aria-label="Mobile" className="px-6 py-3 sm:px-8">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => close()}
              className="block border-b border-line py-4 text-base text-copy transition-colors duration-150 ease-out hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={resumeHref}
            download
            onClick={() => close()}
            className="mt-5 flex items-center justify-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-medium text-canvas transition-[background-color,transform] duration-150 ease-out hover:bg-copy active:scale-[0.98]"
          >
            <FileText size={15} aria-hidden="true" />
            Download résumé
          </a>
          <div className="mt-5 flex gap-6 pb-5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                onClick={() => close()}
                className="flex items-center gap-2 text-sm text-quiet transition-colors duration-150 ease-out hover:text-ink"
              >
                <Icon size={15} aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

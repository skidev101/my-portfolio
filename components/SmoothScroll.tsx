"use client";

import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let target = window.scrollY;
    let current = target;
    let frame = 0;
    let isRunning = false;

    const clamp = (value: number) => Math.max(0, Math.min(value, document.documentElement.scrollHeight - window.innerHeight));

    const render = () => {
      current += (target - current) * 0.085;
      if (Math.abs(target - current) < 0.35) current = target;
      window.scrollTo(0, current);

      if (current !== target) frame = requestAnimationFrame(render);
      else isRunning = false;
    };

    const start = () => {
      if (isRunning) return;
      isRunning = true;
      frame = requestAnimationFrame(render);
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      event.preventDefault();
      target = clamp(target + event.deltaY);
      start();
    };

    const handleAnchor = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || link.target === "_blank" || link.hasAttribute("download")) return;

      const hash = href.startsWith("/#") ? href.slice(1) : href.startsWith("#") ? href : "";
      if (!hash) return;

      const destination = document.querySelector(hash);
      if (!destination) return;

      event.preventDefault();
      target = clamp(window.scrollY + destination.getBoundingClientRect().top - 86);
      window.history.pushState(null, "", hash);
      start();
    };

    const syncTarget = () => {
      if (!isRunning) {
        target = window.scrollY;
        current = target;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("click", handleAnchor);
    window.addEventListener("scroll", syncTarget, { passive: true });
    window.addEventListener("resize", syncTarget);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("wheel", handleWheel);
      document.removeEventListener("click", handleAnchor);
      window.removeEventListener("scroll", syncTarget);
      window.removeEventListener("resize", syncTarget);
    };
  }, []);

  return null;
};

export default SmoothScroll;

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="mx-auto flex min-h-svh max-w-[1100px] flex-col justify-center px-6 py-20 sm:px-8"
    >
      {/* On an error page the status code is the content, not an eyebrow */}
      <p className="text-sm text-quiet">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
        This page isn&apos;t here.
      </h1>
      <p className="mt-4 max-w-[36rem] text-base leading-7 text-copy">
        The link may be out of date, or the project may have been renamed.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-ink px-4 text-sm font-medium text-canvas transition-[background-color,transform] duration-150 ease-out hover:bg-copy active:scale-[0.98]"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Back home
        </Link>
        <Link
          href="/#work"
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line-strong px-4 text-sm font-medium text-ink transition-[background-color,border-color,transform] duration-150 ease-out hover:border-quiet hover:bg-surface active:scale-[0.98]"
        >
          See the work
        </Link>
      </div>
    </main>
  );
}

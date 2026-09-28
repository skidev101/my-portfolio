import type { Metadata, Viewport } from "next";
import { Geist_Mono, Schibsted_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

/* One family carries display, body, and UI. Schibsted Grotesk is a precise
   neo-grotesque rather than the Vercel/Inter default, so the page reads
   deliberately typeset instead of generated. */
const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

/* Mono is reserved for content that is actually data: stack tags, years. */
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const description =
  "Ojomona Ethan Inedu is a full-stack engineer building reliable systems and thoughtful digital products, carrying a product from the first useful interaction through to production.";

export const metadata: Metadata = {
  metadataBase: new URL("https://monaski.vercel.app"),
  title: {
    default: "Monaski — Full-Stack Engineer",
    template: "%s — Monaski",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Monaski",
    title: "Monaski — Full-Stack Engineer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Monaski — Full-Stack Engineer",
    description,
    creator: "@monaski_",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#08090a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-canvas"
        >
          Skip to content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}

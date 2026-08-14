import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const display = localFont({
  src: "../fonts/BricolageGrotesque.ttf",
  variable: "--font-apple",
  display: "swap",
});
const body = localFont({
  src: "../fonts/lato/Lato-Regular.ttf",
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://monaski.vercel.app"),
  title: "Monaski | Full-Stack Engineer",
  description:
    "Monaski is Ojomona Ethan Inedu, a full-stack engineer building reliable systems and thoughtful digital products.",
  openGraph: {
    title: "Monaski | Full-Stack Engineer",
    description:
      "Reliable systems and thoughtful digital products by Ojomona Ethan Inedu.",
    url: "/",
    siteName: "Monaski",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Monaski | Full-Stack Engineer",
    description:
      "Reliable systems and thoughtful digital products by Ojomona Ethan Inedu.",
    creator: "@monaski_",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <SmoothScroll />
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import SvgFilters from "@/components/SvgFilters";

const apple = localFont({
  src: "../fonts/BricolageGrotesque.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-apple",
  display: "swap",
});

const lato = localFont({
  src: "../fonts/lato/Lato-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ethan | Full-Stack Web Developer",
  description:
    "Hi, I'm Ethan Inedu, a full-stack web developer building fast, scalable, and modern web applications. Available for freelance projects or full-time opportunities.",

  keywords: [
    "Ethan Inedu",
    "Web Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Freelance Web Developer",
  ],

  // Open Graph / social preview
  openGraph: {
    title: "Ethan | Full-Stack Web Developer",
    description:
      "Hi, I'm Ojomona Ethan Inedu, a full-stack web developer building fast, scalable, and modern web applications.",
    url: "https://yourwebsite.com",
    siteName: "Ethan's Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ethan's Portfolio",
      },
    ],
  },

  // Twitter card
  twitter: {
    card: "summary_large_image",
    title: "Ethan | Full-Stack Web Developer",
    description:
      "Hi, I'm Ojomona Ethan Inedu, a full-stack web developer building fast, scalable, and modern web applications.",
    images: ["https://yourwebsite.com/og-image.png"],
    creator: "@your_twitter_handle",
  },

  // Robots meta (simple indexing rules, per page)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Favicons
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${apple.variable} ${lato.variable} antialiased`}>
        <SvgFilters />
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";

const apple = localFont({
  src: "../fonts/apple_fonts/AppleGaramond.ttf",
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
  title: "Monaski - Web Developer",
  description: "Fullstack Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${apple.variable} ${lato.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

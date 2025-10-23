import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";

const apple = localFont({
  src: [
    {
      path: "../fonts/apple_fonts/AppleGaramond-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-apple"
});

export const metadata: Metadata = {
  title: "Monaski",
  description: "Fullstack Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${apple.variable} antialiased`}>
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

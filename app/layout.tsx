import type { Metadata } from "next";
import { Fira_Code, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Lenis } from "@/lib/lenis";

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], // Include common weights
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} ${roboto.variable} antialiased bg-black px-2`}
        cz-shortcut-listen="true"
      >
        <Lenis root>
          <header className="w-full top-0 z-50 bg-black backdrop-blur px-2">
            <Navbar />
          </header>
          <main id="main-container" data-scroll-container className="relative">
            {children}
          </main>
        </Lenis>
      </body>
    </html>
  );
}
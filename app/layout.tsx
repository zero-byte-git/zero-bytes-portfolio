import type { Metadata } from "next";
import { Concert_One } from "next/font/google"; //Fira_Code, Roboto
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Lenis } from "@/lib/lenis";

// const firaCode = Fira_Code({
//   variable: "--font-fira",
//   subsets: ["latin"],
// });

// const roboto = Roboto({
//   variable: "--font-roboto",
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

const concert = Concert_One({
  variable: "--font-concert",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Zero Byte",
  description: "Building Solution that Shape Tomorrow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${concert.variable} font-sans antialiased bg-black`} //${firaCode.variable} ${roboto.variable} 
        cz-shortcut-listen="true"
      >
        <Lenis root>
          <header className="w-full top-0 z-50 bg-black backdrop-blur px-2">
            <Navbar />
          </header>
          <main
            id="main-container"
            data-scroll-container
            className="relative px-2"
          >
            {children}
          </main>
        </Lenis>
      </body>
    </html>
  );
}

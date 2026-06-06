import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";
// import GrainEffect from "@/components/visualEffects/grain-effect";
// import { Cursor } from "@/components/cursor/cursor";

const mainFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-main",
});
const oswaldFont = Oswald({ subsets: ["cyrillic"], variable: "--font-oswald" });
const aquireFont = localFont({
  src: "./fonts/aquire-font/AquireBold.otf",
  variable: "--font-aquire",
});

export const metadata: Metadata = {
  title: "Sujeet Singhaniya | Portfolio",
  description:
    "Welcome to the official portfolio of Sujeet Singhaniya. Explore my work in web development, design, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={(
          mainFont.className,
          oswaldFont.variable,
          aquireFont.variable
        )}
      >
        {/* <GrainEffect /> */}
        {/* <Cursor color="#fff" /> */}
        {children}
      </body>
    </html>
  );
}

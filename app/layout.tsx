import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { MotionController } from "./components/MotionController";
import { SocialsSection } from "./components/SocialsSection";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Tsunami Sushi | Modern Sushi Restaurant",
  description:
    "Tsunami Sushi is a modern sushi restaurant serving omakase, signature rolls, sashimi, sake, and private dining.",
  icons: {
    icon: [{ url: "/logo3.png", type: "image/png" }],
    shortcut: "/logo3.png",
    apple: "/logo3.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <MotionController />
        {children}
        <SocialsSection />
      </body>
    </html>
  );
}

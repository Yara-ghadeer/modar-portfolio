import type { Metadata } from "next";
import {
  Architects_Daughter,
  Manrope,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modar Ghadeer — F&B Business Development Consultant",
  description:
    "Transforming ideas into successful food businesses — strategic planning, concept development, operational improvement, and business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${manrope.variable} ${architectsDaughter.variable}`}
    >
      <body className="antialiased flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

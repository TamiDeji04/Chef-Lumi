import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chef Lù | Authentic Nigerian Food — Dallas & Houston",
  description:
    "Order freshly made Nigerian food trays from Chef Lù. Jollof rice, fried rice, stew, and more — delivered or picked up in Dallas and Houston, Texas.",
  keywords:
    "Nigerian food Dallas, Nigerian food Houston, jollof rice delivery Texas, Nigerian food delivery, lumii.cooks, Chef Lu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F2E3CC] text-[#1A1008]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

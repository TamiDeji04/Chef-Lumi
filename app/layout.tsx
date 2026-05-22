import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chef Lù | Authentic Nigerian Cuisine — Dallas & Houston",
  description:
    "Chef Lù brings the rich, bold flavors of authentic Nigerian cuisine to your events and table. Luxury catering, food trays, and personal chef services across Dallas and Houston, Texas.",
  keywords: "Nigerian catering Dallas, Nigerian catering Houston, Nigerian food Texas, Chef Lu, lumii.cooks, jollof rice catering, Nigerian chef Dallas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#0B0806] text-[#F5EFE0]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

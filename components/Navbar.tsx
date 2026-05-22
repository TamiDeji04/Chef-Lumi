"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#0B0806]/95 backdrop-blur-md border-b border-[#2D2218]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="text-2xl font-semibold tracking-widest text-[#C8902A]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Chef Lù
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#9A8A72] uppercase">
            Nigerian Cuisine
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                pathname === href
                  ? "text-[#C8902A]"
                  : "text-[#9A8A72] hover:text-[#F5EFE0]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book"
            className="ml-4 px-5 py-2 border border-[#C8902A] text-[#C8902A] text-xs tracking-widest uppercase hover:bg-[#C8902A] hover:text-[#0B0806] transition-all duration-200"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#F5EFE0]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0B0806] border-t border-[#2D2218] px-6 py-6 flex flex-col gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-widest uppercase ${
                pathname === href ? "text-[#C8902A]" : "text-[#9A8A72]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book"
            className="w-full text-center py-3 border border-[#C8902A] text-[#C8902A] text-xs tracking-widest uppercase"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}

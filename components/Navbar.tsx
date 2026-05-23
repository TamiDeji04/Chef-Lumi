"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F2E3CC] ${
        scrolled || open ? "border-b border-[#D4B896]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="text-xl font-semibold tracking-widest text-[#D95F2A]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Chef Lù
          </span>
          <span className="text-[9px] tracking-[0.22em] text-[#7A6855] uppercase">
            Nigerian Cuisine
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                pathname === href
                  ? "text-[#D95F2A] font-medium"
                  : "text-[#7A6855] hover:text-[#1A1008]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/order"
            className="ml-2 px-5 py-2 rounded-full bg-[#D95F2A] text-white text-xs tracking-wide font-medium hover:bg-[#C04E1C] transition-colors"
          >
            Order Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#1A1008]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F2E3CC] border-t border-[#D4B896] px-5 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-wide ${
                pathname === href ? "text-[#D95F2A] font-medium" : "text-[#7A6855]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/order"
            className="w-full text-center py-3 rounded-full bg-[#D95F2A] text-white text-sm font-medium"
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}

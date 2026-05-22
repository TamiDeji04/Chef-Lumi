import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function TikTokIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#080604] border-t border-[#2D2218]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3
              className="text-3xl font-semibold text-[#C8902A] tracking-widest mb-2"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Chef Lù
            </h3>
            <p className="text-[10px] tracking-[0.25em] text-[#9A8A72] uppercase mb-4">
              Authentic Nigerian Cuisine
            </p>
            <p className="text-sm text-[#9A8A72] leading-relaxed">
              Elevating every occasion with bold, authentic Nigerian flavors —
              from intimate dinners to grand celebrations.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#C8902A] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Chef Lù" },
                { href: "/menu", label: "Menu & Packages" },
                { href: "/services", label: "Services" },
                { href: "/book", label: "Book Us" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#9A8A72] hover:text-[#F5EFE0] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#C8902A] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Event Catering",
                "Food Trays",
                "Personal Chef",
                "Corporate Events",
                "Private Parties",
                "Weekly Meals",
              ].map((s) => (
                <li key={s} className="text-sm text-[#9A8A72]">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#C8902A] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C8902A] mt-0.5 shrink-0" />
                <span className="text-sm text-[#9A8A72]">
                  Dallas & Houston, Texas
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#C8902A] shrink-0" />
                <a
                  href="tel:+1"
                  className="text-sm text-[#9A8A72] hover:text-[#F5EFE0] transition-colors"
                >
                  Contact for number
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#C8902A] shrink-0" />
                <a
                  href="mailto:lumii.cooks@gmail.com"
                  className="text-sm text-[#9A8A72] hover:text-[#F5EFE0] transition-colors"
                >
                  lumii.cooks@gmail.com
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/lumii.cooks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#2D2218] flex items-center justify-center text-[#9A8A72] hover:border-[#C8902A] hover:text-[#C8902A] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href="https://www.tiktok.com/@lumii.cooks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#2D2218] flex items-center justify-center text-[#9A8A72] hover:border-[#C8902A] hover:text-[#C8902A] transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2D2218] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#9A8A72]">
            © {new Date().getFullYear()} Chef Lù. All rights reserved.
          </p>
          <p className="text-xs text-[#9A8A72]">
            @lumii.cooks · Dallas & Houston, Texas
          </p>
        </div>
      </div>
    </footer>
  );
}

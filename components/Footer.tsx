import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1A1008] text-[#4E3018]">
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-semibold text-[#D95F2A] tracking-widest mb-1"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Chef Lù
            </h3>
            <p className="text-[9px] tracking-[0.22em] text-[#B09070] uppercase mb-4">
              Authentic Nigerian Cuisine
            </p>
            <p className="text-sm text-[#B09070] leading-relaxed">
              Freshly made Nigerian food, delivered or ready for pickup — Dallas & Houston, Texas.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/lumii.cooks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B09070] hover:text-[#D95F2A] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@lumii.cooks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B09070] hover:text-[#D95F2A] transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.18em] uppercase text-[#4E3018] mb-5 font-medium">
              Pages
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/menu", label: "Menu" },
                { href: "/order", label: "Order Now" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#B09070] hover:text-[#4E3018] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.18em] uppercase text-[#4E3018] mb-5 font-medium">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#D95F2A] mt-0.5 shrink-0" />
                <span className="text-sm text-[#B09070]">Dallas & Houston, Texas</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#D95F2A] mt-0.5 shrink-0" />
                <a
                  href="mailto:lumii.cooks@gmail.com"
                  className="text-sm text-[#B09070] hover:text-[#4E3018] transition-colors"
                >
                  lumii.cooks@gmail.com
                </a>
              </li>
            </ul>
            <p className="mt-5 text-xs text-[#B09070]">
              DM on Instagram or TikTok{" "}
              <span className="text-[#D95F2A]">@lumii.cooks</span>
            </p>
          </div>
        </div>

        <div className="border-t border-[#2D2010] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#B09070]">
            © {new Date().getFullYear()} Chef Lù. All rights reserved.
          </p>
          <p className="text-xs text-[#B09070]">@lumii.cooks</p>
        </div>
      </div>
    </footer>
  );
}

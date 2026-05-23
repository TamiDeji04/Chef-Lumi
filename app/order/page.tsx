import { Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Order | Chef Lù Nigerian Food — Dallas & Houston",
  description:
    "Place your order for freshly made Nigerian food trays — pickup or delivery in Dallas and Houston, Texas.",
};

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

export default function OrderPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-28 pb-10 max-w-6xl mx-auto px-5">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#D95F2A] mb-3">
          Ready to eat?
        </p>
        <h1
          className="text-5xl md:text-6xl font-light text-[#1A1008]"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Place Your Order
        </h1>
      </section>

      {/* ── Main ── */}
      <section className="max-w-6xl mx-auto px-5 pb-24 grid grid-cols-1 lg:grid-cols-5 gap-14">
        {/* Form */}
        <ScrollReveal className="lg:col-span-3">
          <div className="bg-[#F5E8D2] rounded-3xl border border-[#D4B896] p-8 md:p-10">
            <h2
              className="text-2xl font-medium text-[#1A1008] mb-1"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Order Form
            </h2>
            <p className="text-sm text-[#7A6855] mb-8">
              Fill this out and I&apos;ll get back to you within a few hours to confirm.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#1A1008] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First and last name"
                    className="w-full bg-[#F2E3CC] border border-[#D4B896] rounded-xl px-4 py-3 text-sm text-[#1A1008] placeholder-[#B8A07E] focus:outline-none focus:border-[#D95F2A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#1A1008] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Your number"
                    className="w-full bg-[#F2E3CC] border border-[#D4B896] rounded-xl px-4 py-3 text-sm text-[#1A1008] placeholder-[#B8A07E] focus:outline-none focus:border-[#D95F2A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1A1008] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#F2E3CC] border border-[#D4B896] rounded-xl px-4 py-3 text-sm text-[#1A1008] placeholder-[#B8A07E] focus:outline-none focus:border-[#D95F2A] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#1A1008] mb-2">
                    Pickup or Delivery?
                  </label>
                  <select className="w-full bg-[#F2E3CC] border border-[#D4B896] rounded-xl px-4 py-3 text-sm text-[#1A1008] focus:outline-none focus:border-[#D95F2A] transition-colors appearance-none">
                    <option value="">Select one</option>
                    <option>Pickup</option>
                    <option>Delivery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#1A1008] mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-[#F2E3CC] border border-[#D4B896] rounded-xl px-4 py-3 text-sm text-[#1A1008] focus:outline-none focus:border-[#D95F2A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1A1008] mb-2">
                  City *
                </label>
                <select className="w-full bg-[#F2E3CC] border border-[#D4B896] rounded-xl px-4 py-3 text-sm text-[#1A1008] focus:outline-none focus:border-[#D95F2A] transition-colors appearance-none">
                  <option value="">Where are you?</option>
                  <option>Dallas / Fort Worth, TX</option>
                  <option>Houston, TX</option>
                  <option>Other (Texas)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1A1008] mb-2">
                  What would you like to order? *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="e.g. Full tray of jollof rice + half tray of fried rice. Any dietary needs or special requests..."
                  className="w-full bg-[#F2E3CC] border border-[#D4B896] rounded-xl px-4 py-3 text-sm text-[#1A1008] placeholder-[#B8A07E] focus:outline-none focus:border-[#D95F2A] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#D95F2A] text-white text-sm font-medium hover:bg-[#C04E1C] transition-colors"
              >
                Send Order Request
              </button>
              <p className="text-xs text-[#7A6855] text-center">
                I&apos;ll confirm your order within a few hours. Remember — 24–48 hrs notice needed.
              </p>
            </form>
          </div>
        </ScrollReveal>

        {/* Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          <ScrollReveal delay={100}>
            <div className="bg-[#E8D0B0] rounded-3xl border border-[#D4B896] p-7">
              <h3
                className="text-xl font-medium text-[#1A1008] mb-5"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Or reach out directly
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:lumii.cooks@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-[#F5E8D2] border border-[#D4B896] flex items-center justify-center group-hover:border-[#D95F2A] transition-colors">
                    <Mail size={14} className="text-[#D95F2A]" />
                  </div>
                  <span className="text-sm text-[#7A6855] group-hover:text-[#1A1008] transition-colors">
                    lumii.cooks@gmail.com
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F5E8D2] border border-[#D4B896] flex items-center justify-center">
                    <MapPin size={14} className="text-[#D95F2A]" />
                  </div>
                  <span className="text-sm text-[#7A6855]">Dallas–Fort Worth & Houston, TX</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F5E8D2] border border-[#D4B896] flex items-center justify-center">
                    <Clock size={14} className="text-[#D95F2A]" />
                  </div>
                  <span className="text-sm text-[#7A6855]">24–48 hrs notice required</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-[#1A1008] rounded-3xl p-7">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#D95F2A] mb-3">
                Prefer to DM?
              </p>
              <p className="text-sm text-[#7A6855] mb-5 leading-relaxed">
                Send me a message on Instagram or TikTok and I&apos;ll get back to you quickly.
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/lumii.cooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#2D2010] rounded-xl px-4 py-3 text-[#D4B896] hover:bg-[#3A2B15] transition-colors"
                >
                  <InstagramIcon size={16} />
                  <span className="text-sm">@lumii.cooks on Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@lumii.cooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#2D2010] rounded-xl px-4 py-3 text-[#D4B896] hover:bg-[#3A2B15] transition-colors"
                >
                  <TikTokIcon size={16} />
                  <span className="text-sm">@lumii.cooks on TikTok</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-[#E8D0B0] rounded-3xl border border-[#D4B896] p-7">
              <p className="text-sm font-medium text-[#1A1008] mb-1">Quick reminder</p>
              <p className="text-sm text-[#7A6855] leading-relaxed">
                All food is made fresh to order. Place your order at least{" "}
                <strong className="text-[#D95F2A]">24–48 hours in advance</strong> to guarantee availability.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

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
          className="text-5xl md:text-6xl font-light text-[#F0E0C0]"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Place Your Order
        </h1>
      </section>

      {/* ── Main ── */}
      <section className="max-w-6xl mx-auto px-5 pb-24 grid grid-cols-1 lg:grid-cols-5 gap-14">
        {/* Form */}
        <ScrollReveal className="lg:col-span-3">
          <div className="bg-[#3A2410] rounded-3xl border border-[#4E3018] p-8 md:p-10">
            <h2
              className="text-2xl font-medium text-[#F0E0C0] mb-1"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Order Form
            </h2>
            <p className="text-sm text-[#B09070] mb-8">
              Fill this out and I&apos;ll get back to you within a few hours to confirm.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#F0E0C0] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First and last name"
                    className="w-full bg-[#1E1005] border border-[#4E3018] rounded-xl px-4 py-3 text-sm text-[#F0E0C0] placeholder-[#B8A07E] focus:outline-none focus:border-[#D95F2A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#F0E0C0] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Your number"
                    className="w-full bg-[#1E1005] border border-[#4E3018] rounded-xl px-4 py-3 text-sm text-[#F0E0C0] placeholder-[#B8A07E] focus:outline-none focus:border-[#D95F2A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#F0E0C0] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#1E1005] border border-[#4E3018] rounded-xl px-4 py-3 text-sm text-[#F0E0C0] placeholder-[#B8A07E] focus:outline-none focus:border-[#D95F2A] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#F0E0C0] mb-2">
                    Pickup or Delivery?
                  </label>
                  <select className="w-full bg-[#1E1005] border border-[#4E3018] rounded-xl px-4 py-3 text-sm text-[#F0E0C0] focus:outline-none focus:border-[#D95F2A] transition-colors appearance-none">
                    <option value="">Select one</option>
                    <option>Pickup</option>
                    <option>Delivery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#F0E0C0] mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-[#1E1005] border border-[#4E3018] rounded-xl px-4 py-3 text-sm text-[#F0E0C0] focus:outline-none focus:border-[#D95F2A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#F0E0C0] mb-2">
                  City *
                </label>
                <select className="w-full bg-[#1E1005] border border-[#4E3018] rounded-xl px-4 py-3 text-sm text-[#F0E0C0] focus:outline-none focus:border-[#D95F2A] transition-colors appearance-none">
                  <option value="">Where are you?</option>
                  <option>Dallas / Fort Worth, TX</option>
                  <option>Houston, TX</option>
                  <option>Other (Texas)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#F0E0C0] mb-2">
                  What would you like to order? *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="e.g. Full tray of jollof rice + half tray of fried rice. Any dietary needs or special requests..."
                  className="w-full bg-[#1E1005] border border-[#4E3018] rounded-xl px-4 py-3 text-sm text-[#F0E0C0] placeholder-[#B8A07E] focus:outline-none focus:border-[#D95F2A] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#D95F2A] text-white text-sm font-medium hover:bg-[#C04E1C] transition-colors"
              >
                Send Order Request
              </button>
              <p className="text-xs text-[#B09070] text-center">
                I&apos;ll confirm your order within a few hours. Remember — 24–48 hrs notice needed.
              </p>
              <p className="text-xs text-[#B09070] text-center">
                Payment details (Cash App / Zelle) will be sent once your order is confirmed.
              </p>
            </form>
          </div>
        </ScrollReveal>

        {/* Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          <ScrollReveal delay={100}>
            <div className="bg-[#2A1808] rounded-3xl border border-[#4E3018] p-7">
              <h3
                className="text-xl font-medium text-[#F0E0C0] mb-5"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Or reach out directly
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:lumii.cooks@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-[#3A2410] border border-[#4E3018] flex items-center justify-center group-hover:border-[#D95F2A] transition-colors">
                    <Mail size={14} className="text-[#D95F2A]" />
                  </div>
                  <span className="text-sm text-[#B09070] group-hover:text-[#F0E0C0] transition-colors">
                    lumii.cooks@gmail.com
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#3A2410] border border-[#4E3018] flex items-center justify-center">
                    <MapPin size={14} className="text-[#D95F2A]" />
                  </div>
                  <span className="text-sm text-[#B09070]">Dallas–Fort Worth & Houston, TX</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#3A2410] border border-[#4E3018] flex items-center justify-center">
                    <Clock size={14} className="text-[#D95F2A]" />
                  </div>
                  <span className="text-sm text-[#B09070]">24–48 hrs notice required</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-[#1A1008] rounded-3xl p-7">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#D95F2A] mb-3">
                Prefer to DM?
              </p>
              <p className="text-sm text-[#B09070] mb-5 leading-relaxed">
                Send me a message on Instagram or TikTok and I&apos;ll get back to you quickly.
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/lumii.cooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#2D2010] rounded-xl px-4 py-3 text-[#B09070] hover:bg-[#3A2B15] hover:text-[#F0E0C0] transition-colors"
                >
                  <InstagramIcon size={16} />
                  <span className="text-sm">@lumii.cooks on Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@lumii.cooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#2D2010] rounded-xl px-4 py-3 text-[#B09070] hover:bg-[#3A2B15] hover:text-[#F0E0C0] transition-colors"
                >
                  <TikTokIcon size={16} />
                  <span className="text-sm">@lumii.cooks on TikTok</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-[#2A1808] rounded-3xl border border-[#4E3018] p-7">
              <p className="text-sm font-medium text-[#F0E0C0] mb-1">Quick reminder</p>
              <p className="text-sm text-[#B09070] leading-relaxed">
                All food is made fresh to order. Place your order at least{" "}
                <strong className="text-[#D95F2A]">24–48 hours in advance</strong> to guarantee availability.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="bg-[#3A2410] rounded-3xl border border-[#4E3018] p-7">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#D95F2A] mb-1">
                How to Pay
              </p>
              <p className="text-sm text-[#B09070] mb-5 leading-relaxed">
                Payment is sent after your order is confirmed — not upfront.
              </p>

              <div className="space-y-3">
                {/* Cash App */}
                <div className="flex items-center gap-3 bg-[#2D2010] rounded-xl px-4 py-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#00D632" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M15.42 13.1c-.19.55-.72.9-1.3.9H9.88c-.58 0-1.11-.35-1.3-.9l-.38-1.1H5.5l.9 2.6c.38 1.1 1.43 1.8 2.6 1.8h6c1.17 0 2.22-.7 2.6-1.8l.9-2.6h-2.7l-.38 1.1zM20 8.5h-2.34l-.9-2.6C16.38 4.8 15.33 4.1 14.16 4.1h-4.32c-1.17 0-2.22.7-2.6 1.8L6.34 8.5H4a2 2 0 0 0-2 2v3h20v-3a2 2 0 0 0-2-2zm-5.84-1.4c.19-.55.72-.9 1.3-.9H10.54c-.58 0-1.11.35-1.3.9L8.86 8.5h6.68l-.38-1.4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#B09070] mb-0.5">Cash App</p>
                    <p className="text-sm font-medium text-[#F0E0C0]">$YourCashtag</p>
                  </div>
                </div>

                {/* Zelle */}
                <div className="flex items-center gap-3 bg-[#2D2010] rounded-xl px-4 py-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#6D1ED4" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M4 5h10.5L4 16.5V19h16v-2H9.5L20 5.5V3H4v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#B09070] mb-0.5">Zelle</p>
                    <p className="text-sm font-medium text-[#F0E0C0]">(XXX) XXX-XXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

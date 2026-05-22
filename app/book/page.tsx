import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Chef Lù | Nigerian Cuisine — Dallas & Houston",
  description:
    "Book Chef Lù for your next event or order food trays for personal use. Serving Dallas and Houston, Texas.",
};

export default function BookPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-72 md:h-80 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80"
          alt="Catering setup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0B0806]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-2">
            Ready to Book?
          </p>
          <h1
            className="text-5xl md:text-6xl font-light text-[#F5EFE0]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Book & Contact
          </h1>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-5 gap-16">
        {/* Form — takes 3 cols */}
        <div className="lg:col-span-3">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-4">
            Send an Enquiry
          </p>
          <h2
            className="text-4xl font-light text-[#F5EFE0] mb-2"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Let&apos;s Plan Your Event
          </h2>
          <p className="text-sm text-[#9A8A72] leading-relaxed mb-10">
            Fill out the form below and Chef Lù will get back to you within 24
            hours to discuss your event or order.
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#9A8A72] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full bg-transparent border border-[#2D2218] px-4 py-3 text-sm text-[#F5EFE0] placeholder-[#4A3D2F] focus:outline-none focus:border-[#C8902A] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#9A8A72] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Your phone number"
                  className="w-full bg-transparent border border-[#2D2218] px-4 py-3 text-sm text-[#F5EFE0] placeholder-[#4A3D2F] focus:outline-none focus:border-[#C8902A] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[9px] tracking-[0.2em] uppercase text-[#9A8A72] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent border border-[#2D2218] px-4 py-3 text-sm text-[#F5EFE0] placeholder-[#4A3D2F] focus:outline-none focus:border-[#C8902A] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#9A8A72] mb-2">
                  Service Needed
                </label>
                <select className="w-full bg-[#0B0806] border border-[#2D2218] px-4 py-3 text-sm text-[#9A8A72] focus:outline-none focus:border-[#C8902A] transition-colors appearance-none">
                  <option value="">Select a service</option>
                  <option>Event Catering</option>
                  <option>Personal Chef</option>
                  <option>Food Tray Order</option>
                  <option>Corporate Event</option>
                  <option>Private Party</option>
                  <option>Weekly Meal Prep</option>
                </select>
              </div>
              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#9A8A72] mb-2">
                  Event / Order Date
                </label>
                <input
                  type="date"
                  className="w-full bg-[#0B0806] border border-[#2D2218] px-4 py-3 text-sm text-[#9A8A72] focus:outline-none focus:border-[#C8902A] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#9A8A72] mb-2">
                  Approximate Guest Count
                </label>
                <input
                  type="text"
                  placeholder="e.g. 50 guests"
                  className="w-full bg-transparent border border-[#2D2218] px-4 py-3 text-sm text-[#F5EFE0] placeholder-[#4A3D2F] focus:outline-none focus:border-[#C8902A] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#9A8A72] mb-2">
                  City
                </label>
                <select className="w-full bg-[#0B0806] border border-[#2D2218] px-4 py-3 text-sm text-[#9A8A72] focus:outline-none focus:border-[#C8902A] transition-colors appearance-none">
                  <option value="">Select city</option>
                  <option>Dallas, TX</option>
                  <option>Houston, TX</option>
                  <option>Other (Texas)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[9px] tracking-[0.2em] uppercase text-[#9A8A72] mb-2">
                Event Details / Additional Notes
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your event, dietary restrictions, specific dishes you'd like, or anything else we should know..."
                className="w-full bg-transparent border border-[#2D2218] px-4 py-3 text-sm text-[#F5EFE0] placeholder-[#4A3D2F] focus:outline-none focus:border-[#C8902A] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#C8902A] text-[#0B0806] text-xs tracking-widest uppercase font-semibold hover:bg-[#E8B84B] transition-colors"
            >
              Send Booking Request
            </button>
            <p className="text-[10px] text-[#9A8A72] text-center">
              We typically respond within 24 hours. For urgent inquiries, call or text directly.
            </p>
          </form>
        </div>

        {/* Contact info — 2 cols */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-4">
              Contact
            </p>
            <h2
              className="text-3xl font-light text-[#F5EFE0] mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Reach Out Directly
            </h2>
            <div className="space-y-5">
              <a
                href="tel:+1"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-[#2D2218] flex items-center justify-center group-hover:border-[#C8902A] transition-colors">
                  <Phone size={15} className="text-[#C8902A]" />
                </div>
                <div>
                  <p className="text-[9px] tracking-widest uppercase text-[#9A8A72] mb-0.5">Phone / Text</p>
                  <p className="text-sm text-[#F5EFE0]">Contact for number</p>
                </div>
              </a>
              <a
                href="mailto:lumii.cooks@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-[#2D2218] flex items-center justify-center group-hover:border-[#C8902A] transition-colors">
                  <Mail size={15} className="text-[#C8902A]" />
                </div>
                <div>
                  <p className="text-[9px] tracking-widest uppercase text-[#9A8A72] mb-0.5">Email</p>
                  <p className="text-sm text-[#F5EFE0]">lumii.cooks@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#2D2218] flex items-center justify-center">
                  <MapPin size={15} className="text-[#C8902A]" />
                </div>
                <div>
                  <p className="text-[9px] tracking-widest uppercase text-[#9A8A72] mb-0.5">Service Areas</p>
                  <p className="text-sm text-[#F5EFE0]">Dallas & Houston, Texas</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#2D2218] flex items-center justify-center">
                  <Clock size={15} className="text-[#C8902A]" />
                </div>
                <div>
                  <p className="text-[9px] tracking-widest uppercase text-[#9A8A72] mb-0.5">Hours</p>
                  <p className="text-sm text-[#F5EFE0]">Mon – Sun, 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="border-t border-[#2D2218] pt-8">
            <p className="text-[9px] tracking-widest uppercase text-[#9A8A72] mb-4">
              Follow Chef Lù
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/lumii.cooks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 border border-[#2D2218] hover:border-[#C8902A] text-[#9A8A72] hover:text-[#C8902A] transition-colors"
              >
                <InstagramIcon size={15} />
                <span className="text-xs">@lumii.cooks</span>
              </a>
              <a
                href="https://www.tiktok.com/@lumii.cooks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 border border-[#2D2218] hover:border-[#C8902A] text-[#9A8A72] hover:text-[#C8902A] transition-colors"
              >
                <TikTokIcon size={15} />
                <span className="text-xs">@lumii.cooks</span>
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="border-t border-[#2D2218] pt-8 space-y-6">
            <p className="text-[9px] tracking-widest uppercase text-[#9A8A72]">
              Quick Answers
            </p>
            {[
              {
                q: "How soon will I hear back?",
                a: "Within 24 hours, usually much sooner.",
              },
              {
                q: "What info should I have ready?",
                a: "Event type, date, location, and approximate guest count.",
              },
              {
                q: "Is there a minimum order?",
                a: "Reach out and we'll find a solution that fits your needs and budget.",
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <p
                  className="text-sm font-medium text-[#F5EFE0] mb-1"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {q}
                </p>
                <p className="text-xs text-[#9A8A72] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

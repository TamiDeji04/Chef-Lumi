import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Chef Lù | Authentic Nigerian Cuisine — Dallas & Houston",
  description:
    "Meet Chef Lù — the Nigerian culinary artist behind bold, authentic flavors served across Dallas and Houston, Texas.",
};

const values = [
  {
    title: "Authenticity",
    desc: "Every recipe is rooted in Nigerian tradition — unchanged, uncompromised, and full of heritage.",
  },
  {
    title: "Quality",
    desc: "Only the freshest ingredients make it into the pot. Every order is quality-controlled from prep to plating.",
  },
  {
    title: "Presentation",
    desc: "Clean, classy, and camera-ready. Food that tastes incredible and looks even better.",
  },
  {
    title: "Hospitality",
    desc: "Professional, warm, and punctual. Chef Lù makes every client feel like the only one.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&q=80"
          alt="Chef Lù cooking"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-[#0B0806]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-2">
            Our Story
          </p>
          <h1
            className="text-5xl md:text-6xl font-light text-[#F5EFE0]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            About Chef Lù
          </h1>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-4">
            The Chef
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#F5EFE0] leading-tight mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Where Taste <br />
            <em className="text-[#C8902A]">Meets Style</em>
          </h2>
          <p className="text-[#9A8A72] leading-relaxed mb-5">
            Chef Lù is a Nigerian culinary artist based in Texas, passionate
            about sharing the bold, vibrant flavors of Nigerian cuisine with
            the world. Growing up surrounded by the aromas of the kitchen,
            cooking became more than a skill — it became a language of love
            and culture.
          </p>
          <p className="text-[#9A8A72] leading-relaxed mb-5">
            After years of perfecting classic Nigerian recipes and elevating
            them with a refined, modern touch, Chef Lù launched a full catering
            and personal chef service to bring that same warmth to every
            client&apos;s table across Dallas and Houston.
          </p>
          <p className="text-[#9A8A72] leading-relaxed mb-8">
            From jollof rice that makes your guests fight for the last serving,
            to elegantly presented canapé spreads that set the tone for the
            entire event — every dish is a reflection of dedication, craft, and
            a genuine love for feeding people well.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C8902A] text-[#0B0806] text-xs tracking-widest uppercase font-semibold hover:bg-[#E8B84B] transition-colors"
          >
            Book Chef Lù <ArrowRight size={14} />
          </Link>
        </div>

        <div className="relative">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
              alt="Nigerian food spread"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -top-5 -left-5 w-28 h-28 border border-[#C8902A] opacity-30" />
          <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-[#C8902A] opacity-30" />
        </div>
      </section>

      {/* ── Our Promise ── */}
      <section className="bg-[#130E09] border-y border-[#2D2218] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-3">
              What We Stand For
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#F5EFE0]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Our Promise to You
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="border border-[#2D2218] p-7">
                <div className="w-8 h-px bg-[#C8902A] mb-5" />
                <h3
                  className="text-xl font-medium text-[#F5EFE0] mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-[#9A8A72] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location / Availability ── */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=900&q=80"
            alt="Catering event setup"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-4">
            Location & Availability
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#F5EFE0] leading-tight mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Serving All of Texas
          </h2>
          <p className="text-[#9A8A72] leading-relaxed mb-4">
            Chef Lù is based in Texas and serves the greater Dallas and Houston
            metropolitan areas. Whether your event is in Uptown Dallas, The
            Woodlands, Sugar Land, or Frisco — Chef Lù travels to bring the
            feast to you.
          </p>
          <p className="text-[#9A8A72] leading-relaxed mb-8">
            For retail food tray orders, 24–48 hours notice is required. For
            event catering, reach out as early as possible to secure your date
            and receive a personalised menu consultation.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: "Primary Cities", value: "Dallas & Houston" },
              { label: "Travel", value: "All of Texas" },
              { label: "Booking Hours", value: "Mon–Sun, 9AM–6PM" },
              { label: "Tray Lead Time", value: "24–48 Hours" },
            ].map(({ label, value }) => (
              <div key={label} className="border-l-2 border-[#C8902A] pl-4">
                <p className="text-[10px] tracking-widest uppercase text-[#9A8A72] mb-1">{label}</p>
                <p className="text-sm text-[#F5EFE0]">{value}</p>
              </div>
            ))}
          </div>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 text-sm text-[#C8902A] tracking-widest uppercase hover:gap-4 transition-all"
          >
            Book a Consultation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}

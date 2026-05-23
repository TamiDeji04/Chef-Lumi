import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Chef Lù | Nigerian Food — Dallas & Houston",
  description:
    "Meet Chef Lù — the person behind the food. Authentic Nigerian cuisine made fresh in Texas.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
          alt="Nigerian food"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1E1005]/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 pb-12 w-full">
          <h1
            className="text-5xl md:text-6xl font-light text-[#F0E0C0]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            About Me
          </h1>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="max-w-6xl mx-auto px-5 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <ScrollReveal>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
              alt="Chef Lù in the kitchen"
              fill
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#D95F2A] mb-3">
            Hi, I&apos;m Chef Lù
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#F0E0C0] leading-tight mb-5"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            I cook Nigerian food because I love it — and I want you to love it too.
          </h2>
          <p className="text-[#B09070] leading-relaxed mb-4">
            I&apos;m a solo cook based in Texas, making authentic Nigerian food
            from scratch. No restaurant, no big team — just me, good ingredients,
            and recipes that have been passed down and perfected over time.
          </p>
          <p className="text-[#B09070] leading-relaxed mb-4">
            I started taking orders because friends and family kept asking for
            trays every weekend, and it grew from there. Now I cook for people
            all over Dallas–Fort Worth and Houston who are craving real Nigerian
            food — whether they grew up with it or are trying it for the first time.
          </p>
          <p className="text-[#B09070] leading-relaxed mb-8">
            Every order is made fresh to order. No pre-cooked shortcuts. You
            place the order, I cook it, and you pick it up or I get it to you.
            Simple as that.
          </p>
          <Link
            href="/order"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#D95F2A] text-white text-sm font-medium hover:bg-[#C04E1C] transition-colors"
          >
            Place an Order <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </section>

      {/* ── Values ── */}
      <section className="bg-[#2A1808] py-20">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-light text-[#F0E0C0] mb-12 text-center"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              What I care about
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Freshness",
                desc: "Every order is made fresh. I don't batch cook days in advance or reheat. You get food made for you.",
              },
              {
                title: "Authenticity",
                desc: "The recipes are real — no shortcuts, no substitutes. If it's not how it's supposed to taste, it doesn't leave my kitchen.",
              },
              {
                title: "Convenience",
                desc: "Pickup or delivery, order online or DM me. I make it as easy as possible to get good Nigerian food.",
              },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="bg-[#3A2410] rounded-2xl p-7 border border-[#4E3018]">
                  <div className="w-8 h-1 bg-[#D95F2A] rounded-full mb-5" />
                  <h3
                    className="text-xl font-medium text-[#F0E0C0] mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#B09070] leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location ── */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <ScrollReveal>
          <div className="bg-[#1A1008] rounded-3xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#D95F2A] mb-3">
                Where I serve
              </p>
              <h2
                className="text-3xl md:text-4xl font-light text-white mb-5"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Dallas–Fort Worth & Houston, Texas
              </h2>
              <p className="text-[#B09070] leading-relaxed mb-6">
                I&apos;m based in Texas and serve both the DFW area and Houston.
                Pickup is available from my location, and I can arrange delivery
                within my service areas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Order Notice", value: "24–48 hours" },
                  { label: "Pickup", value: "Available" },
                  { label: "Delivery", value: "Available" },
                  { label: "Hours", value: "Mon–Sun" },
                ].map(({ label, value }) => (
                  <div key={label} className="border-l-2 border-[#D95F2A] pl-3">
                    <p className="text-[9px] tracking-widest uppercase text-[#B09070] mb-0.5">{label}</p>
                    <p className="text-sm text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=900&q=80"
                alt="Food ready for delivery"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

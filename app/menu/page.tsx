import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Menu | Chef Lù Nigerian Food — Dallas & Houston",
  description:
    "Chef Lù's full menu — jollof rice, fried rice, Nigerian stew, plantain, moi moi and more. Order full or half trays.",
};

const dishes = [
  {
    name: "Party Jollof Rice",
    desc: "The classic — smoky, rich, and seasoned just right. Cooked the proper way over fire.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
    tag: "Signature",
  },
  {
    name: "Nigerian Fried Rice",
    desc: "Vibrant, fragrant fried rice packed with vegetables and liver. Colourful and delicious.",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80",
    tag: "Classic",
  },
  {
    name: "Assorted Stew",
    desc: "A rich, slow-cooked tomato stew with assorted proteins — beef, chicken, goat.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80",
    tag: "Fan Fave",
  },
  {
    name: "Egusi Soup",
    desc: "Traditional melon seed soup with leafy greens, crayfish, palm oil, and assorted meat.",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
    tag: "Traditional",
  },
  {
    name: "Sweet Plantain (Dodo)",
    desc: "Golden, caramelised fried plantain. The perfect side to literally everything.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80",
    tag: "Side",
  },
  {
    name: "Moi Moi",
    desc: "Steamed bean pudding with peppers, onions, and protein. Silky, savoury, satisfying.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=500&q=80",
    tag: "Side",
  },
];

const faqs = [
  {
    q: "How do I order?",
    a: "Fill out the order form on the Order page, or DM @lumii.cooks on Instagram or TikTok. Simple.",
  },
  {
    q: "How much notice do you need?",
    a: "24–48 hours for all orders so everything is freshly made for you.",
  },
  {
    q: "What's the difference between a full tray and half tray?",
    a: "A full tray feeds a larger group (great for gatherings). A half tray is perfect for a family or a few people.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on what you order and the quantity. Reach out and I'll give you a quick quote.",
  },
  {
    q: "Do you deliver?",
    a: "Yes — delivery is available in the DFW and Houston areas. Pickup is also available.",
  },
];

export default function MenuPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&q=80"
          alt="Jollof rice"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1E1005]/65" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 pb-12 w-full">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#D95F2A] mb-2">
            What&apos;s Cooking
          </p>
          <h1
            className="text-5xl md:text-6xl font-light text-[#F0E0C0]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            The Menu
          </h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <ScrollReveal>
        <div className="max-w-2xl mx-auto px-5 py-12 text-center">
          <p className="text-[#B09070] leading-relaxed">
            Everything is available as a <strong className="text-[#F0E0C0]">full tray</strong> or{" "}
            <strong className="text-[#F0E0C0]">half tray</strong>. All orders are freshly made —
            give 24–48 hours notice and I&apos;ll have it ready for you.{" "}
            <Link href="/order" className="text-[#D95F2A] hover:underline font-medium">
              Place your order here.
            </Link>
          </p>
        </div>
      </ScrollReveal>

      {/* ── Dishes ── */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((d, i) => (
            <ScrollReveal key={d.name} delay={i * 80}>
              <div className="group rounded-2xl overflow-hidden border border-[#4E3018] bg-[#3A2410] hover:border-[#D95F2A]/40 transition-colors">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#D95F2A] text-white text-[9px] font-medium tracking-wider uppercase px-2 py-1 rounded-full">
                    {d.tag}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3
                      className="text-xl font-medium text-[#F0E0C0]"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {d.name}
                    </h3>
                    <div className="flex gap-1.5 flex-shrink-0 pt-1">
                      <span className="text-[9px] tracking-wider border border-[#4E3018] text-[#B09070] px-2 py-0.5 rounded-full uppercase">
                        Half
                      </span>
                      <span className="text-[9px] tracking-wider border border-[#4E3018] text-[#B09070] px-2 py-0.5 rounded-full uppercase">
                        Full
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#B09070] leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <Link
              href="/order"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#D95F2A] text-white text-sm font-medium hover:bg-[#C04E1C] transition-colors"
            >
              Order a Tray <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#2A1808] py-20">
        <div className="max-w-2xl mx-auto px-5">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-light text-[#F0E0C0] mb-10 text-center"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Good to Know
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 80}>
                <div className="bg-[#3A2410] rounded-2xl p-6 border border-[#4E3018]">
                  <h4
                    className="text-lg font-medium text-[#F0E0C0] mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {faq.q}
                  </h4>
                  <p className="text-sm text-[#B09070] leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

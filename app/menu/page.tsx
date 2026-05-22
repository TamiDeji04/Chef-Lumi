import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu & Packages | Chef Lù Nigerian Cuisine",
  description:
    "Browse Chef Lù's menu of authentic Nigerian dishes — jollof rice, egusi, canapés, and more. Full and half trays available for pickup or delivery in Dallas & Houston.",
};

const mainDishes = [
  {
    name: "Party Jollof Rice",
    desc: "Smoky, richly seasoned Nigerian party jollof cooked over an open flame. The star of every occasion.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
    sizes: ["Half Tray", "Full Tray"],
  },
  {
    name: "Nigerian Fried Rice",
    desc: "Vibrant, fragrant fried rice packed with vegetables, liver, and seasoned to perfection.",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80",
    sizes: ["Half Tray", "Full Tray"],
  },
  {
    name: "Assorted Buka Stew",
    desc: "A rich, slow-cooked tomato stew with assorted proteins — beef, goat, chicken, and tripe.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80",
    sizes: ["Half Tray", "Full Tray"],
  },
  {
    name: "Egusi Soup",
    desc: "Traditional melon seed soup cooked with leafy greens, crayfish, palm oil, and assorted meat.",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
    sizes: ["Half Tray", "Full Tray"],
  },
  {
    name: "Fried Sweet Plantain",
    desc: "Golden, caramelised dodo — the perfect side to every Nigerian dish.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80",
    sizes: ["Half Tray", "Full Tray"],
  },
  {
    name: "Moi Moi",
    desc: "Steamed bean pudding with peppers, onions, and your choice of protein — silky, savoury, and satisfying.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=500&q=80",
    sizes: ["Half Tray", "Full Tray"],
  },
];

const eventItems = [
  {
    name: "Canapés & Small Bites",
    desc: "Elevated finger food — Nigerian-inspired hors d'oeuvres circulated by wait staff during cocktail hour.",
  },
  {
    name: "Puff Puff",
    desc: "Soft, pillowy Nigerian fried dough — a crowd-pleasing classic, served warm.",
  },
  {
    name: "Suya Skewers",
    desc: "Spiced, grilled meat skewers marinated in traditional suya spice blend.",
  },
  {
    name: "Charcuterie Cups",
    desc: "Individual charcuterie servings — a beautiful mix of cured meats, cheeses, and accompaniments.",
  },
  {
    name: "Meat Pies",
    desc: "Flaky, golden pastry stuffed with seasoned minced beef, carrots, and potatoes.",
  },
  {
    name: "Nigerian Spring Rolls",
    desc: "Crispy fried rolls with a savoury Nigerian-spiced filling, served with a dipping sauce.",
  },
];

const packages = [
  {
    name: "Tray Order",
    tag: "Personal & Family",
    price: "Starting from market price",
    features: [
      "Full or half tray options",
      "Choose from full menu",
      "24–48 hr notice required",
      "Pickup or delivery available",
      "Perfect for personal meals & small gatherings",
    ],
    cta: "Order a Tray",
  },
  {
    name: "Event Package",
    tag: "Most Popular",
    price: "Custom quote",
    features: [
      "Personalized menu consultation",
      "Full buffet service setup",
      "Wait staff included",
      "Canapé & cocktail hour options",
      "Weddings, birthdays, corporate & more",
    ],
    cta: "Book Your Event",
    highlight: true,
  },
  {
    name: "Personal Chef",
    tag: "In-Home Dining",
    price: "Custom quote",
    features: [
      "Private in-home dining experience",
      "Custom menu built around you",
      "Chef cooks in your kitchen",
      "Clean-up included",
      "Perfect for date nights & family occasions",
    ],
    cta: "Book a Session",
  },
];

export default function MenuPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
          alt="Nigerian food spread"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0B0806]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-2">
            What We Serve
          </p>
          <h1
            className="text-5xl md:text-6xl font-light text-[#F5EFE0]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Menu & Packages
          </h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-[#9A8A72] leading-relaxed">
          Chef Lù&apos;s menu is rooted in authentic Nigerian flavours, crafted to
          serve your personal table or elevate any event. All dishes are freshly
          prepared on order. For events, a personalised menu is created after a
          consultation — this menu is a guide to what we offer.
        </p>
        <p className="text-[#9A8A72] leading-relaxed mt-4">
          For pricing, please{" "}
          <Link href="/book" className="text-[#C8902A] hover:underline">
            get in touch
          </Link>{" "}
          — pricing varies by menu, tray size, headcount, and location.
        </p>
      </section>

      {/* ── Main dishes ── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px bg-[#C8902A]" />
          <h2
            className="text-3xl font-light text-[#F5EFE0]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Nigerian Mains
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainDishes.map((d) => (
            <div key={d.name} className="group border border-[#2D2218] hover:border-[#C8902A]/40 transition-colors">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3
                  className="text-xl font-medium text-[#F5EFE0] mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {d.name}
                </h3>
                <p className="text-sm text-[#9A8A72] leading-relaxed mb-4">{d.desc}</p>
                <div className="flex gap-2">
                  {d.sizes.map((s) => (
                    <span
                      key={s}
                      className="text-[9px] tracking-widest uppercase border border-[#2D2218] text-[#9A8A72] px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Event items ── */}
      <section className="bg-[#130E09] border-y border-[#2D2218] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-[#C8902A]" />
            <h2
              className="text-3xl font-light text-[#F5EFE0]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Event Bites & Canapés
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventItems.map((item) => (
              <div key={item.name} className="p-6 border border-[#2D2218]">
                <div className="w-6 h-px bg-[#C8902A] mb-4" />
                <h3
                  className="text-lg font-medium text-[#F5EFE0] mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {item.name}
                </h3>
                <p className="text-sm text-[#9A8A72] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-3">
            How to Order
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#F5EFE0]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Packages
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`p-8 border ${
                p.highlight
                  ? "border-[#C8902A] bg-[#1C1509]"
                  : "border-[#2D2218]"
              } relative`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#C8902A] text-[#0B0806] text-[9px] tracking-widest uppercase px-3 py-1">
                    {p.tag}
                  </span>
                </div>
              )}
              {!p.highlight && (
                <p className="text-[9px] tracking-widest uppercase text-[#9A8A72] mb-4">{p.tag}</p>
              )}
              <h3
                className="text-2xl font-medium text-[#F5EFE0] mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {p.name}
              </h3>
              <p className="text-sm text-[#C8902A] mb-6">{p.price}</p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#9A8A72]">
                    <ArrowRight size={12} className="text-[#C8902A] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className={`block text-center py-3 text-xs tracking-widest uppercase transition-all ${
                  p.highlight
                    ? "bg-[#C8902A] text-[#0B0806] hover:bg-[#E8B84B]"
                    : "border border-[#C8902A] text-[#C8902A] hover:bg-[#C8902A] hover:text-[#0B0806]"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#130E09] border-t border-[#2D2218] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-light text-[#F5EFE0]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                q: "How far in advance should I place a tray order?",
                a: "We ask for 24–48 hours notice for all tray orders to ensure everything is freshly prepared for you.",
              },
              {
                q: "How does event catering work?",
                a: "Fill out the enquiry form with your event details — type, date, location, and headcount. Chef Lù will reach out to schedule a consultation and build a personalised menu.",
              },
              {
                q: "Do you deliver?",
                a: "Yes, delivery is available for a fee. Pickup is also available. For events, Chef Lù and the team come directly to your venue.",
              },
              {
                q: "Can you accommodate dietary restrictions?",
                a: "Absolutely. During the consultation, any dietary needs, allergies, or preferences are noted and incorporated into the menu.",
              },
              {
                q: "What areas do you serve?",
                a: "We primarily serve Dallas and Houston, Texas. We are available to travel to other areas of Texas for events.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-[#2D2218] pb-8">
                <h4
                  className="text-lg font-medium text-[#F5EFE0] mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {q}
                </h4>
                <p className="text-sm text-[#9A8A72] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

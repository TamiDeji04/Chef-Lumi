import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Truck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const dishes = [
  {
    name: "Party Jollof Rice",
    desc: "Smoky, perfectly seasoned party jollof — the one your guests will be talking about.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
    tag: "Signature",
  },
  {
    name: "Assorted Stew",
    desc: "Rich, slow-cooked Nigerian stew with assorted proteins. Deep flavour, every time.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80",
    tag: "Fan Fave",
  },
  {
    name: "Fried Rice",
    desc: "Vibrant Nigerian fried rice — colourful, fragrant, and loaded with goodness.",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80",
    tag: "Classic",
  },
  {
    name: "Sweet Plantain",
    desc: "Golden, caramelised dodo — the perfect side. Nobody stops at one piece.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80",
    tag: "Side",
  },
];

const steps = [
  {
    num: "01",
    title: "Pick Your Dishes",
    desc: "Browse the menu and choose what you want — full tray or half tray.",
  },
  {
    num: "02",
    title: "Place Your Order",
    desc: "Fill out the order form or DM @lumii.cooks. Give 24–48 hrs notice.",
  },
  {
    num: "03",
    title: "Pickup or Delivery",
    desc: "Collect from the pickup spot or get it delivered to you in DFW or Houston.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80"
          alt="Nigerian food spread"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#F2E3CC]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2E3CC]/90 via-[#F2E3CC]/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-xl">
            <span className="inline-block bg-[#D95F2A]/10 text-[#D95F2A] text-xs font-medium tracking-wider px-3 py-1 rounded-full mb-5">
              Dallas & Houston, Texas
            </span>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1A1008] leading-[1.1] mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Real Nigerian
              <br />
              food, made
              <br />
              <em className="text-[#D95F2A] font-medium">fresh for you.</em>
            </h1>
            <p className="text-base text-[#7A6855] leading-relaxed mb-8 max-w-sm">
              Jollof rice, fried rice, stew and more — freshly made and ready
              for pickup or delivery. No stress, just good food.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/order"
                className="px-7 py-3 rounded-full bg-[#D95F2A] text-white text-sm font-medium hover:bg-[#C04E1C] transition-colors"
              >
                Order Now
              </Link>
              <Link
                href="/menu"
                className="px-7 py-3 rounded-full border border-[#D4B896] text-[#1A1008] text-sm font-medium hover:border-[#D95F2A] hover:text-[#D95F2A] transition-colors"
              >
                See Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Info strip ── */}
      <section className="bg-[#1A1008] py-4">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#2D2010]">
          {[
            { icon: <Clock size={14} />, text: "24–48 hrs notice for all orders" },
            { icon: <MapPin size={14} />, text: "Dallas–Fort Worth & Houston" },
            { icon: <Truck size={14} />, text: "Pickup & delivery available" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-2.5 py-3 px-4">
              <span className="text-[#D95F2A]">{icon}</span>
              <span className="text-xs text-[#7A6855] tracking-wide">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── About snippet ── */}
      <section className="max-w-6xl mx-auto px-5 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Chef Lù cooking"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#D95F2A] text-white rounded-2xl px-5 py-4 text-center">
              <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>100%</p>
              <p className="text-[10px] tracking-wide uppercase">Homemade</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#D95F2A] mb-3">
            Hi, I&apos;m Chef Lù
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#1A1008] leading-tight mb-5"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Nigerian food the way it&apos;s{" "}
            <em className="text-[#D95F2A]">supposed to taste.</em>
          </h2>
          <p className="text-[#7A6855] leading-relaxed mb-4">
            I&apos;m a solo cook based in Texas who makes authentic Nigerian food
            with genuine ingredients and real love. No shortcuts. No compromise.
            Just the kind of food that takes you right back home.
          </p>
          <p className="text-[#7A6855] leading-relaxed mb-7">
            Whether you&apos;re craving a full tray of jollof for the weekend or
            need something to bring to a dinner — I&apos;ve got you. Place your order
            and I&apos;ll have it ready for pickup or delivery.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-[#D95F2A] font-medium hover:gap-3 transition-all"
          >
            Read my story <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </section>

      {/* ── How it works ── */}
      <section className="bg-[#E8D0B0] py-20">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#D95F2A] mb-3">
                Super Simple
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A1008]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                How to Order
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 120}>
                <div className="bg-[#F5E8D2] rounded-2xl p-8 border border-[#D4B896]">
                  <span
                    className="text-5xl font-light text-[#D4B896] block mb-4 leading-none"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {step.num}
                  </span>
                  <h3
                    className="text-xl font-medium text-[#1A1008] mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#7A6855] leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center mt-10">
              <Link
                href="/order"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#D95F2A] text-white text-sm font-medium hover:bg-[#C04E1C] transition-colors"
              >
                Place an Order <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Menu preview ── */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#D95F2A] mb-3">
                On the Menu
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A1008]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                A Taste of Nigeria
              </h2>
            </div>
            <Link
              href="/menu"
              className="text-sm text-[#D95F2A] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Full menu <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dishes.map((d, i) => (
            <ScrollReveal key={d.name} delay={i * 100}>
              <div className="group rounded-2xl overflow-hidden border border-[#D4B896] bg-white">
                <div className="relative aspect-square overflow-hidden">
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
                <div className="p-4">
                  <h4
                    className="text-lg font-medium text-[#1A1008] mb-1"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {d.name}
                  </h4>
                  <p className="text-xs text-[#7A6855] leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Gallery strip ── */}
      <section className="bg-[#E8D0B0] py-3 overflow-hidden">
        <div className="flex gap-3 px-3">
          {[
            "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&q=80",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
            "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
            "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&q=80",
          ].map((src, i) => (
            <div key={i} className="relative w-48 h-48 flex-shrink-0 rounded-xl overflow-hidden">
              <Image src={src} alt={`Food ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonial ── */}
      <ScrollReveal>
        <section className="max-w-3xl mx-auto px-5 py-20 text-center">
          <div className="flex justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#D95F2A] text-lg">★</span>
            ))}
          </div>
          <blockquote
            className="text-2xl md:text-3xl font-light italic text-[#1A1008] leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            &ldquo;The flavors were so rich and authentic — every bite felt like a
            celebration. Our whole family kept going back for more.&rdquo;
          </blockquote>
          <p className="text-xs tracking-widest uppercase text-[#7A6855]">
            — Customer, Dallas TX
          </p>
        </section>
      </ScrollReveal>

      {/* ── CTA ── */}
      <section className="bg-[#1A1008] py-20">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto px-5 text-center">
            <h2
              className="text-4xl md:text-5xl font-light text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Craving something good?
            </h2>
            <p className="text-[#7A6855] mb-8 leading-relaxed">
              Place your order now — just give 24–48 hours notice and Chef Lù
              will have your food freshly made and ready.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/order"
                className="px-8 py-3 rounded-full bg-[#D95F2A] text-white text-sm font-medium hover:bg-[#C04E1C] transition-colors"
              >
                Order Now
              </Link>
              <Link
                href="/menu"
                className="px-8 py-3 rounded-full border border-[#2D2010] text-[#7A6855] text-sm font-medium hover:border-[#D95F2A] hover:text-[#D95F2A] transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

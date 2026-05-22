import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, UtensilsCrossed, ChefHat, Briefcase, Heart, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Chef Lù Nigerian Cuisine — Dallas & Houston",
  description:
    "Chef Lù offers event catering, personal chef services, food trays, and weekly meals across Dallas and Houston, Texas. Authentic Nigerian cuisine for every occasion.",
};

const services = [
  {
    icon: <UtensilsCrossed size={22} />,
    title: "Event Catering",
    subtitle: "Weddings · Birthdays · Showers · Galas",
    desc: "Full-service luxury catering for events of all sizes. Chef Lù handles everything — from personalised menu planning to professional setup and wait staff on the day. The goal is simple: you focus on celebrating while we handle the feast.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=900&q=80",
    features: [
      "Personalised menu consultation",
      "Full buffet or plated service",
      "Canapé spread & cocktail hour",
      "Professional wait staff",
      "Venue setup and breakdown",
      "All event sizes welcome",
    ],
  },
  {
    icon: <ChefHat size={22} />,
    title: "Personal Chef",
    subtitle: "In-Home · Intimate Dining · Special Occasions",
    desc: "Experience Nigerian cuisine at its most personal. Chef Lù comes to your home, cooks a custom multi-course meal in your kitchen, and leaves it spotless. Perfect for date nights, family celebrations, or anyone who just wants an incredible home-cooked Nigerian meal.",
    img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=80",
    features: [
      "Custom menu built around you",
      "Chef cooks in your kitchen",
      "Multi-course dining experience",
      "Full clean-up included",
      "Perfect for 2–20 guests",
      "Dietary preferences accommodated",
    ],
  },
  {
    icon: <Heart size={22} />,
    title: "Food Trays",
    subtitle: "Personal · Family · Small Gatherings",
    desc: "Can't make it to the event but still want Chef Lù's cooking? Order full or half trays of your favourite Nigerian dishes for personal use, family dinners, or small gatherings. 24–48 hour notice required. Pickup or delivery available.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80",
    features: [
      "Full and half tray options",
      "Full menu available",
      "24–48 hr notice required",
      "Pickup from our location",
      "Delivery available for a fee",
      "Great for weekly meal prep",
    ],
  },
  {
    icon: <Briefcase size={22} />,
    title: "Corporate Events",
    subtitle: "Office Lunches · Team Dinners · Conferences",
    desc: "Impress clients and reward your team with a spread that stands out. Chef Lù brings authentic Nigerian cuisine to your corporate setting — whether it's a working lunch, networking event, or end-of-year celebration.",
    img: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=900&q=80",
    features: [
      "Corporate-friendly menu options",
      "Buffet or individual servings",
      "Professional presentation",
      "On-time delivery guaranteed",
      "Scalable for any headcount",
      "Dallas & Houston service areas",
    ],
  },
  {
    icon: <Users size={22} />,
    title: "Private Parties",
    subtitle: "House Parties · Reunions · Celebrations",
    desc: "Turn your private gathering into a memorable experience. Whether it's a small house party or a large family reunion, Chef Lù brings the full catering experience — setup, service, and cleanup — right to your space.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",
    features: [
      "Flexible setup for any space",
      "Full and half tray options",
      "Canapé and cocktail options",
      "Personalised menu",
      "Suitable for 10–200+ guests",
      "Available weekends & evenings",
    ],
  },
  {
    icon: <Star size={22} />,
    title: "Weekly Meal Prep",
    subtitle: "Personal · Family · Subscription",
    desc: "Never go without authentic Nigerian food again. Set up a recurring weekly tray order and have freshly prepared Nigerian meals ready for you each week. A favourite among clients who love Nigerian food but don't always have time to cook.",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=900&q=80",
    features: [
      "Weekly recurring orders",
      "Rotating menu options",
      "Family-size portions available",
      "24–48 hr notice per order",
      "Pickup or delivery",
      "Custom portions on request",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1920&q=80"
          alt="Event catering setup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0B0806]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-2">
            What We Do
          </p>
          <h1
            className="text-5xl md:text-6xl font-light text-[#F5EFE0]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Our Services
          </h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-[#9A8A72] leading-relaxed">
          From grand wedding receptions to weekday meal trays, Chef Lù brings
          the same dedication, quality, and authentic Nigerian flavour to every
          engagement. Explore what we offer below and reach out whenever you&apos;re
          ready to get started.
        </p>
      </section>

      {/* ── Services list ── */}
      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-20">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0B0806]/30" />
              </div>
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[#C8902A]">{s.icon}</span>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#9A8A72]">
                  {s.subtitle}
                </p>
              </div>
              <h2
                className="text-3xl md:text-4xl font-light text-[#F5EFE0] mb-4"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {s.title}
              </h2>
              <p className="text-sm text-[#9A8A72] leading-relaxed mb-6">{s.desc}</p>
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#9A8A72]">
                    <ArrowRight size={12} className="text-[#C8902A] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#C8902A] text-[#C8902A] text-xs tracking-widest uppercase hover:bg-[#C8902A] hover:text-[#0B0806] transition-all"
              >
                Book This Service <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#130E09] border-t border-[#2D2218] py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-light text-[#F5EFE0] mb-5"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Not Sure Which Service is Right for You?
          </h2>
          <p className="text-[#9A8A72] mb-8 text-sm leading-relaxed">
            Reach out and Chef Lù will help you figure out exactly what you need
            for your event or meal order. No pressure — just a quick conversation.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#C8902A] text-[#0B0806] text-xs tracking-widest uppercase font-semibold hover:bg-[#E8B84B] transition-colors"
          >
            Get in Touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}

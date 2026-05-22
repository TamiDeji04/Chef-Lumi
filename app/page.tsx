import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Clock, Truck } from "lucide-react";

const services = [
  {
    title: "Event Catering",
    desc: "Full-service luxury catering for weddings, birthdays, corporate events, showers, and private parties across Dallas & Houston.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
  },
  {
    title: "Food Trays",
    desc: "Full and half trays of authentic Nigerian dishes — perfect for family gatherings, small events, or weekly personal meals.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
  },
  {
    title: "Personal Chef",
    desc: "Bespoke in-home dining experiences crafted around your preferences. Let Chef Lù cook for you in the comfort of your home.",
    img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80",
  },
];

const dishes = [
  {
    name: "Party Jollof Rice",
    desc: "Smoky, rich, and perfectly seasoned party jollof — the soul of every Nigerian celebration.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
    tag: "Signature",
  },
  {
    name: "Assorted Stew",
    desc: "Slow-cooked Nigerian buka stew with assorted proteins, deep in flavour and tradition.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80",
    tag: "Fan Favourite",
  },
  {
    name: "Canapés & Bites",
    desc: "Elevated cocktail-hour small bites — puff puff, mini suya skewers, and curated hors d'oeuvres.",
    img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=500&q=80",
    tag: "Events",
  },
  {
    name: "Fried Rice & Plantain",
    desc: "Vibrant Nigerian fried rice paired with perfectly caramelised sweet plantain.",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80",
    tag: "Classic",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
  "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=80",
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80"
          alt="Nigerian feast spread"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0B0806]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0806]/30 via-transparent to-[#0B0806]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-5">
            Dallas & Houston, Texas
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light text-[#F5EFE0] leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Authentic Nigerian
            <br />
            <em className="text-[#C8902A] font-medium">Cuisine</em>
          </h1>
          <p className="text-base md:text-lg text-[#9A8A72] max-w-xl mx-auto mb-10 leading-relaxed">
            Bold flavors. Elegant presentation. Unforgettable memories —
            crafted by Chef Lù for every occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-3.5 bg-[#C8902A] text-[#0B0806] text-xs tracking-widest uppercase font-semibold hover:bg-[#E8B84B] transition-colors"
            >
              Book Chef Lù
            </Link>
            <Link
              href="/menu"
              className="px-8 py-3.5 border border-[#F5EFE0]/30 text-[#F5EFE0] text-xs tracking-widest uppercase hover:border-[#C8902A] hover:text-[#C8902A] transition-all"
            >
              View Menu
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-[#C8902A] animate-pulse" />
        </div>
      </section>

      {/* ── Value strip ── */}
      <section className="bg-[#130E09] border-y border-[#2D2218] py-5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#2D2218]">
          {[
            { icon: <CheckCircle size={14} />, text: "Freshly Prepared for Every Order" },
            { icon: <MapPin size={14} />, text: "Serving Dallas & Houston, Texas" },
            { icon: <Truck size={14} />, text: "Pickup & Delivery Available" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-3 py-4 px-6 text-center">
              <span className="text-[#C8902A]">{icon}</span>
              <span className="text-xs tracking-widest uppercase text-[#9A8A72]">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Welcome ── */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
              alt="Chef Lù in the kitchen"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#130E09] border border-[#2D2218] flex flex-col items-center justify-center text-center p-3">
            <span
              className="text-3xl font-semibold text-[#C8902A]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              5★
            </span>
            <span className="text-[9px] tracking-widest uppercase text-[#9A8A72] leading-tight mt-1">
              Rated Experience
            </span>
          </div>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-4">
            Welcome
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#F5EFE0] leading-tight mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Where Every Meal Tells a Story
          </h2>
          <p className="text-[#9A8A72] leading-relaxed mb-5">
            Chef Lù brings the warmth, richness, and soul of authentic Nigerian
            cuisine to your table. Whether you&apos;re hosting a grand celebration or
            simply craving a home-cooked Nigerian meal, every dish is prepared
            with intention, quality ingredients, and a whole lot of love.
          </p>
          <p className="text-[#9A8A72] leading-relaxed mb-8">
            Based in Texas and serving both Dallas and Houston, Chef Lù caters
            to events of all sizes — from intimate family dinners to large
            weddings — with a menu rooted in Nigerian tradition and elevated for
            every occasion.
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Quality-controlled, freshly prepared every order",
              "Premium presentation — clean, elegant, camera-ready",
              "Personalised menus tailored to your event",
              "Professional, punctual, stress-free service",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#9A8A72]">
                <ArrowRight size={14} className="text-[#C8902A] mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-[#C8902A] tracking-widest uppercase hover:gap-4 transition-all"
          >
            Meet Chef Lù <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-[#130E09] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-3">
              What We Offer
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#F5EFE0]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-5">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0B0806]/40 group-hover:bg-[#0B0806]/20 transition-colors duration-300" />
                </div>
                <h3
                  className="text-2xl font-medium text-[#F5EFE0] mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-[#9A8A72] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#C8902A] text-[#C8902A] text-xs tracking-widest uppercase hover:bg-[#C8902A] hover:text-[#0B0806] transition-all"
            >
              All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Menu preview ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-3">
            On The Menu
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#F5EFE0]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            A Taste of Nigeria
          </h2>
          <p className="text-[#9A8A72] max-w-xl mx-auto mt-4 text-sm leading-relaxed">
            From smoky party jollof to hand-crafted canapés, every dish is made
            to impress and satisfy.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((d) => (
            <div key={d.name} className="group">
              <div className="relative aspect-square overflow-hidden mb-4">
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#C8902A] text-[#0B0806] text-[9px] tracking-widest uppercase px-2 py-1">
                    {d.tag}
                  </span>
                </div>
              </div>
              <h4
                className="text-lg font-medium text-[#F5EFE0] mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {d.name}
              </h4>
              <p className="text-xs text-[#9A8A72] leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C8902A] text-[#0B0806] text-xs tracking-widest uppercase font-semibold hover:bg-[#E8B84B] transition-colors"
          >
            Full Menu & Packages <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Gallery strip ── */}
      <section className="py-4 bg-[#080604]">
        <div className="flex overflow-hidden gap-2">
          {galleryImages.map((src, i) => (
            <div key={i} className="relative w-1/5 min-w-[200px] aspect-square flex-shrink-0">
              <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-[#0B0806]/30 hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-[#130E09] border-y border-[#2D2218] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#C8902A] text-lg">★</span>
            ))}
          </div>
          <blockquote
            className="text-2xl md:text-3xl font-light italic text-[#F5EFE0] leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            &ldquo;The flavors were rich and authentic — every bite felt like a
            celebration. Our guests could not stop talking about the food. Chef
            Lù made our event truly unforgettable.&rdquo;
          </blockquote>
          <p className="text-xs tracking-widest uppercase text-[#9A8A72]">
            — Event Client, Dallas TX
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1920&q=80"
          alt="Catering event"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0B0806]/80" />
        <div className="relative z-10 text-center px-6">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8902A] mb-4">
            Ready to Elevate Your Event?
          </p>
          <h2
            className="text-4xl md:text-6xl font-light text-[#F5EFE0] mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Let&apos;s Plan Your Perfect
            <br />
            <em className="text-[#C8902A]">Nigerian Feast</em>
          </h2>
          <p className="text-[#9A8A72] max-w-lg mx-auto mb-10 text-sm leading-relaxed">
            Fill out a quick enquiry and Chef Lù will be in touch to create a
            personalised menu just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-10 py-4 bg-[#C8902A] text-[#0B0806] text-xs tracking-widest uppercase font-semibold hover:bg-[#E8B84B] transition-colors"
            >
              Book Your Event
            </Link>
            <Link
              href="/menu"
              className="px-10 py-4 border border-[#F5EFE0]/30 text-[#F5EFE0] text-xs tracking-widest uppercase hover:border-[#C8902A] hover:text-[#C8902A] transition-all"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── Hours & Location ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-[#2D2218] p-10">
          <div className="text-center">
            <Clock size={20} className="text-[#C8902A] mx-auto mb-3" />
            <h4
              className="text-xl font-medium text-[#F5EFE0] mb-2"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Booking Hours
            </h4>
            <p className="text-sm text-[#9A8A72]">Mon – Sun</p>
            <p className="text-sm text-[#9A8A72]">9:00 AM – 6:00 PM</p>
          </div>
          <div className="text-center border-y md:border-y-0 md:border-x border-[#2D2218] py-8 md:py-0">
            <MapPin size={20} className="text-[#C8902A] mx-auto mb-3" />
            <h4
              className="text-xl font-medium text-[#F5EFE0] mb-2"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Service Areas
            </h4>
            <p className="text-sm text-[#9A8A72]">Dallas, Texas</p>
            <p className="text-sm text-[#9A8A72]">Houston, Texas</p>
          </div>
          <div className="text-center">
            <Truck size={20} className="text-[#C8902A] mx-auto mb-3" />
            <h4
              className="text-xl font-medium text-[#F5EFE0] mb-2"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Tray Orders
            </h4>
            <p className="text-sm text-[#9A8A72]">24–48 hrs notice</p>
            <p className="text-sm text-[#9A8A72]">Pickup & Delivery</p>
          </div>
        </div>
      </section>
    </>
  );
}

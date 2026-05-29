import { useEffect, useState } from "react";
import "@/App.css";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Heart,
  Sparkles,
  Scissors,
  Award,
  ShieldCheck,
  ChevronRight,
  Instagram,
  MessageCircle,
} from "lucide-react";

const PHONE_TEL = "tel:+917760711425";
const PHONE_DISPLAY = "+91 77607 11425";
const WA_LINK = "https://wa.me/917760711425";
const MAPS_LINK =
  "https://www.google.com/maps/place/Style+n+Arts+Women's+hair,+Beauty+and+Makeup/@12.9005783,77.6416329,17z";
const MAPS_EMBED =
  "https://www.google.com/maps?q=12.9005783,77.6416329&z=17&output=embed";

const SERVICE_GROUPS = [
  {
    id: "hair",
    label: "Hair",
    blurb:
      "Cuts, colour, gloss, and treatments tailored to your hair story. Salon-grade products, hands you can trust.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Women's Haircut & Blow Dry", price: "₹349 onwards" },
      { name: "Hair Wash & Blow Dry", price: "₹199 onwards" },
      { name: "Hair Colour (Global)", price: "₹799 onwards" },
      { name: "Highlights & Balayage", price: "₹1,499 onwards" },
      { name: "Keratin Smoothening", price: "₹2,499 onwards" },
      { name: "Hair Spa & Deep Conditioning", price: "₹699 onwards" },
      { name: "Rebonding", price: "₹2,999 onwards" },
    ],
  },
  {
    id: "skin",
    label: "Skin & Face",
    blurb:
      "Glow-restoring facials, brightening cleanups, and gentle hair removal — for skin that feels like itself again.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Brightening Cleanup", price: "₹349 onwards" },
      { name: "Classic Facial", price: "₹699 onwards" },
      { name: "De-tan Treatment", price: "₹499 onwards" },
      { name: "Bleach (Face / Full Body)", price: "₹199 onwards" },
      { name: "Threading (Eyebrows)", price: "₹70" },
      { name: "Waxing (Arms / Legs / Full Body)", price: "₹149 onwards" },
    ],
  },
  {
    id: "brow",
    label: "Brow & Lash",
    blurb:
      "Our signature service. Brow tints, lash lifts, and shaping done by stylists who genuinely care about your face.",
    image:
      "https://images.unsplash.com/photo-1571907483086-3c0ee2ad7e57?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Brow Tint", price: "₹1,999" },
      { name: "Eyebrow Shaping & Threading", price: "₹150" },
      { name: "Lash Tint", price: "₹999" },
      { name: "Lash Extensions (Classic)", price: "₹1,499 onwards" },
    ],
  },
  {
    id: "nail",
    label: "Nail Care",
    blurb:
      "From a quick polish change to full gel sets and intricate nail art — clean tools, beautiful finishes.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Classic Manicure", price: "₹349" },
      { name: "Classic Pedicure", price: "₹449" },
      { name: "Gel Nails", price: "₹899 onwards" },
      { name: "Nail Art (per nail)", price: "₹100 onwards" },
    ],
  },
  {
    id: "bridal",
    label: "Bridal & Occasion",
    blurb:
      "Engagements, weddings, sangeets, receptions — we plan the look with you, trial included. You'll feel like you.",
    image:
      "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=1200&q=80",
    items: [
      { name: "Bridal Makeup Package", price: "₹4,999 onwards" },
      { name: "Party Makeup", price: "₹1,499 onwards" },
      { name: "Engagement Look", price: "₹2,999 onwards" },
      { name: "Saree Draping", price: "₹499" },
    ],
  },
];

const REVIEWS = [
  {
    name: "Priya R.",
    location: "HSR Layout · Regular for 3 years",
    quote:
      "Best salon in HSR! My hair colour looks so natural and lasts so long. Been coming here for 3 years.",
  },
  {
    name: "Ananya S.",
    location: "Bommanahalli",
    quote:
      "The brow tint is absolutely worth it. The girls here really know what they're doing.",
  },
  {
    name: "Deepika M.",
    location: "Bridal client",
    quote:
      "Went in for my engagement makeup and it was perfect. All my relatives were complimenting the look!",
  },
  {
    name: "Kavitha L.",
    location: "Sector 7, HSR",
    quote:
      "Love the relaxed vibe here. No rushing you out. My hair spa left my hair feeling amazing.",
  },
  {
    name: "Shreya N.",
    location: "Hosapalaya",
    quote:
      "Cleaned up my skin with the de-tan treatment. Visible difference after just one session!",
  },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header ${scrolled ? "scrolled" : ""}`}
      data-testid="site-header"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#top"
          className="brand"
          data-testid="brand-logo"
          aria-label="Style n Arts home"
        >
          Style n <span className="amp">&amp;</span> Arts
        </a>

        <nav className="desktop-nav flex items-center gap-10" aria-label="Main">
          <a href="#services" className="nav-link" data-testid="nav-services">
            Services
          </a>
          <a href="#about" className="nav-link" data-testid="nav-about">
            About
          </a>
          <a href="#reviews" className="nav-link" data-testid="nav-reviews">
            Reviews
          </a>
          <a href="#visit" className="nav-link" data-testid="nav-visit">
            Visit
          </a>
        </nav>

        <a
          href={PHONE_TEL}
          className="btn-outline-rose hidden md:inline-flex"
          data-testid="header-call-cta"
        >
          <Phone size={14} />
          Book a Visit
        </a>
        <a
          href={PHONE_TEL}
          className="mobile-cta inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#C2185B] text-white"
          aria-label="Call salon"
          data-testid="header-call-mobile"
        >
          <Phone size={18} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" data-testid="hero-section">
      <div className="hero-content max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <p className="rise rise-1 mb-6 inline-flex items-center gap-3 text-xs tracking-[0.32em] uppercase text-[#FCE4EC]">
            <span className="inline-block w-10 h-px bg-[#B76E79]" />
            HSR Layout · Bengaluru
          </p>
          <h1 className="rise rise-2 text-5xl sm:text-6xl lg:text-7xl mb-6">
            Your Best Look,
            <br />
            <span className="accent-script">Every</span>{" "}
            <span className="accent-script">Day.</span>
          </h1>
          <p className="rise rise-3 text-lg md:text-xl text-[#FBE7EE] max-w-2xl leading-relaxed font-light">
            Bengaluru's most loved women's salon. Seven years, seventeen hundred
            happy clients, four point nine stars on Google — and counting.
          </p>

          <div className="rise rise-4 mt-10 flex flex-wrap gap-4">
            <a
              href={PHONE_TEL}
              className="btn-primary"
              data-testid="hero-book-cta"
            >
              <Phone size={16} /> Book an Appointment
            </a>
            <a
              href="#services"
              className="btn-ghost"
              data-testid="hero-services-cta"
            >
              View Services <ChevronRight size={16} />
            </a>
          </div>

          <div className="rise rise-4 mt-14 flex items-center gap-3 text-sm text-[#FBE7EE]/90">
            <div className="stars" aria-hidden="true">
              ★ ★ ★ ★ ★
            </div>
            <span className="font-semibold tracking-wide">4.9</span>
            <span className="opacity-70">— from 1,700+ Google reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { label: "4.9 ★ on Google", icon: <Star size={16} /> },
    { label: "1,700+ Reviews", icon: <Heart size={16} /> },
    { label: "Women-Owned", icon: <Sparkles size={16} /> },
    { label: "7+ Years", icon: <Award size={16} /> },
    { label: "HSR Layout", icon: <MapPin size={16} /> },
    { label: "Wheelchair Accessible", icon: <ShieldCheck size={16} /> },
  ];
  return (
    <div className="trust-bar" data-testid="trust-bar">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-y-1">
        {items.map((it, i) => (
          <div
            key={i}
            className="trust-item"
            data-testid={`trust-item-${i}`}
          >
            <span className="dot">{it.icon}</span>
            {it.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  const [active, setActive] = useState(SERVICE_GROUPS[0].id);
  const current = SERVICE_GROUPS.find((g) => g.id === active);

  return (
    <section
      id="services"
      className="section-pad bg-blush-soft"
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="eyebrow">
            <span className="gold-divider" />
            Our Menu
            <span className="gold-divider" />
          </p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl mt-4 mb-5">
            Services, gently curated.
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#4A4A4A]">
            Honest prices in INR. No upselling, no hidden charges — just
            beautiful work done by people who love what they do.
          </p>
        </div>

        <div className="service-tabs" role="tablist">
          {SERVICE_GROUPS.map((g) => (
            <button
              key={g.id}
              role="tab"
              aria-selected={active === g.id}
              className={`service-tab ${active === g.id ? "active" : ""}`}
              onClick={() => setActive(g.id)}
              data-testid={`service-tab-${g.id}`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start"
          data-testid={`service-panel-${current.id}`}
        >
          <div className="lg:col-span-2">
            <div className="image-tile" style={{ aspectRatio: "4/5" }}>
              <img
                src={current.image}
                alt={`${current.label} at Style n Arts`}
                loading="lazy"
              />
              <span className="tile-label">{current.label}</span>
            </div>
            <p className="mt-6 font-serif-elegant text-xl text-[#2D2D2D] leading-snug italic">
              {current.blurb}
            </p>
            <a
              href={PHONE_TEL}
              className="btn-outline-rose mt-6"
              data-testid={`service-call-${current.id}`}
            >
              <Phone size={14} /> Call to Book
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="service-card">
              {current.items.map((it, i) => (
                <div
                  className="service-row"
                  key={i}
                  data-testid={`service-row-${current.id}-${i}`}
                >
                  <span className="service-name">{it.name}</span>
                  <span className="service-price">{it.price}</span>
                </div>
              ))}
              <p className="text-xs text-[#7a6b6f] mt-5 italic">
                * Prices may vary based on hair length, product choice, and
                stylist. We'll always confirm before we begin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="section-pad bg-ivory"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80"
                alt="Stylist working on a client's hair"
                className="w-full h-[360px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="about-image mt-10">
              <img
                src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80"
                alt="Calm salon interior with warm lighting"
                className="w-full h-[360px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow">About Style n Arts</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl mt-4 mb-8 leading-[1.05]">
            A women-only salon, run by women who{" "}
            <span className="italic font-serif-elegant text-[#B76E79]">
              get it.
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#3a3a3a] leading-relaxed mb-5">
            For seven years, we've been the quiet little salon on the 1st floor
            in ITI Layout that women keep coming back to. No loud music, no
            sales pitches — just warm lighting, clean tools, and stylists who
            actually listen.
          </p>
          <p className="text-base md:text-lg text-[#3a3a3a] leading-relaxed mb-10">
            From a first-job haircut to your wedding day glam, we're honoured
            to be part of the everyday and the once-in-a-lifetime. Our space is
            wheelchair-accessible and welcomes every woman, every age, every
            body.
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-xl">
            <div data-testid="about-stat-years">
              <div className="about-stat">7+</div>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#6b5a5e]">
                Years in HSR
              </p>
            </div>
            <div data-testid="about-stat-reviews">
              <div className="about-stat">1,700+</div>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#6b5a5e]">
                Google Reviews
              </p>
            </div>
            <div data-testid="about-stat-rating">
              <div className="about-stat">4.9★</div>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#6b5a5e]">
                Average Rating
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl">
            <div className="flex items-start gap-3">
              <Scissors size={20} className="text-[#B76E79] mt-1 shrink-0" />
              <div>
                <p className="font-serif-elegant text-lg text-[#2D2D2D]">
                  Trained, kind stylists
                </p>
                <p className="text-sm text-[#5a4a4e]">
                  Continuously upskilling on the latest techniques.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck size={20} className="text-[#B76E79] mt-1 shrink-0" />
              <div>
                <p className="font-serif-elegant text-lg text-[#2D2D2D]">
                  Hygiene & accessibility
                </p>
                <p className="text-sm text-[#5a4a4e]">
                  Single-use disposables. Wheelchair-friendly entrance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section
      id="reviews"
      className="section-pad bg-blush"
      data-testid="reviews-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="eyebrow">
            <span className="gold-divider" />
            Loved By Locals
            <span className="gold-divider" />
          </p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl mt-4">
            Stories from our chair.
          </h2>
          <p className="mt-5 text-base text-[#4A4A4A] max-w-xl mx-auto">
            A handful of the 1,700+ kind words our clients have left us on
            Google.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="review-card"
              data-testid={`review-card-${i}`}
            >
              <div className="stars mb-4">★ ★ ★ ★ ★</div>
              <p className="font-serif-elegant text-xl leading-snug text-[#2D2D2D] italic mb-6 relative z-10">
                "{r.quote}"
              </p>
              <div className="mt-auto pt-4 border-t border-[rgba(183,110,121,0.25)]">
                <p className="font-semibold text-[#2D2D2D]">{r.name}</p>
                <p className="text-xs text-[#7a6b6f] uppercase tracking-[0.14em] mt-1">
                  {r.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-rose"
            data-testid="read-more-reviews"
          >
            Read more on Google <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section
      id="visit"
      className="section-pad bg-white"
      data-testid="visit-section"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="eyebrow">Visit Us</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl mt-4 mb-8 leading-[1.05]">
            Pop in for a chai &amp; a quick consult.
          </h2>

          <ul className="space-y-7">
            <li className="flex items-start gap-4" data-testid="address-block">
              <MapPin size={22} className="text-[#C2185B] mt-1 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#6b5a5e] mb-2">
                  Address
                </p>
                <p className="font-serif-elegant text-xl text-[#2D2D2D] leading-snug">
                  308, 1st Floor, 5th Main Rd, ITI Layout, Hosapalaya,
                  <br />
                  HSR Layout, Bengaluru, Karnataka — 560068
                </p>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-[#C2185B] hover:text-[#9E1250]"
                  data-testid="get-directions-link"
                >
                  Get Directions <ChevronRight size={14} />
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Phone size={22} className="text-[#C2185B] mt-1 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#6b5a5e] mb-2">
                  Call / WhatsApp
                </p>
                <a
                  href={PHONE_TEL}
                  className="font-serif-elegant text-xl text-[#2D2D2D] hover:text-[#C2185B]"
                  data-testid="visit-phone-link"
                >
                  {PHONE_DISPLAY}
                </a>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={PHONE_TEL}
                    className="btn-primary"
                    data-testid="visit-call-cta"
                    style={{ padding: "12px 22px", fontSize: 12 }}
                  >
                    <Phone size={14} /> Call Now
                  </a>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-rose"
                    data-testid="visit-whatsapp-cta"
                    style={{ padding: "12px 22px", fontSize: 12 }}
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Clock size={22} className="text-[#C2185B] mt-1 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#6b5a5e] mb-2">
                  Open Hours
                </p>
                <p className="font-serif-elegant text-xl text-[#2D2D2D]">
                  Monday — Sunday
                  <br />
                  10:30 AM — 9:30 PM
                </p>
                <p className="mt-2 text-sm text-[#7a6b6f] italic">
                  Walk-ins welcome, but a call ahead saves you the wait.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="map-frame" data-testid="map-frame">
          <iframe
            title="Style n Arts location map"
            src={MAPS_EMBED}
            width="100%"
            height="560"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="brand" style={{ color: "#fff" }}>
            Style n <span className="amp">&amp;</span> Arts
          </div>
          <p className="mt-4 font-serif-elegant italic text-[#e9c9d2] text-lg">
            Your beauty, our passion.
          </p>
          <p className="mt-4 text-sm text-[#cbb4ba] leading-relaxed">
            A women-only salon in HSR Layout, Bengaluru. Hair, skin, brows,
            nails, and bridal — all under one warm, welcoming roof.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#B76E79] mb-5">
            Explore
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#services" data-testid="footer-link-services">
                Services
              </a>
            </li>
            <li>
              <a href="#about" data-testid="footer-link-about">
                About
              </a>
            </li>
            <li>
              <a href="#reviews" data-testid="footer-link-reviews">
                Reviews
              </a>
            </li>
            <li>
              <a href="#visit" data-testid="footer-link-visit">
                Visit
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#B76E79] mb-5">
            Contact
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={PHONE_TEL} data-testid="footer-phone">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp"
              >
                WhatsApp us
              </a>
            </li>
            <li>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-maps"
              >
                Find us on Google Maps
              </a>
            </li>
            <li className="text-[#cbb4ba] pt-2">
              308, 1st Floor, 5th Main Rd,
              <br />
              ITI Layout, HSR Layout, Bengaluru — 560068
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#3a232c]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-[#9e8a90]">
          <p>© 2026 Style n Arts Women's Hair, Beauty and Makeup. All rights reserved.</p>
          <p className="italic">Made with care in Bengaluru.</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
      data-testid="whatsapp-float"
    >
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.59c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.27 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.94 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.27.23-.62.23-1.16.16-1.27-.07-.11-.25-.18-.52-.31zM16.02 5.33c-5.88 0-10.66 4.78-10.66 10.66 0 1.88.49 3.71 1.42 5.32L5.33 26.67l5.5-1.44c1.56.85 3.31 1.3 5.19 1.3 5.88 0 10.66-4.78 10.66-10.66 0-5.88-4.78-10.55-10.66-10.55zm0 19.38c-1.67 0-3.31-.45-4.74-1.31l-.34-.2-3.27.86.87-3.19-.22-.36c-.94-1.5-1.44-3.24-1.44-5.02 0-5.12 4.17-9.29 9.28-9.29 5.12 0 9.28 4.17 9.28 9.29 0 5.12-4.16 9.22-9.42 9.22z" />
      </svg>
    </a>
  );
}

export default function App() {
  useEffect(() => {
    document.title =
      "Style n Arts — Women's Hair, Beauty & Makeup | HSR Layout, Bengaluru";
  }, []);

  return (
    <div className="App" data-testid="app-root">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

// ── Routes ────────────────────────────────────────────────────────────────────
const UX_CASE_STUDY_PATH = "/projects/my-nikkah-subscription-redesign";
const BRAND_STRATEGY_PATH = "/brand-strategy";
const COMMERCIAL_IMPACT_PATH = "/commercial-impact";

// ── Static data ───────────────────────────────────────────────────────────────
const highlights = [
  "Brand building",
  "Packaging design",
  "Campaign visuals",
  "Human computer interaction",
  "Design solutions",
  "Mainline media",
  "Digital experience",
  "Spatial thinking",
];

const introCards = [
  {
    kicker: "Positioning",
    title: "Visual problem solving with brand depth.",
    copy: "Formally trained in visual arts and sharpened by commercial practice, I approach UI/UX through brand thinking, interaction clarity, and problem solving.",
  },
  {
    kicker: "Built for",
    title: "High-stakes products and ambitious launches.",
    copy: "I work best with teams that care about business impact as much as craft.",
  },
  {
    kicker: "Approach",
    title: "Strategic UX built to convert.",
    copy: "Brand and UX thinking applied to digital experiences that feel intuitive, deliberate, and commercially effective.",
  },
];

// Home page: 3 category cards
const homeCategories = [
  {
    number: "01",
    title: "UI / UX Design",
    category: "UX Project",
    brief:
      "Designed an end to end user experience for a matrimonial platform — improving onboarding, simplifying discovery, and optimising subscription conversion through strategic UX and UI decisions.",
    accent: "gold",
    slug: UX_CASE_STUDY_PATH,
    preview: "/projects/my-nikkah/phone-main.png",
    ctaLabel: "UX case study",
    ctaAction: "Open dedicated project page",
  },
  {
    number: "02",
    title: "Brand Strategy",
    category: "Branding + Packaging",
    brief:
      "Catalog design, key visuals, FMCG packaging, and brand identity systems that define how products speak and brands are remembered.",
    accent: "rose",
    slug: BRAND_STRATEGY_PATH,
    preview: "/brand-strategy/kairi.png",
    ctaLabel: "Brand portfolio",
    ctaAction: "View all brand strategy work",
  },
  {
    number: "03",
    title: "Commercial Impact",
    category: "Advertising + Campaigns",
    brief:
      "High-performance promotional advertising for Reebok, Flipkart, Britannia, and Tanishq — from B2C communication and retail touchpoints to large-scale sale campaigns.",
    accent: "sky",
    slug: COMMERCIAL_IMPACT_PATH,
    preview: "/commercial/flipkart.png",
    ctaLabel: "Campaign work",
    ctaAction: "View all commercial projects",
  },
];

// Brand Strategy page projects
const brandStrategyProjects = [
  {
    kicker: "FMCG Packaging",
    title: "Kairi",
    subtitle: "Mango Drink — Brand & Packaging Design",
    description:
      "A youthful, flavour-forward packaging identity that positions Kairi as a premium yet accessible mango drink. The visual language draws from the raw energy of the product — bright, confident, and immediately readable on shelf.",
    approach:
      "Started from the flavour experience: what does kairi (raw mango) feel and taste like? That sensory language became the design foundation — colour, texture, and type all calibrated to the product personality.",
    images: ["/brand-strategy/kairi.png"],
    deliverables: ["Brand identity", "Packaging design", "Label system", "Flavour variants"],
    accent: "gold",
  },
  {
    kicker: "FMCG Packaging",
    title: "Range Shot — Coconut",
    subtitle: "Coconut Products — Range Photography + Packaging",
    description:
      "A unified range shot that communicates the brand's portfolio with clarity and appetite appeal. Coconut products require a balance of natural warmth and clean modernity — this shot achieves both.",
    approach:
      "Range shots need hierarchy and breathing room. Every element was positioned to guide the eye from product to product without competition — letting the range feel cohesive, not crowded.",
    images: ["/brand-strategy/range-shot-coconut.png"],
    deliverables: ["Range photography", "Packaging", "Brand consistency", "Retail visual"],
    accent: "mint",
  },
  {
    kicker: "FMCG Packaging",
    title: "Smoothie",
    subtitle: "Beverage — Packaging + Visual Identity",
    description:
      "A vibrant, shelf-presence-first packaging design for a smoothie brand. The visual energy of the pack reflects the product's freshness and health positioning — made to stop shoppers mid-aisle.",
    approach:
      "Health beverage packaging needs to feel both indulgent and clean. The balance between colour energy and white space creates that tension — the pack earns attention before the label is ever read.",
    images: ["/brand-strategy/smoothie.png"],
    deliverables: ["Packaging design", "Brand identity", "Shelf design", "Variant system"],
    accent: "mint",
  },
  {
    kicker: "Brand Identity",
    title: "NAS",
    subtitle: "Brand Identity + Visual System",
    description:
      "A considered identity system built to work across print, digital, and packaging touchpoints. NAS needed a mark and visual language that felt modern without sacrificing authority.",
    approach:
      "The challenge was creating a system flexible enough for multiple applications but consistent enough to build recognition. Every element earns its place — nothing decorative that doesn't reinforce the brand.",
    images: ["/brand-strategy/nas.png"],
    deliverables: ["Logo design", "Brand identity", "Visual system", "Application guidelines"],
    accent: "ice",
  },
  {
    kicker: "Premium Packaging",
    title: "Ghee",
    subtitle: "Premium Ghee — Packaging Design",
    description:
      "Packaging for a premium ghee brand that communicates purity, tradition, and quality in a competitive shelf environment. The design had to signal trust and craft without relying on visual clichés.",
    approach:
      "Ghee carries strong cultural associations. I worked with that heritage rather than against it — giving the pack warmth and authenticity alongside modern clarity. The result feels earned, not imposed.",
    images: ["/brand-strategy/ghee.png"],
    deliverables: ["Packaging design", "Label design", "Premium positioning", "Print production"],
    accent: "gold",
  },
  {
    kicker: "Brand Collateral",
    title: "MSS",
    subtitle: "Brand Collateral + Identity System",
    description:
      "A brand collateral system built for consistent communication across corporate and marketing touchpoints. Every application is an opportunity to reinforce the brand's authority and clarity.",
    approach:
      "Every piece of collateral is a brand touchpoint. The system was designed to scale — from a business card to a banner — without losing cohesion or quality.",
    images: ["/brand-strategy/mss.png"],
    deliverables: ["Brand collateral", "Identity system", "Print materials", "Templates"],
    accent: "sky",
  },
  {
    kicker: "Brand Communication",
    title: "Brand Artboards",
    subtitle: "Visual Communication + Design Systems",
    description:
      "A collection of brand communication pieces demonstrating how identity, layout, and visual language work together across formats — showing the craft and rigour behind brand communication.",
    approach:
      "These pieces show how a visual system translates across real applications. Typography, colour, image, and space are all working together — not independently — to carry the brand.",
    images: [
      "/brand-strategy/artboard-1.jpg",
      "/brand-strategy/artboard-2.jpg",
      "/brand-strategy/artboard-3.jpg",
    ],
    deliverables: ["Brand communication", "Layout design", "Visual systems", "Print direction"],
    accent: "rose",
  },
  {
    kicker: "Retail Design",
    title: "POM / POSM",
    subtitle: "Point of Purchase + Retail Activation",
    description:
      "Point of sale and purchase materials designed to win attention at the moment of decision. POSM work lives at the intersection of brand guidelines and retail reality.",
    approach:
      "Retail activation needs to stop shoppers mid-stride. The work prioritises instant legibility, appetite appeal, and brand clarity — because attention is measured in milliseconds at the shelf.",
    images: ["/brand-strategy/pom-posm.jpg"],
    deliverables: ["POSM design", "Retail graphics", "POS materials", "Brand execution"],
    accent: "sky",
  },
];

// Commercial Impact page projects
const commercialProjects = [
  {
    number: "01",
    title: "Tanishq",
    category: "Catalogs + Key Visuals",
    brief:
      "Designed catalogs and key visuals with a jewel-like sense of rhythm, detail, and restraint that lets luxury breathe.",
    impact:
      "I wanted the work to feel iconic without relying on visual excess, letting detail, rhythm, and restraint do the heavy lifting.",
    accent: "rose",
    details:
      "Luxury communication built around mood, precision, and editorial pacing, with attention to how product, texture, and light work together.",
    deliverables: ["Catalog design", "Key visuals", "Luxury storytelling", "Print direction"],
    images: ["/commercial/tanishq.png", "/portfolio-pages/page-12.jpg"],
  },
  {
    number: "02",
    title: "Reebok",
    category: "B2C Communication",
    brief:
      "Created customer-facing communication that feels energetic, graphic, and unmistakably in motion.",
    impact:
      "I translated brand energy into clean, conversion-smart visual culture with clarity and momentum.",
    accent: "ice",
    details:
      "A communication system that brings movement and confidence into every frame while keeping the messaging immediate and product-led.",
    deliverables: ["B2C communication", "Catalog pieces", "Brand energy", "Retail touchpoints"],
    images: ["/commercial/reebok.png", "/portfolio-pages/page-13.jpg", "/portfolio-pages/page-21.jpg"],
  },
  {
    number: "03",
    title: "Flipkart",
    category: "2024 Sale Campaign + E-commerce",
    brief:
      "Ran a large-scale sale campaign with commanding hierarchy, sharp communication, and real visual stamina.",
    impact:
      "This project reflects how I build high-pressure design systems that still feel intentional and sharp at scale.",
    accent: "sky",
    details:
      "A campaign ecosystem built for volume and velocity, where every banner, app touchpoint, and promo asset had to stay clear and compelling.",
    deliverables: ["Sale campaign", "E-commerce assets", "Digital rollout", "Scaled visual system"],
    images: [
      "/commercial/flipkart.png",
      "/commercial/ecom.png",
      "/portfolio-pages/page-18.jpg",
      "/portfolio-pages/page-19.jpg",
      "/portfolio-pages/page-20.jpg",
    ],
  },
  {
    number: "04",
    title: "Britannia",
    category: "Promotional Advertising",
    brief:
      "Built promotional advertising with instant readability, appetite, and commercial punch.",
    impact:
      "I move fast when the format demands it, without letting the work slip into anything ordinary.",
    accent: "mint",
    details:
      "Fast-moving ad work designed to feel appetising, direct, and impossible to miss, while still staying visually disciplined.",
    deliverables: ["Promotional ads", "Retail graphics", "Brand consistency", "Campaign rollout"],
    images: [
      "/commercial/britannia.png",
      "/commercial/britannia-poster.jpg",
      "/portfolio-pages/page-14.jpg",
      "/portfolio-pages/page-16.jpg",
    ],
  },
];

// ── Case study data (unchanged) ──────────────────────────────────────────────
const caseStudyGoals = [
  "Improve user onboarding and guidance",
  "Simplify profile discovery experience",
  "Increase user engagement and time spent",
  "Design a clear and persuasive subscription flow",
];

const caseStudyInsights = [
  "Users are goal oriented — finding a compatible partner — and need clear guidance at every step",
  "Trust and clarity are prerequisites before users engage or pay",
  "Guided, step by step experiences outperform open ended exploration on matrimonial platforms",
  "Too many choices without filters creates overwhelm and drop off",
];

const outcomes = [
  "Clearer onboarding reduced confusion and drop offs post sign up",
  "Better discovery experience increased engagement and time on platform",
  "Improved filtering delivered more relevant matches and perceived intelligence",
  "Stronger subscription clarity and visual hierarchy increased conversion potential",
  "Improved trust and premium feel raised likelihood of user retention",
];

const caseStudyDesktopVisuals = [
  {
    label: "App Overview",
    title: "A complete redesign from first impression to subscription.",
    copy: "Every screen was designed to reduce friction, build trust, and guide users through the full journey — from onboarding to match discovery to conversion.",
    src: "/projects/my-nikkah/phone-main.png",
    alt: "My Nikkah app overview showing multiple screens.",
    layout: "full",
  },
  {
    label: "Profile Discovery",
    title: "A clean layout that makes browsing feel structured, not overwhelming.",
    copy: "Profiles are presented with key details — name, age, location — surfaced at a glance. Visual hierarchy guides the eye without cluttering the screen.",
    src: "/projects/my-nikkah/screen-1.png",
    alt: "Profile discovery screen in My Nikkah.",
    layout: "full",
  },
  {
    label: "Profile Completion",
    title: "Nudges that help users build trust and improve match quality.",
    copy: "Completion prompts are framed as value building moments — improving match relevance and giving users more confidence in the platform.",
    src: "/projects/my-nikkah/screen-2.png",
    alt: "Profile completion screen in My Nikkah.",
    layout: "full",
  },
  {
    label: "Subscription",
    title: "The subscription journey leads with value before it ever asks for payment.",
    copy: "Clear tier based plans, Popular and Best indicators, and value driven feature highlights guide users toward higher value plans with reduced decision friction.",
    src: "/projects/my-nikkah/screen-3.png",
    alt: "Subscription selection screen for My Nikkah premium plans.",
    layout: "full",
  },
];

const caseStudyMobileVisuals = [
  {
    label: "Mobile Experience",
    title: "The full journey — onboarding, discovery, and subscription — carried into mobile.",
    copy: "Every UX decision was adapted for smaller screens without losing the structure, warmth, or premium feel of the desktop experience.",
    src: "/projects/my-nikkah/screen-4.png",
    alt: "Mobile screens showing the My Nikkah experience.",
    layout: "full",
  },
  {
    label: "Mobile Flow",
    title: "From profile to subscription — the full mobile journey.",
    copy: "The mobile experience maintains clarity and hierarchy at every step of the user journey.",
    src: "/projects/my-nikkah/screen-5.png",
    alt: "Mobile flow screens for My Nikkah.",
    layout: "full",
  },
];

const userJourneySteps = [
  {
    stage: "Awareness",
    description: "User hears about the matrimonial app through advertisements, social media, or word of mouth.",
  },
  {
    stage: "Consideration",
    description: "User downloads the app from the app store and onboards by creating a profile.",
  },
  {
    stage: "Explore",
    description: "Explores profiles based on their preferences. They view profiles and can express interest or move on to the next one.",
  },
  {
    stage: "Subscribe",
    description: "User has the option to subscribe to various plans which offer extra features and better visibility.",
  },
  {
    stage: "Loyalty",
    description: "Users who have a positive experience become long term users and recommend the app to friends and family.",
  },
];

const uxDecisions = [
  "Dark theme with gold accents builds a premium, trustworthy feel appropriate for the emotional context",
  "Card based layouts keep content structured and scannable",
  "Minimal clutter keeps focus on profiles and decisions",
  "Consistent typography and spacing improves readability across the journey",
];

// ── Routing ───────────────────────────────────────────────────────────────────
let _navigate = null;

function navigateTo(path) {
  if (_navigate) { _navigate(path); return; }
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

// ── Shared components ─────────────────────────────────────────────────────────
function NoiseOverlay() {
  return (
    <svg className="noise-overlay" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
}

function useSpotlight() {
  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
}

function IntroVeil() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("veil-gone")));
  }, []);
  return <div className="intro-veil" ref={ref} aria-hidden="true" />;
}

// Back button shared between sub-pages
function BackToPortfolio() {
  return (
    <button type="button" className="back-link" onClick={() => navigateTo("/")}>
      ← Back to portfolio
    </button>
  );
}

// ── Mobile phone mockups (case study) ────────────────────────────────────────
function MobilePhoneMockups() {
  return (
    <div className="mobile-mockups-wrap">
      {/* Phone 1: Onboarding */}
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="pscreen-status">
            <span>9:41</span>
            <div className="pscreen-status-icons"><span>●●●</span></div>
          </div>
          <div className="pscreen-onboard">
            <div className="pscreen-logo">My Nikkah</div>
            <div className="pscreen-hero-img">
              <div className="pscreen-hero-gradient" />
              <div className="pscreen-hero-text">
                <span>Find Your</span>
                <span>Perfect Match</span>
              </div>
            </div>
            <div className="pscreen-members">
              <span className="pscreen-members-label">Members Who Found Love</span>
              <div className="pscreen-avatars">
                <div className="pscreen-avatar" style={{ background: "linear-gradient(135deg,#c98b2a,#f8c76d)" }} />
                <div className="pscreen-avatar" style={{ background: "linear-gradient(135deg,#8b6c42,#d4a96a)" }} />
                <div className="pscreen-avatar" style={{ background: "linear-gradient(135deg,#5a4a3a,#9a7a5a)" }} />
              </div>
            </div>
            <button className="pscreen-cta">Get Started</button>
            <span className="pscreen-signin">Already have an account? Sign In</span>
          </div>
        </div>
        <div className="phone-label">Onboarding</div>
      </div>

      {/* Phone 2: Discover Profile */}
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="pscreen-status">
            <span>9:41</span>
            <div className="pscreen-status-icons"><span>●●●</span></div>
          </div>
          <div className="pscreen-discover">
            <div className="pscreen-nav">
              <span className="pscreen-nav-logo">My Nikkah</span>
              <div className="pscreen-nav-actions">
                <div className="pscreen-nav-dot" />
                <div className="pscreen-nav-dot" />
              </div>
            </div>
            <div className="pscreen-discover-title">Discover Profile</div>
            <div className="pscreen-filters">
              <span className="pscreen-filter is-active">All</span>
              <span className="pscreen-filter">Nearby</span>
              <span className="pscreen-filter">Online</span>
            </div>
            <div className="pscreen-profile-card">
              <div className="pscreen-profile-img">
                <div className="pscreen-profile-gradient" />
              </div>
              <div className="pscreen-profile-info">
                <span className="pscreen-profile-name">Zarah, 25</span>
                <span className="pscreen-profile-location">📍 Bahrain · UAE/Abu Dhabi</span>
              </div>
              <div className="pscreen-profile-actions">
                <div className="pscreen-action pass">✕</div>
                <div className="pscreen-action super">⚡</div>
                <div className="pscreen-action like">♥</div>
              </div>
            </div>
          </div>
        </div>
        <div className="phone-label">Profile Discovery</div>
      </div>

      {/* Phone 3: Subscription */}
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="pscreen-status">
            <span>9:41</span>
            <div className="pscreen-status-icons"><span>●●●</span></div>
          </div>
          <div className="pscreen-subscription">
            <div className="pscreen-sub-header">Get Premium</div>
            <p className="pscreen-sub-sub">Unlock the full My Nikkah experience</p>
            <div className="pscreen-plan-tabs">
              <span className="pscreen-plan-tab">Free</span>
              <span className="pscreen-plan-tab is-active">Silver</span>
              <span className="pscreen-plan-tab">Gold</span>
            </div>
            <div className="pscreen-price-list">
              <div className="pscreen-price-row">
                <span>1 Day</span>
                <span className="pscreen-price-val">$6</span>
              </div>
              <div className="pscreen-price-row is-selected">
                <span>1 Week</span>
                <span className="pscreen-price-val">$13</span>
              </div>
              <div className="pscreen-price-row">
                <span>1 Month</span>
                <span className="pscreen-price-val">$26</span>
              </div>
            </div>
            <button className="pscreen-subscribe-btn">Subscribe · $13/week</button>
            <span className="pscreen-terms">Cancel anytime · Secure payment</span>
          </div>
        </div>
        <div className="phone-label">Subscription</div>
      </div>
    </div>
  );
}

// ── Home page ─────────────────────────────────────────────────────────────────
function HomePage() {
  // Hero 3D tilt — perf-optimized: RAF only runs while animating
  useEffect(() => {
    const stage = document.querySelector(".hero-stage");
    if (!stage || !window.matchMedia("(pointer: fine)").matches) return;

    const target = { rx: 0, ry: 0 };
    const curr = { rx: 0, ry: 0 };
    let rid = null;
    const lerp = (a, b, n) => a + (b - a) * n;

    const tick = () => {
      curr.rx = lerp(curr.rx, target.rx, 0.06);
      curr.ry = lerp(curr.ry, target.ry, 0.06);
      stage.style.transform = `perspective(1200px) rotateX(${curr.rx}deg) rotateY(${curr.ry}deg)`;
      if (Math.abs(curr.rx - target.rx) > 0.005 || Math.abs(curr.ry - target.ry) > 0.005) {
        rid = requestAnimationFrame(tick);
      } else {
        rid = null;
      }
    };

    const onMove = ({ clientX, clientY }) => {
      target.rx = (clientY / window.innerHeight - 0.5) * -5;
      target.ry = (clientX / window.innerWidth - 0.5) * 5;
      if (!rid) rid = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rid) cancelAnimationFrame(rid);
    };
  }, []);

  // Scroll parallax on hero images
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onScroll = () => {
      const y = window.scrollY;
      const imgA = document.querySelector(".hero-image-a");
      const imgB = document.querySelector(".hero-image-b");
      if (imgA) imgA.style.transform = `rotate(7deg) translateY(${y * -0.07}px)`;
      if (imgB) imgB.style.transform = `rotate(-8deg) translateY(${y * -0.11}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Eyebrow text scramble on load
  useEffect(() => {
    const el = document.querySelector(".eyebrow");
    if (!el) return;
    const original = el.textContent;
    const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let frame = 0;
    const TOTAL = 36;
    let rid;
    const tick = () => {
      const resolved = Math.floor((frame / TOTAL) * original.length);
      let out = "";
      for (let i = 0; i < original.length; i++) {
        if (i < resolved || original[i] === " " || original[i] === "x") out += original[i];
        else out += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      el.textContent = out;
      if (frame < TOTAL) { frame++; rid = requestAnimationFrame(tick); }
    };
    const t = setTimeout(() => { rid = requestAnimationFrame(tick); }, 500);
    return () => { clearTimeout(t); cancelAnimationFrame(rid); el.textContent = original; };
  }, []);

  // Image depth parallax on category cards — perf-optimized: RAF only while moving
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const cards = document.querySelectorAll(".project-card");
    const cleanup = [];
    cards.forEach((card) => {
      const img = card.querySelector(".project-preview-image");
      if (!img) return;
      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        img.style.transition = "transform 0.08s linear";
        img.style.transform = `scale(1.06) translate(${x * -12}px, ${y * -12}px)`;
      };
      const onLeave = () => {
        img.style.transition = "transform 0.55s cubic-bezier(0.16,1,0.3,1)";
        img.style.transform = "";
      };
      card.addEventListener("mousemove", onMove, { passive: true });
      card.addEventListener("mouseleave", onLeave);
      cleanup.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });
    return () => cleanup.forEach((fn) => fn());
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Brand x Digital x Interaction</p>
          <h1>
            <span className="sw" style={{ "--wi": 0 }}><span>Brand</span></span>
            {" "}
            <span className="sw" style={{ "--wi": 1 }}><span>&amp;</span></span>
            {" "}
            <span className="sw" style={{ "--wi": 2 }}><span>UX</span></span>
            {" "}
            <span className="sw" style={{ "--wi": 3 }}><span>designer</span></span>
            <span className="hero-sub"> crafting experiences that drive business impact and solve problems.</span>
          </h1>
          <p className="hero-text">
            From packaging that drives crores in sales to digital experiences designed to convert users.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Enter the archive</a>
            <a className="button ghost" href="#contact">Let&apos;s build something loud</a>
          </div>
        </div>

        <div className="hero-stage" aria-hidden="true">
          <img className="hero-stage-image hero-image-a" src="/portfolio-pages/page-07.jpg" alt="" />
          <img className="hero-stage-image hero-image-b" src="/portfolio-pages/page-12.jpg" alt="" />
          <div className="stage-card stage-main">
            <span>2025 Portfolio</span>
            <strong>Brand &amp; UX Designer crafting experiences that drive business impact.</strong>
          </div>
          <div className="stage-card stage-note">
            <span>Currently</span>
            <strong>Solving problems with visual solutions</strong>
          </div>
          <div className="stage-ring" />
          <div className="stage-orbit orbit-one" />
          <div className="stage-orbit orbit-two" />
        </div>
      </section>

      <section className="ticker" aria-label="Practice areas">
        <div className="ticker-track">
          {highlights.concat(highlights).map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="intro-grid">
        {introCards.map((card) => (
          <article className="intro-card" key={card.kicker}>
            <p className="section-kicker">{card.kicker}</p>
            <h3 className="intro-card-title">{card.title}</h3>
            <p className="intro-card-copy">{card.copy}</p>
          </article>
        ))}
      </section>

      <section className="work-section" id="work">
        <div className="section-head">
          <p className="section-kicker">Selected work</p>
          <h2>Selected work across UX, digital experience, and brand systems.</h2>
        </div>
        <div className="project-grid project-grid-rich">
          {homeCategories.map((cat) => (
            <article
              className={`project-card accent-${cat.accent} project-card-case-study`}
              key={cat.title}
            >
              <button
                type="button"
                className="project-toggle"
                onClick={() => navigateTo(cat.slug)}
              >
                <div className="project-copy">
                  <div className="project-meta">
                    <span>{cat.number}</span>
                    <p>{cat.category}</p>
                  </div>
                  <h3>{cat.title}</h3>
                  <p>{cat.brief}</p>
                  <div className="project-impact">
                    <span>{cat.ctaLabel}</span>
                    <p>{cat.ctaAction}</p>
                  </div>
                </div>
                <div className="project-preview">
                  <img
                    className="project-preview-image"
                    src={cat.preview}
                    alt={`${cat.title} preview`}
                    loading="lazy"
                  />
                  <span className="project-preview-pill">View work</span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-kicker">Contact</p>
        <h2>For brands that want brilliance, memorability, and a point of view.</h2>
        <p className="contact-copy">
          Available for UI/UX roles, digital experience work, brand building, packaging design, and visual storytelling for teams looking for strategic clarity and a strong point of view.
        </p>
        <div className="contact-links">
          <a href="mailto:work.deeksha07@gmail.com">work.deeksha07@gmail.com</a>
          <a href="tel:+918296079788">+91 82960 79788</a>
          <span>Bengaluru, Karnataka, India</span>
        </div>
      </section>
    </>
  );
}

// ── Brand Strategy page ───────────────────────────────────────────────────────
function BrandStrategyPage() {
  const [activeImage, setActiveImage] = useState({});

  return (
    <div className="project-page">
      <div className="project-page-header">
        <BackToPortfolio />
        <p className="eyebrow">Brand Strategy</p>
        <h1>Branding solutions and packaging design built from the inside out.</h1>
        <p className="project-page-lead">
          Brand strategy is the invisible architecture behind great creative work. It defines who speaks, to whom, in what tone, through what form — and holds every design decision accountable to that position.
        </p>
      </div>

      <section className="approach-section">
        <div className="section-head">
          <p className="section-kicker">The approach</p>
          <h2>How I think before I design.</h2>
        </div>
        <div className="approach-cards">
          <div className="approach-card">
            <span className="approach-number">01</span>
            <h3>Research &amp; Positioning</h3>
            <p>Every brief starts with a question: what does this brand actually stand for? Positioning clarity shapes every downstream decision — from typography to colour to information hierarchy.</p>
          </div>
          <div className="approach-card">
            <span className="approach-number">02</span>
            <h3>Visual Language</h3>
            <p>Developing a vocabulary — colour, type, form, texture — that is specific to the brand and impossible to confuse with a competitor. Consistency builds recognition; distinctiveness builds memory.</p>
          </div>
          <div className="approach-card">
            <span className="approach-number">03</span>
            <h3>Execution &amp; Systems</h3>
            <p>Great brand work scales. From shelf packaging to campaign visuals to digital touchpoints, the system has to hold without constant intervention. I design for replication, not just presentation.</p>
          </div>
        </div>
      </section>

      <section className="bs-projects-section">
        <div className="section-head">
          <p className="section-kicker">Selected work</p>
          <h2>Packaging, identity, and brand communication.</h2>
        </div>
        <div className="bs-projects-list">
          {brandStrategyProjects.map((project, idx) => {
            const activeIdx = activeImage[project.title] ?? 0;
            return (
              <article className={`bs-project accent-${project.accent} ${idx % 2 === 1 ? "bs-project-flip" : ""}`} key={project.title}>
                <div className="bs-project-copy">
                  <p className="section-kicker">{project.kicker}</p>
                  <h2 className="bs-project-title">{project.title}</h2>
                  <p className="bs-project-subtitle">{project.subtitle}</p>
                  <p className="bs-project-desc">{project.description}</p>
                  <div className="bs-project-approach">
                    <p className="section-kicker">Thought process</p>
                    <p className="bs-approach-text">{project.approach}</p>
                  </div>
                  <div className="project-deliverables">
                    {project.deliverables.map((d) => (
                      <span className="chip project-chip" key={d}>{d}</span>
                    ))}
                  </div>
                </div>
                <div className="bs-project-visual">
                  <div className="bs-image-frame">
                    <img
                      src={project.images[activeIdx]}
                      alt={`${project.title} — ${project.subtitle}`}
                      loading="lazy"
                      className="bs-main-image"
                    />
                  </div>
                  {project.images.length > 1 && (
                    <div className="bs-thumbs">
                      {project.images.map((img, i) => (
                        <button
                          key={img}
                          type="button"
                          className={`bs-thumb-btn ${activeIdx === i ? "is-active" : ""}`}
                          onClick={() => setActiveImage((s) => ({ ...s, [project.title]: i }))}
                          aria-label={`View ${project.title} image ${i + 1}`}
                        >
                          <img src={img} alt="" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="page-footer-cta">
        <p className="section-kicker">Next</p>
        <h2>See the commercial work.</h2>
        <div className="page-footer-actions">
          <button type="button" className="button primary" onClick={() => navigateTo(COMMERCIAL_IMPACT_PATH)}>
            View commercial impact
          </button>
          <button type="button" className="button ghost" onClick={() => navigateTo("/")}>
            Back to portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Commercial Impact page ────────────────────────────────────────────────────
function CommercialImpactPage() {
  const [activeImage, setActiveImage] = useState({});

  return (
    <div className="project-page">
      <div className="project-page-header">
        <BackToPortfolio />
        <p className="eyebrow">Commercial Impact</p>
        <h1>High-performance advertising for brands that compete at scale.</h1>
        <p className="project-page-lead">
          Commercial design work lives under pressure. It has to be fast to read, impossible to ignore, and on-brand — all at once. These are projects where design directly drove business outcomes.
        </p>
      </div>

      <div className="ci-projects-list">
        {commercialProjects.map((project) => {
          const activeIdx = activeImage[project.title] ?? 0;
          return (
            <section className={`ci-project accent-${project.accent}`} key={project.title}>
              <div className="ci-project-meta-row">
                <span className="ci-project-number">{project.number}</span>
                <p className="ci-project-category">{project.category}</p>
              </div>
              <div className="ci-project-layout">
                <div className="ci-project-copy">
                  <h2 className="ci-project-title">{project.title}</h2>
                  <p className="ci-project-brief">{project.brief}</p>
                  <div className="ci-project-impact">
                    <p className="section-kicker">What I brought to it</p>
                    <p className="ci-impact-text">{project.impact}</p>
                  </div>
                  <p className="ci-project-details">{project.details}</p>
                  <div className="project-deliverables">
                    {project.deliverables.map((d) => (
                      <span className="chip project-chip" key={d}>{d}</span>
                    ))}
                  </div>
                </div>
                <div className="ci-project-gallery">
                  <div className="ci-hero-image-wrap">
                    <img
                      src={project.images[activeIdx] ?? heroImg}
                      alt={`${project.title} — ${project.category}`}
                      loading="lazy"
                      className="ci-hero-image"
                    />
                  </div>
                  {project.images.length > 1 && (
                    <div className="ci-support-grid">
                      {project.images.map((img, i) => (
                        <button
                          key={img}
                          type="button"
                          className={`ci-thumb-btn ${activeIdx === i ? "is-active" : ""}`}
                          onClick={() => setActiveImage((s) => ({ ...s, [project.title]: i }))}
                          aria-label={`View ${project.title} image ${i + 1}`}
                        >
                          <img src={img} alt="" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="page-footer-cta">
        <p className="section-kicker">Next</p>
        <h2>See the brand strategy work.</h2>
        <div className="page-footer-actions">
          <button type="button" className="button primary" onClick={() => navigateTo(BRAND_STRATEGY_PATH)}>
            View brand strategy
          </button>
          <button type="button" className="button ghost" onClick={() => navigateTo("/")}>
            Back to portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Case Study page (My Nikkah) ───────────────────────────────────────────────
function CaseStudyPage() {
  return (
    <div className="case-study-page">
      <div className="case-study-header">
        <BackToPortfolio />
        <p className="eyebrow">UX Case Study</p>
        <h1>My Nikkah: End to End UX Redesign</h1>
        <p className="case-study-lead">
          An online platform designed to facilitate the process of finding a suitable life partner for individuals within the Muslim community. This offers a modern and convenient approach to matchmaking while adhering to Islamic traditions and values. The app caters to the specific needs and cultural requirements of the Muslim community, ensuring that individuals seeking a life partner can adhere to their faith while also finding compatibility.
        </p>
      </div>

      <section className="case-overview-text">
        <p className="section-kicker">Overview</p>
        <h2>From drop offs and confusion to a guided, trust first experience that converts.</h2>
        <p>
          I approached this as a journey design problem — not just a UI refresh. The focus was on reducing friction at every stage: onboarding, discovery, filtering, and subscription. The result is an experience that is intuitive, emotionally engaging, and optimised for both user trust and monetisation.
        </p>
      </section>

      <section className="user-journey">
        <div className="user-journey-head">
          <p className="section-kicker">User Journey</p>
          <h2>Five stages from first impression to long term loyalty.</h2>
        </div>
        <div className="user-journey-track">
          {userJourneySteps.map((step, i) => (
            <div className="user-journey-step" key={step.stage}>
              <div className="uj-card">
                <div className="uj-icon-wrap">
                  {i === 0 && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 8c0-2.2-1.8-4-4-4H6C3.8 4 2 5.8 2 8v8c0 2.2 1.8 4 4 4h3l3 3 3-3h3c2.2 0 4-1.8 4-4V8z" />
                      <line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="13" y2="14" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                    </svg>
                  )}
                  {i === 3 && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                  {i === 4 && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  )}
                </div>
                <span className="uj-number">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="uj-stage">{step.stage}</h3>
                <p className="uj-desc">{step.description}</p>
              </div>
              {i < userJourneySteps.length - 1 && (
                <div className="uj-connector">
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                    <path d="M0 8h20M14 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="case-visual-gallery">
        <div className="section-head">
          <p className="section-kicker">Visual rollout</p>
          <h2>Desktop and mobile versions across the full user journey.</h2>
          <p className="case-gallery-lead">
            These deliverables show how the redesign spans onboarding, profile discovery, filtering, and subscription, creating a cohesive, trust first experience from start to conversion.
          </p>
        </div>
        <div className="case-visual-group">
          <div className="case-visual-group-head">
            <p className="section-kicker">Desktop</p>
            <h3>Desktop version</h3>
          </div>
          <div className="case-showcase-grid">
            {caseStudyDesktopVisuals.map((visual) => (
              <figure className={`case-media-card case-media-${visual.layout}`} key={visual.title}>
                <img src={visual.src} alt={visual.alt} loading="lazy" />
                <figcaption>
                  <span className="case-media-label">{visual.label}</span>
                  <h3>{visual.title}</h3>
                  <p>{visual.copy}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="case-visual-group">
          <div className="case-visual-group-head">
            <p className="section-kicker">Mobile</p>
            <h3>Mobile version</h3>
          </div>
          <div className="case-showcase-grid case-showcase-mobile">
            {caseStudyMobileVisuals.map((visual) => (
              <figure className={`case-media-card case-media-${visual.layout}`} key={visual.title}>
                <img src={visual.src} alt={visual.alt} loading="lazy" />
                <figcaption>
                  <span className="case-media-label">{visual.label}</span>
                  <h3>{visual.title}</h3>
                  <p>{visual.copy}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-mockups-section">
        <div className="section-head" style={{ maxWidth: "42rem", marginBottom: "2rem" }}>
          <p className="section-kicker">Mobile experience</p>
          <h2>The same journey, adapted for mobile.</h2>
        </div>
        <MobilePhoneMockups />
      </section>

      <section className="case-study-grid">
        <article className="case-card">
          <p className="section-kicker">Problem</p>
          <h3>Users were unsure what to do next — and had no clear reason to pay.</h3>
          <ul className="case-list">
            <li>Users were not guided clearly after sign up, leading to drop offs.</li>
            <li>Profile discovery felt overwhelming and unstructured.</li>
            <li>The platform&apos;s value proposition was not effectively communicated.</li>
            <li>Subscription plans lacked clarity and motivation to upgrade.</li>
          </ul>
          <p className="case-note">
            Core UX problem: users were unsure what to do next and why to pay, creating friction across both engagement and conversion.
          </p>
        </article>

        <article className="case-card">
          <p className="section-kicker">Goal</p>
          <h3>Design an experience that guides, engages, and converts.</h3>
          <div className="chip-group">
            {caseStudyGoals.map((goal) => (
              <span className="chip project-chip" key={goal}>{goal}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="case-study-grid case-study-grid-alt">
        <article className="case-card">
          <p className="section-kicker">Understanding the User</p>
          <h3>Goal oriented users who need trust and clarity before they engage.</h3>
          <ul className="case-list">
            {caseStudyInsights.map((insight) => (
              <li key={insight}>{insight}</li>
            ))}
          </ul>
        </article>

        <article className="case-card">
          <p className="section-kicker">Impact</p>
          <h3>Better guidance, stronger discovery, and a subscription experience that converts.</h3>
          <ul className="case-list">
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="case-process">
        <div className="section-head">
          <p className="section-kicker">Design approach</p>
          <h2>Five focused decisions that reduced friction and improved the full user journey.</h2>
        </div>
        <div className="case-steps">
          <article className="case-step-card">
            <span>01</span>
            <h3>Structured onboarding experience</h3>
            <p>Designed a guided onboarding flow that breaks profile creation into simple, progressive steps — reducing confusion and increasing user readiness for discovery.</p>
          </article>
          <article className="case-step-card">
            <span>02</span>
            <h3>Carousel based content discovery</h3>
            <p>Introduced carousel based interaction so users can swipe through content intuitively. Chunking information into digestible sections reduced cognitive overload and increased engagement.</p>
          </article>
          <article className="case-step-card">
            <span>03</span>
            <h3>Simplified profile discovery</h3>
            <p>Designed a clean grid layout with clear visual hierarchy — highlighting key details like name, age, and location — for faster decisions and improved usability.</p>
          </article>
          <article className="case-step-card">
            <span>04</span>
            <h3>Smart filtering system</h3>
            <p>Added preference based filters aligned with interests, values, and lifestyle — delivering more relevant matches and making the platform feel intelligent and personalised.</p>
          </article>
          <article className="case-step-card">
            <span>05</span>
            <h3>Subscription experience redesign</h3>
            <p>Designed clear tier based plans (Free, Silver, Gold) with value driven features, Popular and Best indicators, and a two step flow to reduce decision friction and guide users toward higher value plans.</p>
          </article>
        </div>
      </section>

      <section className="case-study-grid">
        <article className="case-card">
          <p className="section-kicker">UI Design Decisions</p>
          <h3>Every visual choice was made to build trust and reduce friction.</h3>
          <ul className="case-list">
            {uxDecisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="case-card">
          <p className="section-kicker">Key Takeaway</p>
          <h3>Designing for clarity over complexity significantly improves engagement and conversion.</h3>
          <p className="case-note">
            Guided experiences outperform open-ended exploration. When UX and brand thinking work together, the result is a product that feels worth paying for — and that users actually trust.
          </p>
          <button type="button" className="button primary case-button" onClick={() => navigateTo("/")}>
            Return to portfolio
          </button>
        </article>
      </section>
    </div>
  );
}

// ── App root ──────────────────────────────────────────────────────────────────
function App() {
  useSpotlight();
  const [path, setPath] = useState(window.location.pathname);
  const transitionRef = useRef(null);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    let rid;
    const raf = (time) => { lenis.raf(time); rid = requestAnimationFrame(raf); };
    rid = requestAnimationFrame(raf);
    return () => { lenis.destroy(); cancelAnimationFrame(rid); };
  }, []);

  // Page transition
  useEffect(() => {
    const overlay = transitionRef.current;
    _navigate = (newPath) => {
      if (!overlay) {
        window.history.pushState({}, "", newPath);
        window.dispatchEvent(new PopStateEvent("popstate"));
        return;
      }
      overlay.classList.add("t-in");
      setTimeout(() => {
        window.history.pushState({}, "", newPath);
        window.dispatchEvent(new PopStateEvent("popstate"));
        window.scrollTo(0, 0);
        overlay.classList.remove("t-in");
        overlay.classList.add("t-out");
        setTimeout(() => overlay.classList.remove("t-out"), 540);
      }, 520);
    };
    return () => { _navigate = null; };
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const bar = document.querySelector(".scroll-bar");
    const update = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      if (bar && max > 0) bar.style.transform = `scaleX(${(window.scrollY / max).toFixed(4)})`;
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [path]);

  // Intersection observer for scroll reveals + section split-text
  useEffect(() => {
    const SELECTORS =
      ".intro-card,.project-card,.section-head,.contact-section,.case-card,.case-step-card,.user-journey-step,.case-media-card,.case-overview-text,.user-journey,.case-process,.ticker,.approach-card,.bs-project,.ci-project,.project-page-header,.bs-projects-section .section-head,.page-footer-cta";
    let obs;
    const rid = requestAnimationFrame(() => {
      document.querySelectorAll(".section-head h2").forEach((h2) => {
        if (h2.dataset.split) return;
        h2.dataset.split = "1";
        const words = h2.textContent.trim().split(/\s+/);
        h2.innerHTML = words
          .map((w, i) => `<span class="sw" style="--wi:${i}"><span>${w}</span></span>`)
          .join(" ");
      });

      const els = document.querySelectorAll(SELECTORS);
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const siblings = Array.from(entry.target.parentElement?.children ?? []);
              const i = siblings.indexOf(entry.target);
              entry.target.style.setProperty("--i", Math.max(0, i));
              entry.target.classList.add("in-view");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.04, rootMargin: "0px 0px -24px 0px" }
      );
      els.forEach((el) => {
        if (!el.classList.contains("in-view")) {
          el.classList.add("reveal");
          obs.observe(el);
        }
      });
    });
    return () => {
      cancelAnimationFrame(rid);
      obs?.disconnect();
    };
  }, [path]);

  const isCaseStudyPage = path === UX_CASE_STUDY_PATH;
  const isBrandStrategyPage = path === BRAND_STRATEGY_PATH;
  const isCommercialImpactPage = path === COMMERCIAL_IMPACT_PATH;
  const isSubPage = isCaseStudyPage || isBrandStrategyPage || isCommercialImpactPage;

  return (
    <div className="page-shell">
      <div className="page-transition" ref={transitionRef} aria-hidden="true" />
      <div className="scroll-bar" aria-hidden="true" />
      <IntroVeil />
      <NoiseOverlay />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="topbar">
        <a
          className="brand"
          href="/"
          onClick={(e) => { e.preventDefault(); navigateTo("/"); }}
        >
          Deeksha Kiran
        </a>
        <nav className="nav">
          {isSubPage ? (
            <>
              <a href="/" onClick={(e) => { e.preventDefault(); navigateTo("/"); }}>Portfolio</a>
              {isCaseStudyPage && <a href={UX_CASE_STUDY_PATH}>Case Study</a>}
              {isBrandStrategyPage && <a href={BRAND_STRATEGY_PATH}>Brand Strategy</a>}
              {isCommercialImpactPage && <a href={COMMERCIAL_IMPACT_PATH}>Commercial</a>}
            </>
          ) : (
            <>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
            </>
          )}
        </nav>
      </header>

      <main id="top">
        {isCaseStudyPage && <CaseStudyPage />}
        {isBrandStrategyPage && <BrandStrategyPage />}
        {isCommercialImpactPage && <CommercialImpactPage />}
        {!isSubPage && <HomePage />}
      </main>
    </div>
  );
}

export default App;

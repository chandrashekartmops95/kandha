import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

const UX_CASE_STUDY_PATH = "/projects/my-nikkah-subscription-redesign";

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
    copy:
      "Formally trained in visual arts and sharpened by commercial practice, I approach UI/UX through brand thinking, interaction clarity, and problem solving.",
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

const projects = [
  {
    number: "01",
    title: "My Nikkah",
    category: "UX Project",
    brief:
      "Designed an end to end user experience for a matrimonial platform — improving onboarding, simplifying discovery, and optimising subscription conversion through strategic UX and UI decisions.",
    impact:
      "I approached this as a journey design problem: reducing friction at every stage so users feel guided, trusted, and motivated to engage and upgrade.",
    accent: "gold",
    slug: UX_CASE_STUDY_PATH,
    details:
      "A full UX redesign for a matrimonial platform where trust, guidance, and premium perception directly shape engagement and business outcomes.",
    deliverables: ["End-to-end UX", "Onboarding flow", "Profile discovery", "Subscription redesign"],
  },
  {
    number: "02",
    title: "Tanishq",
    category: "Catalogs + Key Visuals",
    brief: "Designed catalogs and key visuals with a jewel-like sense of rhythm, detail, and restraint that lets luxury breathe.",
    impact: "I wanted the work to feel iconic without relying on visual excess, letting detail, rhythm, and restraint do the heavy lifting.",
    accent: "rose",
    details:
      "Luxury communication built around mood, precision, and editorial pacing, with attention to how product, texture, and light work together.",
    deliverables: ["Catalog design", "Key visuals", "Luxury storytelling", "Print direction"],
    images: ["/portfolio-pages/page-12.jpg"],
  },
  {
    number: "03",
    title: "Reebok",
    category: "B2C Communication",
    brief: "Created customer-facing communication that feels energetic, graphic, and unmistakably in motion.",
    impact: "I translated brand energy into clean, conversion-smart visual culture with clarity and momentum.",
    accent: "ice",
    details:
      "A communication system that brings movement and confidence into every frame while keeping the messaging immediate and product-led.",
    deliverables: ["B2C communication", "Catalog pieces", "Brand energy", "Retail touchpoints"],
    images: ["/portfolio-pages/page-13.jpg", "/portfolio-pages/page-21.jpg"],
  },
  {
    number: "04",
    title: "Britannia",
    category: "Promotional Advertising",
    brief: "Built promotional advertising with instant readability, appetite, and commercial punch.",
    impact: "I move fast when the format demands it, without letting the work slip into anything ordinary.",
    accent: "mint",
    details:
      "Fast-moving ad work designed to feel appetizing, direct, and impossible to miss, while still staying visually disciplined.",
    deliverables: ["Promotional ads", "Retail graphics", "Brand consistency", "Campaign rollout"],
    images: [
      "/portfolio-pages/page-14.jpg",
      "/portfolio-pages/page-15.jpg",
      "/portfolio-pages/page-16.jpg",
      "/portfolio-pages/page-17.jpg",
    ],
  },
  {
    number: "05",
    title: "Flipkart",
    category: "2024 Sale Campaign",
    brief: "Ran a large-scale sale campaign with commanding hierarchy, sharp communication, and real visual stamina.",
    impact: "This project reflects how I build high-pressure design systems that still feel intentional and sharp at scale.",
    accent: "sky",
    details:
      "A campaign ecosystem built for volume and velocity, where every banner, app touchpoint, and promo asset had to stay clear and compelling.",
    deliverables: ["Sale campaign", "E-commerce assets", "Digital rollout", "Scaled visual system"],
    images: [
      "/portfolio-pages/page-18.jpg",
      "/portfolio-pages/page-19.jpg",
      "/portfolio-pages/page-20.jpg",
      "/portfolio-pages/page-22.jpg",
      "/portfolio-pages/page-23.jpg",
    ],
  },
];

const tools = [
  "Figma",
  "Adobe Illustrator",
  "Photoshop",
  "InDesign",
  "After Effects",
  "Premiere Pro",
  "Adobe XD",
];

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
    label: "Profile Discovery — Grid",
    title: "A clean grid that makes browsing feel structured, not overwhelming.",
    copy:
      "Profiles are presented in a scannable grid with key details — name, age, location — surfaced at a glance. Visual hierarchy guides the eye without cluttering the screen.",
    src: "/projects/my-nikkah/discover-grid.png",
    alt: "Full-page grid view of profile discovery on My Nikkah.",
    layout: "full",
  },
  {
    label: "Profile Completion",
    title: "Nudges that help users build trust and improve match quality.",
    copy:
      "Completion prompts are framed as value building moments — improving match relevance and giving users more confidence in the platform.",
    src: "/projects/my-nikkah/profile-completion.png",
    alt: "Profile view with a Complete Your Profile prompt in My Nikkah.",
    layout: "full",
  },
  {
    label: "Subscription",
    title: "The subscription journey leads with value before it ever asks for payment.",
    copy:
      "Clear tier based plans, Popular and Best indicators, and value driven feature highlights guide users toward higher value plans with reduced decision friction.",
    src: "/projects/my-nikkah/pricing-flow-mobile.jpeg",
    alt: "Subscription selection screen for the My Nikkah premium plans.",
    layout: "full",
  },
  {
    label: "Checkout",
    title: "A calmer payment layer that supports the upgrade moment.",
    copy:
      "Payment options, form fields, and order summary are structured to feel trustworthy and unhurried at the point of conversion.",
    src: "/projects/my-nikkah/payment-checkout.jpeg",
    alt: "Payment modal for the My Nikkah subscription checkout flow.",
    layout: "full",
  },
];

const caseStudyMobileVisuals = [
  {
    label: "Mobile system",
    title: "The full journey — onboarding, discovery, and subscription — carried into mobile.",
    copy:
      "Every UX decision was adapted for smaller screens without losing the structure, warmth, or premium feel of the desktop experience.",
    src: "/projects/my-nikkah/mobile-system.jpeg",
    alt: "Mobile mockups showing the My Nikkah experience across several app screens.",
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

let _navigate = null;

function navigateTo(path) {
  if (_navigate) { _navigate(path); return; }
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

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

function MyNikkahPreview({ compact = false }) {
  return (
    <div className={`nikkah-mockup ${compact ? "is-compact" : ""}`}>
      <div className="nikkah-hero-card">
        <div className="nikkah-heading">
          <span>Get ahead of everyone</span>
          <p>Premium subscription packages designed to create trust, clarity, and stronger intent to pay.</p>
        </div>
        <div className="nikkah-credit-card gold" />
        <div className="nikkah-credit-card silver" />
      </div>
      <div className="nikkah-plan-grid">
        <div className="nikkah-plan">
          <span className="nikkah-plan-title">Free</span>
          <p>Match, chat, marry</p>
        </div>
        <div className="nikkah-plan is-popular">
          <span className="nikkah-plan-badge">Popular</span>
          <span className="nikkah-plan-title">Silver</span>
          <p>Unlimited likes, rematches, and visibility</p>
        </div>
        <div className="nikkah-plan is-best">
          <span className="nikkah-plan-badge">Best</span>
          <span className="nikkah-plan-title">Gold</span>
          <p>Full premium experience with prioritized engagement</p>
        </div>
      </div>
      <div className="nikkah-payment">
        <div className="nikkah-tabs">
          <span className="nikkah-tab is-active">Silver</span>
          <span className="nikkah-tab">Gold</span>
        </div>
        <div className="nikkah-prices">
          <span>1 Day</span>
          <span>$6</span>
          <span>1 Week</span>
          <span>$13</span>
          <span>1 Month</span>
          <span>$26</span>
        </div>
      </div>
    </div>
  );
}

function HomePage({
  openProject,
  selectedImageByProject,
  setOpenProject,
  setSelectedImageByProject,
}) {
  // Hero stage 3D tilt
  useEffect(() => {
    const stage = document.querySelector(".hero-stage");
    if (!stage) return;
    const target = { rx: 0, ry: 0 };
    const curr = { rx: 0, ry: 0 };
    let rid;
    const lerp = (a, b, n) => a + (b - a) * n;

    const onMove = ({ clientX, clientY }) => {
      const cx = clientX / window.innerWidth - 0.5;
      const cy = clientY / window.innerHeight - 0.5;
      target.rx = cy * -5;
      target.ry = cx * 5;
    };

    const tick = () => {
      curr.rx = lerp(curr.rx, target.rx, 0.05);
      curr.ry = lerp(curr.ry, target.ry, 0.05);
      stage.style.transform = `perspective(1200px) rotateX(${curr.rx}deg) rotateY(${curr.ry}deg)`;
      rid = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rid = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rid);
    };
  }, []);

  // Scroll parallax on hero images
  useEffect(() => {
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
        if (i < resolved || original[i] === " " || original[i] === "x") {
          out += original[i];
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      el.textContent = out;
      if (frame < TOTAL) { frame++; rid = requestAnimationFrame(tick); }
    };
    const t = setTimeout(() => { rid = requestAnimationFrame(tick); }, 500);
    return () => { clearTimeout(t); cancelAnimationFrame(rid); el.textContent = original; };
  }, []);

  // 03 — Image depth parallax on project cards
  useEffect(() => {
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
        img.style.transform = `scale(1.08) translate(${x * -14}px, ${y * -14}px)`;
      };
      const onLeave = () => {
        img.style.transition = "transform 0.55s cubic-bezier(0.16,1,0.3,1)";
        img.style.transform = "";
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanup.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });
    return () => cleanup.forEach((fn) => fn());
  }, []);

  // Magnetic buttons
  useEffect(() => {
    const btns = document.querySelectorAll(".button.primary, .button.ghost");
    const cleanup = [];
    btns.forEach((btn) => {
      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.3;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      };
      const onLeave = () => { btn.style.transform = ""; };
      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      cleanup.push(() => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
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
            <span className="sw" style={{"--wi":0}}><span>Brand</span></span>
            {" "}
            <span className="sw" style={{"--wi":1}}><span>&amp;</span></span>
            {" "}
            <span className="sw" style={{"--wi":2}}><span>UX</span></span>
            {" "}
            <span className="sw" style={{"--wi":3}}><span>designer</span></span>
            <span className="hero-sub"> crafting experiences that drive business impact and solve problems.</span>
          </h1>
          <p className="hero-text">
            From packaging that drives crores in sales to digital experiences designed to convert users.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              Enter the archive
            </a>
            <a className="button ghost" href="#contact">
              Let&apos;s build something loud
            </a>
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
          {projects.map((project) => {
            const isCaseStudy = Boolean(project.slug);
            const isOpen = openProject === project.title;
            return (
              <article
                className={`project-card accent-${project.accent} ${isOpen ? "is-open" : ""} ${isCaseStudy ? "project-card-case-study" : ""}`}
                key={project.title}
              >
                <button
                  type="button"
                  className="project-toggle"
                  onClick={() => {
                    if (isCaseStudy) {
                      navigateTo(project.slug);
                      return;
                    }
                    setOpenProject((current) => (current === project.title ? "" : project.title));
                  }}
                  aria-expanded={isCaseStudy ? undefined : isOpen}
                >
                  <div className="project-copy">
                    <div className="project-meta">
                      <span>{project.number}</span>
                      <p>{project.category}</p>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.brief}</p>
                    <div className="project-impact">
                      <span>{isCaseStudy ? "UX case study" : "Click to expand"}</span>
                      <p>{isCaseStudy ? "Open dedicated project page" : isOpen ? "Close project details" : "Open project details"}</p>
                    </div>
                  </div>
                  <div className="project-preview">
                    {isCaseStudy ? (
                      <img
                        className="project-preview-image"
                        src="/projects/my-nikkah/landing-v2.png"
                        alt="My Nikkah landing page"
                      />
                    ) : (
                      <img
                        className="project-preview-image"
                        src={project.images[selectedImageByProject[project.title] ?? 0]}
                        alt={`${project.title} featured portfolio visual`}
                        loading="lazy"
                      />
                    )}
                    <span className="project-preview-pill">{isCaseStudy ? "View case study" : "View project"}</span>
                  </div>
                </button>

                {!isCaseStudy && isOpen ? (
                  <div className="project-expand">
                    <div className="project-expand-copy">
                      <p className="project-expand-label">Inside the project</p>
                      <p className="project-expand-text">{project.details}</p>
                      <div className="project-deliverables">
                        {project.deliverables.map((item) => (
                          <span className="chip project-chip" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="project-impact project-impact-open">
                        <span>What I brought to it</span>
                        <p>{project.impact}</p>
                      </div>
                    </div>
                    <div className="project-visuals project-visuals-open">
                      <img
                        className="project-main-image"
                        src={project.images[selectedImageByProject[project.title] ?? 0]}
                        alt={`${project.title} featured portfolio visual`}
                        loading="lazy"
                      />
                      {project.images.length > 1 ? (
                        <div className="project-thumbs project-thumbs-clickable">
                          {project.images.map((image, index) => (
                            <button
                              type="button"
                              key={image}
                              className={`project-thumb-button ${(selectedImageByProject[project.title] ?? 0) === index ? "is-active" : ""}`}
                              onClick={() =>
                                setSelectedImageByProject((current) => ({
                                  ...current,
                                  [project.title]: index,
                                }))
                              }
                              aria-label={`View ${project.title} image ${index + 1}`}
                            >
                              <img src={image} alt={`${project.title} portfolio visual ${index + 1}`} loading="lazy" />
                            </button>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
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

function MobilePhoneMockups() {
  return (
    <div className="mobile-mockups-wrap">
      {/* Phone 1: Onboarding */}
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="pscreen-status">
            <span>9:41</span>
            <div className="pscreen-status-icons">
              <span>●●●</span>
            </div>
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
                <div className="pscreen-avatar" style={{background:"linear-gradient(135deg,#c98b2a,#f8c76d)"}} />
                <div className="pscreen-avatar" style={{background:"linear-gradient(135deg,#8b6c42,#d4a96a)"}} />
                <div className="pscreen-avatar" style={{background:"linear-gradient(135deg,#5a4a3a,#9a7a5a)"}} />
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

function CaseStudyPage() {
  return (
    <div className="case-study-page">
      <div className="case-study-header">
        <button type="button" className="back-link" onClick={() => navigateTo("/")}>
          Back to portfolio
        </button>
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
                      <path d="M22 8c0-2.2-1.8-4-4-4H6C3.8 4 2 5.8 2 8v8c0 2.2 1.8 4 4 4h3l3 3 3-3h3c2.2 0 4-1.8 4-4V8z"/>
                      <line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="13" y2="14"/>
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                    </svg>
                  )}
                  {i === 3 && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )}
                  {i === 4 && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
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
                    <path d="M0 8h20M14 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
          <div className="case-showcase-grid">
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
        <div className="section-head" style={{maxWidth:"42rem",marginBottom:"2rem"}}>
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
            <li>The platform's value proposition was not effectively communicated.</li>
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
              <span className="chip project-chip" key={goal}>
                {goal}
              </span>
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

function App() {
  useSpotlight();
  const [path, setPath] = useState(window.location.pathname);
  const [openProject, setOpenProject] = useState("Tanishq");
  const [selectedImageByProject, setSelectedImageByProject] = useState(
    Object.fromEntries(projects.map((project) => [project.title, 0])),
  );
  const transitionRef = useRef(null);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // 01 — Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    let rid;
    const raf = (time) => { lenis.raf(time); rid = requestAnimationFrame(raf); };
    rid = requestAnimationFrame(raf);
    return () => { lenis.destroy(); cancelAnimationFrame(rid); };
  }, []);

  // 02 — Page transition
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

  // 05 — Scroll progress bar
  useEffect(() => {
    const bar = document.querySelector(".scroll-bar");
    const update = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      if (bar && max > 0) bar.style.transform = `scaleX(${(window.scrollY / max).toFixed(4)})`;
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [path]);

  useEffect(() => {
    const SELECTORS =
      ".intro-card,.project-card,.section-head,.contact-section,.case-card,.case-step-card,.user-journey-step,.case-media-card,.case-overview-text,.user-journey,.case-process,.ticker";
    let obs;
    const rid = requestAnimationFrame(() => {
      // 04 — Section heading split-text
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
        { threshold: 0.06, rootMargin: "0px 0px -32px 0px" }
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
          onClick={(event) => {
            event.preventDefault();
            navigateTo("/");
          }}
        >
          Deeksha Kiran
        </a>
        <nav className="nav">
          {isCaseStudyPage ? (
            <>
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo("/");
                }}
              >
                Portfolio
              </a>
              <a href={UX_CASE_STUDY_PATH}>Case Study</a>
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
        {isCaseStudyPage ? (
          <CaseStudyPage />
        ) : (
          <HomePage
            openProject={openProject}
            selectedImageByProject={selectedImageByProject}
            setOpenProject={setOpenProject}
            setSelectedImageByProject={setSelectedImageByProject}
          />
        )}
      </main>
    </div>
  );
}

export default App;

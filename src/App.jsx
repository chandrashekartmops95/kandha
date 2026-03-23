import { useEffect, useState } from "react";

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
      "Redesigned the subscription experience to simplify decision-making and strategically drive users toward higher-value plans, improving conversion potential and perceived premium value.",
    impact:
      "I treated this as a conversion and perception problem, using structure, hierarchy, and premium cues to make plan decisions easier and more persuasive.",
    accent: "gold",
    slug: UX_CASE_STUDY_PATH,
    details:
      "A UX-led subscription redesign for a marriage platform where trust, clarity, and premium perception directly shape business outcomes.",
    deliverables: ["UX audit", "Conversion strategy", "Choice architecture", "Premium UI"],
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
  "Increase paid subscription conversions",
  "Improve clarity of plan value",
  "Push users toward higher revenue tiers",
  "Create a premium, trustworthy experience aligned with the brand",
];

const caseStudyInsights = [
  "Users are emotion-driven but cautious, so trust signals matter as much as pricing",
  "People want clear benefits before committing money",
  "Simple, confident decisions outperform option-heavy flows",
  "Premium design increases perceived credibility",
];

const outcomes = [
  "Increase in plan selection clarity",
  "Higher click-through on the Gold plan through visual hierarchy",
  "Reduced drop-offs at the pricing stage",
  "Improved perceived trust and premium value",
];

const caseStudyVisuals = [
  {
    label: "Desktop landing",
    title: "A premium first impression that makes the product feel worth paying for.",
    copy:
      "The landing experience leans into dark luxury cues, stronger imagery, and clearer calls to action so the product feels credible before users ever reach pricing.",
    src: "/projects/my-nikkah/landing-desktop.jpeg",
    alt: "Laptop mockup showing the My Nikkah desktop landing page.",
    layout: "hero",
  },
  {
    label: "Mobile system",
    title: "The same premium language carried into mobile touchpoints.",
    copy:
      "Core brand cues, content hierarchy, and profile discovery patterns were adapted for smaller screens without losing the sense of polish.",
    src: "/projects/my-nikkah/mobile-system.jpeg",
    alt: "Mobile mockups showing the My Nikkah experience across several app screens.",
    layout: "accent",
  },
  {
    label: "Discovery flow",
    title: "Profile browsing designed to feel immersive and focused.",
    copy:
      "The discovery surface gives more room to the profile itself while keeping actions and utilities secondary until they are needed.",
    src: "/projects/my-nikkah/discover-profile-man.jpeg",
    alt: "Laptop mockup showing a male profile in the My Nikkah discovery experience.",
    layout: "standard",
  },
  {
    label: "Profile completion",
    title: "Prompts that encourage users to build trust and complete their profile.",
    copy:
      "Completion nudges were framed as value-building moments, helping users improve match quality while increasing product confidence.",
    src: "/projects/my-nikkah/discover-profile-woman.jpeg",
    alt: "Laptop mockup showing a female profile with a profile completion prompt in My Nikkah.",
    layout: "standard",
  },
  {
    label: "Checkout",
    title: "A cleaner payment layer that supports the premium upgrade moment.",
    copy:
      "Payment options, form fields, and order summary were structured to feel calmer and more trustworthy at the point of conversion.",
    src: "/projects/my-nikkah/payment-checkout.jpeg",
    alt: "Payment modal for the My Nikkah subscription checkout flow.",
    layout: "full",
  },
];

const uxDecisions = [
  "Used choice architecture to guide users instead of overwhelming them",
  "Applied visual hierarchy to influence revenue-driving behavior",
  "Balanced emotional design in a marriage context with conversion goals",
  "Designed for trust, not just usability",
];

function navigateTo(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
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
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Brand x Digital x Interaction</p>
          <h1>
            Brand &amp; UX designer
            <span> crafting experiences that drive business impact and solve problems.</span>
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
                      <MyNikkahPreview compact />
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

function CaseStudyPage() {
  return (
    <div className="case-study-page">
      <div className="case-study-header">
        <button type="button" className="back-link" onClick={() => navigateTo("/")}>
          Back to portfolio
        </button>
        <p className="eyebrow">UX Case Study</p>
        <h1>My Nikkah - Subscription Experience Redesign</h1>
        <p className="case-study-lead">
          Redesigned the subscription experience to simplify decision-making and strategically drive users toward higher-value plans, improving conversion potential and perceived premium value.
        </p>
      </div>

      <section className="case-study-hero">
        <div className="case-study-hero-copy">
          <p className="section-kicker">Overview</p>
          <h2>From confusing pricing choices to a premium subscription journey designed to convert.</h2>
          <p>
            I approached this as a conversion plus perception problem, not just a UI refresh. The redesign uses hierarchy, choice architecture, and premium visual language to help users make faster, more confident upgrade decisions.
          </p>
        </div>
        <MyNikkahPreview />
      </section>

      <section className="case-visual-gallery">
        <div className="section-head">
          <p className="section-kicker">Visual rollout</p>
          <h2>Responsive premium screens across landing, discovery, and checkout.</h2>
          <p className="case-gallery-lead">
            These deliverables show how the redesign extended beyond pricing into the surrounding product experience, creating a more cohesive and conversion-ready system.
          </p>
        </div>
        <div className="case-showcase-grid">
          {caseStudyVisuals.map((visual) => (
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
      </section>

      <section className="case-study-grid">
        <article className="case-card">
          <p className="section-kicker">Problem</p>
          <h3>Users could not clearly see why they should pay more.</h3>
          <ul className="case-list">
            <li>Value differences between Free, Silver, and Gold were not obvious.</li>
            <li>The pricing structure felt fragmented because plan and duration decisions were split awkwardly.</li>
            <li>There was no strong psychological push toward higher-tier plans.</li>
            <li>Conversion likely dropped at plan selection and payment decision stages.</li>
          </ul>
          <p className="case-note">
            Business problem: low free-to-paid conversion and under-optimization of the highest-value Gold plan.
          </p>
        </article>

        <article className="case-card">
          <p className="section-kicker">Goal</p>
          <h3>Increase conversion while making the experience feel more premium and trustworthy.</h3>
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
          <p className="section-kicker">User Insight</p>
          <h3>Trust and simplicity matter more than feature volume.</h3>
          <ul className="case-list">
            {caseStudyInsights.map((insight) => (
              <li key={insight}>{insight}</li>
            ))}
          </ul>
        </article>

        <article className="case-card">
          <p className="section-kicker">Expected Impact</p>
          <h3>The redesigned experience is expected to increase paid conversions by 20 to 30 percent.</h3>
          <ul className="case-list">
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="case-process">
        <div className="section-head">
          <p className="section-kicker">How value was added</p>
          <h2>Ingenious UX decisions that changed perception and improved conversion potential.</h2>
        </div>
        <div className="case-steps">
          <article className="case-step-card">
            <span>01</span>
            <h3>Simplified decision architecture</h3>
            <p>Structured plans into clear tiers, reduced cognitive load, and used progressive disclosure so users only saw what they needed at the right moment.</p>
          </article>
          <article className="case-step-card">
            <span>02</span>
            <h3>Visual hierarchy for conversion</h3>
            <p>Added Popular and Best tags, gave the Gold plan stronger contrast and weight, and used layout cues to guide attention toward higher-value options.</p>
          </article>
          <article className="case-step-card">
            <span>03</span>
            <h3>Value clarification</h3>
            <p>Reframed features as benefits users actually feel, like control, visibility, and connection, using a cleaner and more scannable checklist system.</p>
          </article>
          <article className="case-step-card">
            <span>04</span>
            <h3>Pricing flow optimization</h3>
            <p>Created a clearer two-step flow: choose the plan first, then choose duration. This reduces overwhelm and improves decision confidence.</p>
          </article>
          <article className="case-step-card">
            <span>05</span>
            <h3>Premium experience design</h3>
            <p>Used a dark theme, gold accents, structured cards, and a cleaner Continue to Pay action so the product feels premium enough to deserve payment.</p>
          </article>
        </div>
      </section>

      <section className="case-study-grid">
        <article className="case-card">
          <p className="section-kicker">Key UX Decisions</p>
          <h3>Designed for trust, not just usability.</h3>
          <ul className="case-list">
            {uxDecisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="case-card">
          <p className="section-kicker">Final Value Add</p>
          <h3>A cleaner flow, stronger premium cues, and a smarter upgrade journey.</h3>
          <p className="case-note">
            The redesign adds value by making plan differences obvious, reducing drop-off risk, and strategically increasing the appeal of higher-revenue tiers without making the experience feel pushy.
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
  const [path, setPath] = useState(window.location.pathname);
  const [openProject, setOpenProject] = useState("Tanishq");
  const [selectedImageByProject, setSelectedImageByProject] = useState(
    Object.fromEntries(projects.map((project) => [project.title, 0])),
  );

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const isCaseStudyPage = path === UX_CASE_STUDY_PATH;

  return (
    <div className="page-shell">
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

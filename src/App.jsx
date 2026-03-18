import { useState } from "react";

const highlights = [
  "Brand worlds",
  "Packaging systems",
  "Campaign visuals",
  "Print stories",
  "Spatial thinking",
];

const experience = [
  {
    year: "Oct 2024 - Present",
    role: "Creative Designer",
    company: "ITC Limited",
    note: "I shape brand expression with precision, taste, and the kind of visual intelligence that makes a large brand feel newly alive.",
  },
  {
    year: "Jan 2023 - Aug 2024",
    role: "Creative Designer",
    company: "MullenLowe Lintas",
    note: "I created campaign systems, retail stories, and launch visuals that turned strategy into imagery people could feel instantly.",
  },
  {
    year: "Dec 2020 - Sep 2021",
    role: "Junior Creative Designer",
    company: "Mass Designs",
    note: "This role sharpened the compositional discipline and design judgment that give my work both elegance and force.",
  },
  {
    year: "Dec 2019 - Mar 2020",
    role: "Design Intern",
    company: "Internship Experience",
    note: "This is where I developed an early instinct for form, storytelling, and the obsessive craft that now defines my visual language.",
  },
];

const projects = [
  {
    number: "01",
    title: "Mysore Sandal Soap",
    category: "Packaging Design",
    brief: "Reimagined the full product range with a system that brings heritage, desirability, and modern shelf impact into one seamless visual language.",
    impact: "I approached packaging as both strategy and seduction, balancing heritage with a sharper, more premium presence.",
    accent: "gold",
    details:
      "A full-range packaging refresh designed to feel richer, more coherent, and more shelf-ready while preserving the familiarity of a heritage brand.",
    deliverables: ["Range redesign", "Packaging system", "Shelf presence", "Visual hierarchy"],
    images: [
      "/portfolio-pages/page-07.jpg",
      "/portfolio-pages/page-08.jpg",
      "/portfolio-pages/page-09.jpg",
      "/portfolio-pages/page-10.jpg",
      "/portfolio-pages/page-11.jpg",
    ],
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
    images: [
      "/portfolio-pages/page-12.jpg",
    ],
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
    images: [
      "/portfolio-pages/page-13.jpg",
      "/portfolio-pages/page-21.jpg",
    ],
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

const practices = [
  "Sketching",
  "Painting",
  "Photography",
  "2D / 3D drawing",
  "Sculpture",
  "Art direction",
];

const process = [
  "Inspiration + research",
  "Ideation + concept development",
  "Design execution",
  "Presentation",
  "Finalization + delivery",
];

const featuredArt = [
  "/portfolio-pages/page-04.jpg",
  "/portfolio-pages/page-05.jpg",
  "/portfolio-pages/page-06.jpg",
];

function App() {
  const [openProject, setOpenProject] = useState(projects[0].title);
  const [selectedImageByProject, setSelectedImageByProject] = useState(
    Object.fromEntries(projects.map((project) => [project.title, 0])),
  );

  return (
    <div className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <header className="topbar">
        <a className="brand" href="#top">
          Deeksha Kiran
        </a>
        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#story">Story</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Creative Designer / Bengaluru / Brand x Culture x Form</p>
            <h1>
              A creative force with
              <span> the instincts of an artist and the precision of a world-class brand designer.</span>
            </h1>
            <p className="hero-text">
              I create visual worlds that feel intelligent, magnetic, and deeply authored. My work
              moves between packaging, campaigns, print, and storytelling, always aiming to push
              past the brief into something more memorable.
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
              <strong>Creative systems with fashion instincts and campaign muscle.</strong>
            </div>
            <div className="stage-card stage-note">
              <span>Currently</span>
              <strong>Creative Designer at ITC Limited</strong>
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
          <article className="intro-card statement">
            <p className="section-kicker">Positioning</p>
            <p>
              Formally trained in visual arts and sharpened by real commercial practice, I bring
              unusual range to every brief: conceptual depth, elegant execution, and the ability to
              make brands feel more vivid, more premium, and more memorable.
            </p>
          </article>
          <article className="intro-card metric">
            <p className="section-kicker">Built for</p>
            <strong>High-stakes brands, ambitious launches, and creative teams that want more than safe design.</strong>
          </article>
          <article className="intro-card metric">
            <p className="section-kicker">Approach</p>
            <strong>Original thinking backed by craft, composure, and an exceptional eye for what makes imagery unforgettable.</strong>
          </article>
        </section>

        <section className="art-strip">
          {featuredArt.map((image, index) => (
            <figure className={`art-frame art-${index + 1}`} key={image}>
              <img src={image} alt={`Portfolio artwork preview ${index + 1}`} loading="lazy" />
            </figure>
          ))}
        </section>

        <section className="work-section" id="work">
          <div className="section-head">
            <p className="section-kicker">Selected work</p>
            <h2>Work that doesn&apos;t just communicate. It transforms the temperature of a brand.</h2>
          </div>
          <div className="project-grid project-grid-rich">
            {projects.map((project) => (
              <article
                className={`project-card accent-${project.accent} ${openProject === project.title ? "is-open" : ""}`}
                key={project.title}
              >
                <button
                  type="button"
                  className="project-toggle"
                  onClick={() =>
                    setOpenProject((current) =>
                      current === project.title ? "" : project.title,
                    )
                  }
                  aria-expanded={openProject === project.title}
                >
                  <div className="project-copy">
                    <div className="project-meta">
                      <span>{project.number}</span>
                      <p>{project.category}</p>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.brief}</p>
                    <div className="project-impact">
                      <span>Click to expand</span>
                      <p>{openProject === project.title ? "Close project details" : "Open project details"}</p>
                    </div>
                  </div>
                    <div className="project-preview">
                      <img
                        className="project-preview-image"
                        src={project.images[selectedImageByProject[project.title] ?? 0]}
                        alt={`${project.title} featured portfolio visual`}
                        loading="lazy"
                      />
                    <span className="project-preview-pill">
                      {openProject === project.title ? "Expanded view" : "View case study"}
                    </span>
                  </div>
                </button>

                {openProject === project.title ? (
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
                              className={`project-thumb-button ${
                                (selectedImageByProject[project.title] ?? 0) === index
                                  ? "is-active"
                                  : ""
                              }`}
                              onClick={() =>
                                setSelectedImageByProject((current) => ({
                                  ...current,
                                  [project.title]: index,
                                }))
                              }
                              aria-label={`View ${project.title} image ${index + 1}`}
                            >
                              <img
                                src={image}
                                alt={`${project.title} portfolio visual ${index + 1}`}
                                loading="lazy"
                              />
                            </button>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="section-head story-head">
            <p className="section-kicker">Trajectory</p>
            <h2>A career shaped in demanding rooms where taste, speed, and imagination all had to coexist.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.year}`}>
                <p className="timeline-year">{item.year}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="craft-section">
          <div className="craft-panel">
            <p className="section-kicker">Toolbox</p>
            <h2>Technical fluency, artistic muscle, and an eye that misses nothing.</h2>
            <div className="chip-group">
              {tools.map((tool) => (
                <span className="chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="craft-panel">
            <p className="section-kicker">Studio practice</p>
            <h2>My analog practice is what gives the digital work its soul.</h2>
            <div className="chip-group">
              {practices.map((item) => (
                <span className="chip alt" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="section-head">
            <p className="section-kicker">Process</p>
            <h2>Behind the beauty is rigor. Behind the rigor is real creative instinct.</h2>
          </div>
          <div className="process-rail">
            {process.map((step, index) => (
              <article className="process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="education-strip">
          <div>
            <p className="section-kicker">Education</p>
            <h2>Bachelor of Visual Arts</h2>
            <p>Karnataka Chitrakala Parishath, 2018 - 2022</p>
          </div>
          <div>
            <p className="section-kicker">Earlier foundation</p>
            <h2>Commerce (S.E.B.A)</h2>
            <p>M.E.S Kishor Kendra, 2016 - 2018</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-kicker">Contact</p>
          <h2>For brands that want brilliance, memorability, and a point of view.</h2>
          <p className="contact-copy">
            Available for full-time creative roles, collaborations, campaigns, packaging systems,
            and visual storytelling for teams looking for brilliance, memorability, and a strong
            point of view.
          </p>
          <div className="contact-links">
            <a href="mailto:work.deeksha07@gmail.com">work.deeksha07@gmail.com</a>
            <a href="tel:+918296079788">+91 82960 79788</a>
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

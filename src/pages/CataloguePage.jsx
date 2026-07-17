import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";

const SERIES = [
  {
    id: "genius-term",
    title: "Genius Term Book Series",
    base: "covers-front",
    folder: "Genius  Term Book Series",
    isTermBook: true,
    books: ["LKG - Term 1.png", "LKG - Term 2.png", "LKG _ Term 3.png"],
  },
  {
    id: "genius-term-hindi",
    title: "Genius Term Book Series with Hindi",
    base: "covers-front",
    folder: "Genius Term Book Series  with Hindi",
    isTermBook: true,
    books: [
      "LKG Term - 1.jpg",
      "LKG Term - 2.png",
      "LKG Term - 3.png",
      "UKG Term - 1.jpg",
      "UKG Term - 2.jpg",
      "UKG Term - 3.jpg",
    ],
  },
  {
    id: "mugil-textbook",
    title: "Mugil Tamil Textbook",
    base: "covers-front",
    folder: "Mugil Tamil Textbook",
    isTermBook: false,
    books: [
      "Class 1.png",
      "Class 2.png",
      "Class 3.png",
      "Class 4.png",
      "Class 5.png",
      "Class 6.jpg",
      "Class 7.jpg",
      "Class 8.jpg",
    ],
  },
  {
    id: "mugil-grammar",
    title: "Mugil Tamil Grammar",
    base: "covers-front",
    folder: "Mugil Tamil Grammar",
    isTermBook: false,
    books: [
      "Class 1.png",
      "Class 2.png",
      "Class 3.png",
      "Class 4.png",
      "Class 5.png",
      "Class 6.png",
      "Class 7.png",
      "class 8.png",
    ],
  },
  {
    id: "mugil-handwriting",
    title: "Mugil Tamil Handwriting",
    base: "covers-front",
    folder: "Mugil Tamil Handwriting",
    isTermBook: false,
    books: ["Class 1.png", "Class 2.png", "Class 3.png", "Class 4.png", "Class 5.png"],
  },
  {
    id: "moral-value",
    title: "Moral Value Education",
    base: "covers-final",
    folder: "Moral Value Education",
    isTermBook: false,
    books: [
      "Class 1.png",
      "Class 2.png",
      "Class 3.png",
      "Class 4.png",
      "Class 5.png",
      "Class 6.png",
      "Class 7.png",
      "Class 8.png",
    ],
  },
  {
    id: "tech-whiz",
    title: "Tech Whiz Computer",
    base: "covers-final",
    folder: "Tech Whiz Computer",
    isTermBook: false,
    books: [
      "Class 1.png",
      "Class 2.png",
      "Class 3.png",
      "Class 4.png",
      "Class 5.png",
      "Class 6.png",
      "Class 7.png",
      "Class 8.png",
    ],
  },
  {
    id: "art-craft-strokes",
    title: "Art and Craft Series — Strokes",
    base: "covers-final",
    folder: "Art and craft - Strokes",
    isTermBook: false,
    books: ["Class 1.png", "Class 2.png", "Class 3.png", "Class 4.png", "Class 5.png"],
  },
  {
    id: "art-craft",
    title: "Art and Craft Series — Young Artist",
    base: "covers",
    folder: "art and craft books",
    isTermBook: false,
    books: [
      "art and craft A.png",
      "art and craft B.png",
      "art and craft C.png",
      "art and craft 1.png",
      "art and craft 2.png",
      "art and craft 3.png",
      "art and craft 4.png",
      "art and craft 5.png",
    ],
  },
];

function imgSrc(base, folder, file) {
  const parts = [base, folder, file].filter(Boolean);
  return "/" + parts.map(encodeURIComponent).join("/");
}

function caption(file) {
  const name = file.replace(/\.[^.]+$/, "").replace(/_/g, " - ").trim();
  return name.replace(/^art and craft\s+/i, "Level ");
}

export default function CataloguePage() {
  const [activeId, setActiveId] = useState(SERIES[0].id);
  const active = SERIES.find((s) => s.id === activeId);

  return (
    <main className="page-shell">
      <SEO
        title="School Book Catalogue | Genius Books"
        description="Browse Genius Books' complete school textbook catalogue for Tamil Nadu — term books, Tamil textbooks, grammar, and handwriting from LKG to Class 8."
        canonical="/catalogue"
        breadcrumbs={[{ name: "Catalogue", path: "/catalogue" }]}
      />

      <section className="page-hero catalogue-hero">
        <Reveal>
          <p className="eyebrow">Legacy Collection</p>
          <h1>
            School book publishing <span>redefined.</span>
          </h1>
          <p className="hero-text narrow">
            Review books by class and subject, and help your school shortlist the right series for the academic year.
          </p>
        </Reveal>
      </section>

      <section className="section catalogue-layout">
        {/* ── Sidebar ── */}
        <aside className="catalogue-sidebar">
          <p className="series-nav-label">Series</p>
          <nav className="series-nav">
            {SERIES.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`series-nav-item${activeId === s.id ? " active" : ""}`}
                onClick={() => setActiveId(s.id)}
              >
                <span className="series-nav-dot" />
                <span className="series-nav-text">{s.title}</span>
                {s.isTermBook && <span className="series-nav-badge">Digital</span>}
              </button>
            ))}
          </nav>
          <div className="series-nav-footer">
            <p>{SERIES.reduce((n, s) => n + s.books.length, 0)} titles across {SERIES.length} series</p>
          </div>
        </aside>

        {/* ── Main ── */}
        <div className="catalogue-main">
          <div className="covers-heading-row">
            <SectionHeading eyebrow="Series" title={active.title} />
            {active.isTermBook && (
              <div className="digital-badge">
                <span className="digital-pulse" />
                Digital content available
              </div>
            )}
          </div>

          <div className="covers-grid">
            {active.books.map((file, i) => (
              <Reveal key={file} delay={i * 55}>
                <figure className="cover-card">
                  <div className="cover-img-wrap">
                    <img
                      src={imgSrc(active.base, active.folder, file)}
                      alt={`${active.title} — ${caption(file)}`}
                      loading="lazy"
                    />
                  </div>
                  <figcaption>{caption(file)}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

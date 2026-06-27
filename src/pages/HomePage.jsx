import { NavLink } from "react-router-dom";
import Reveal from "../components/Reveal";
import BookMockup from "../components/BookMockup";
import SectionHeading from "../components/SectionHeading";
import MarqueeShelf from "../components/MarqueeShelf";
import SEO from "../components/SEO";
import { catalogueBooks, heroShelves, homeStats, seriesCards, trustPoints } from "../data/siteData";

export default function HomePage() {
  return (
    <main>
      <SEO
        title="School Textbook Publisher in Chennai, Tamil Nadu"
        description="Genius Books – premium school textbook publisher in Chennai, Tamil Nadu. Trusted by 1000+ schools for Tamil, English, Hindi and multi-subject books from LKG to Class 12."
        canonical="/"
      />

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">Established Academic Excellence</p>
          </Reveal>
          <Reveal delay={100}>
            <h1>
              Empowering schools with <span>exceptional</span> educational content
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="hero-text">
              Premium school book publishing for institutions that need well-structured
              textbooks, term books, language series, and teacher-ready learning material.
            </p>
          </Reveal>
          <Reveal className="hero-actions" delay={280}>
            <NavLink className="button button-primary" to="/series">
              Explore Series
            </NavLink>
            <NavLink className="button button-secondary" to="/catalogue">
              View Catalogue
            </NavLink>
          </Reveal>
        </div>
        <Reveal className="hero-visual" delay={180}>
          <div className="hero-stack">
            <div className="hero-img-panel">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80"
                alt="Grand academic library with towering bookshelves and elegant architecture"
              />
              <div className="school-scene__card school-scene__card--bottom">
                <strong>1000+ Schools</strong>
                <p>Across Tamil Nadu trust us</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <MarqueeShelf items={heroShelves} />

      {/* ── Series grid ─────────────────────────────────── */}
      <section className="section section-soft">
        <SectionHeading
          eyebrow="Core Series"
          title="Series built for real classroom use"
          body="Each collection is positioned around how schools actually buy, teach, revise, and scale books across standards."
          align="center"
        />
        <div className="series-grid">
          {seriesCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className={`series-card accent-${item.accent}`}>
                <p className="card-index">{String(index + 1).padStart(2, "0")}</p>
                <h3>{item.title}</h3>
                <span className="series-scope">{item.scope}</span>
                <p>{item.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Insight layout ──────────────────────────────── */}
      <section className="section insight-layout">
        <Reveal className="insight-visual">
          <div className="insight-img-panel">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80"
              alt="Well-organised school library with rows of educational books"
              loading="lazy"
            />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Story Scroll"
            title="Publishing that supports schools from planning to practice"
            body="Our approach combines curriculum clarity, thoughtful page structure, and presentation that helps teachers and students use books with ease."
          />
          <div className="insight-points">
            {trustPoints.map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <div className="insight-point">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured catalogue ──────────────────────────── */}
      <section className="section section-dark">
        <SectionHeading
          eyebrow="Featured Catalogue"
          title="A catalogue designed for school decision-makers"
          body="Browse subject-wise and class-wise textbook selections prepared for school management, teachers, and academic coordinators."
        />
        <div className="catalogue-strip">
          {catalogueBooks.slice(0, 6).map((book, index) => (
            <Reveal key={book.title} delay={index * 70}>
              <BookMockup {...book} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Stats band ──────────────────────────────────── */}
      <section className="section stats-band" aria-label="Key statistics">
        {homeStats.map((item, index) => (
          <Reveal key={item.label} delay={index * 60}>
            <div className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          </Reveal>
        ))}
      </section>

    </main>
  );
}

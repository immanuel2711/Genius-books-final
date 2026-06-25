import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";
import { philosophy, seriesCards } from "../data/siteData";

export default function SeriesPage() {
  return (
    <main className="page-shell">
      <SEO
        title="Book Series | Tamil, English, Hindi & Term Books for Schools"
        description="Explore Genius Books' school series — Tamil Reader, English Grammar, Hindi, Term Books, Work Books, Art & Craft and Guide Series for Tamil Nadu schools, LKG to Class 12."
        canonical="/series"
        breadcrumbs={[{ name: "Series", path: "/series" }]}
      />
      <section className="page-hero compact">
        <Reveal>
          <p className="eyebrow">Premium Curation</p>
          <h1>Our book <span>series</span></h1>
          <p className="hero-text narrow">
            Explore our school publishing catalogue across language books, term books, work book series, art and craft titles, and guide series — each crafted for classroom confidence.
          </p>
        </Reveal>
      </section>

      <section className="section">
        <div className="feature-banner">
          <Reveal className="feature-banner-copy">
            <SectionHeading
              eyebrow="Guide Series"
              title="Guide Series for classroom and school support"
              body="Dedicated guide books for educators, school coordinators, and institutions that want structured implementation support aligned to the curriculum."
            />
            <Link className="button button-gold" to="/catalogue?series=Guide Series">
              Browse Guide Series
            </Link>
          </Reveal>
          <Reveal className="feature-banner-art" delay={180}>
            <div className="floating-edition">
              <div className="floating-book" />
              <div className="floating-badge">2026 Edition</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="series-grid">
          {seriesCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className={`series-card detailed accent-${item.accent}`}>
                <p className="card-index">{String(index + 1).padStart(2, "0")}</p>
                <h3>{item.title}</h3>
                <span className="series-scope">{item.scope}</span>
                <p>{item.blurb}</p>
                <Link
                  className="scholar-link"
                  to={`/catalogue?series=${encodeURIComponent(item.title)}`}
                >
                  Explore collection →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section philosophy-band">
        {philosophy.map((line, index) => (
          <Reveal key={line} delay={index * 90}>
            <div className="philosophy-chip">{line}</div>
          </Reveal>
        ))}
      </section>
    </main>
  );
}

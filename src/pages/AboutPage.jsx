import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";
import { philosophy } from "../data/siteData";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <SEO
        title="About Us | 30+ Years of School Publishing in Chennai"
        description="Genius Books has published curriculum-aligned school textbooks in Chennai, Tamil Nadu since 1994. Trusted by 500+ schools for our Tamil, English, Hindi and multi-subject series."
        canonical="/about"
        breadcrumbs={[{ name: "About", path: "/about" }]}
      />
      <section className="page-hero about-hero">
        <Reveal>
          <p className="eyebrow">Our Story</p>
          <h1>Our story of <span>academic</span> mastery</h1>
          <p className="hero-text narrow">
            We publish school books with a focus on syllabus relevance, teacher usability, and lasting classroom value — built over three decades of educational publishing in Tamil Nadu.
          </p>
        </Reveal>
      </section>

      <section className="section">
        <div className="story-layout">
          <Reveal>
            <div className="about-img-frame">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80"
                alt="Students engaged in classroom learning with textbooks"
              />
              <div className="about-img-overlay">
                <div className="about-img-badge">
                  <span>Publishing Since</span>
                  <strong>1994 · Chennai</strong>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="story-panel">
              <blockquote className="story-quote">
                "Every page is a pathway to mastery. The books we publish should feel that way in every classroom."
              </blockquote>
              <SectionHeading
                eyebrow="Our Philosophy"
                title="Built around how schools actually learn"
                body="Our publishing philosophy starts with the classroom: clear sequencing, reliable structure, and books that support both teaching and long-term revision."
              />
              <div className="philosophy-list">
                {philosophy.map((item) => (
                  <div key={item} className="philosophy-row">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <Reveal>
          <div className="about-stat-banner">
            <span className="about-stat-number">1000+</span>
            <p className="about-stat-label">Schools across Tamil Nadu trust Genius Books for their curriculum needs.</p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

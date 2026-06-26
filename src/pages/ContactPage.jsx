import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";
import { contactDetails, mapEmbedLink, mapLink } from "../data/siteData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="page-shell">
      <SEO
        title="Contact Us | School Textbook Orders & Partnerships | T.Nagar Chennai"
        description="Contact Genius Books for school textbook orders, bulk purchases or partnerships. T.Nagar, Chennai 600017. Call 044-4850 3975 or email sales@geniusbooks.in. Mon–Fri 9AM–5PM."
        canonical="/contact"
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />
      <section className="page-hero contact-hero">
        <Reveal>
          <p className="eyebrow">School Partnerships</p>
          <h1>Connect with our <span>publishing</span> team</h1>
          <p className="hero-text narrow">
            Reach out for textbook enquiries, school partnerships, bulk orders, catalogue requests, or subject-wise publishing support. Our team will be in touch within one business day.
          </p>
        </Reveal>
      </section>

      <section className="section contact-layout">
        <Reveal>
          <div className="contact-form-panel">
            <SectionHeading
              eyebrow="Enquiry Form"
              title="School and textbook enquiry"
              body="Share your school requirement and our team will respond with the right books, catalogue details, or support."
            />
            {submitted ? (
              <div className="form-success" role="status" aria-live="polite">
                <div className="form-success-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Thank you for your enquiry!</h3>
                <p>Our publishing team will review your requirement and get back to you within 1&ndash;2 business days. We look forward to supporting your school.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="field-group">
                  <label className="form-label" htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    placeholder="e.g. Priya Sundaram"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="field-group">
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="e.g. contact@school.edu.in"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="field-group">
                  <label className="form-label" htmlFor="contact-school">School / Institution Name</label>
                  <input
                    id="contact-school"
                    name="school"
                    placeholder="e.g. Sri Vidya Mandir Hr. Sec. School"
                    autoComplete="organization"
                    required
                  />
                </div>
                <div className="field-group">
                  <label className="form-label" htmlFor="contact-subject">Subject or Book Series</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    placeholder="e.g. Tamil Book Series, Class 5–8"
                  />
                </div>
                <div className="field-group">
                  <label className="form-label" htmlFor="contact-message">Enquiry Details</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us the classes, subjects, or book series your school needs."
                    rows="5"
                  />
                </div>
                <button className="button button-primary" type="submit">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </Reveal>

        <div className="contact-side">
          <Reveal>
            <div className="detail-panel">
              {contactDetails.map((item) => (
                <div key={item.label} className="detail-row">
                  <span>{item.label}</span>
                  {item.href ? (
                    <a className="detail-link" href={item.href}>
                      <strong>{item.value}</strong>
                    </a>
                  ) : (
                    <strong>{item.value}</strong>
                  )}
                </div>
              ))}
              <div className="detail-row">
                <span>Direct Line</span>
                <a className="detail-link" href="tel:04448503975">
                  <strong>Call us during business hours for immediate support.</strong>
                </a>
              </div>
              <div className="detail-row">
                <span>Find Us</span>
                <a className="detail-link" href={mapLink} target="_blank" rel="noreferrer">
                  <strong>Jain Akshay Apartment, No 15/8, FO.1, Thirumoorthy Street, T.Nagar, Chennai 600017</strong>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="map-panel">
              <iframe
                className="map-frame"
                src={mapEmbedLink}
                title="Genius Books location — T.Nagar, Chennai"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a className="map-cta" href={mapLink} target="_blank" rel="noreferrer">
                Open in Google Maps &rarr;
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

import { useDeferredValue, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import BookMockup from "../components/BookMockup";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";
import { catalogueBooks } from "../data/siteData";

export default function CataloguePage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [selectedSeries, setSelectedSeries] = useState(searchParams.get("series") || "All");
  const [selectedClassGroup, setSelectedClassGroup] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");

  const deferredQuery = useDeferredValue(query);

  const seriesOptions = useMemo(
    () => ["All", ...new Set(catalogueBooks.map((book) => book.series))],
    [],
  );

  const classOptions = useMemo(
    () => ["All", ...new Set(catalogueBooks.map((book) => book.classGroup))],
    [],
  );

  const subjectOptions = useMemo(
    () => ["All", ...new Set(catalogueBooks.map((book) => book.subject))],
    [],
  );

  const filteredBooks = useMemo(() => {
    const search = deferredQuery.trim().toLowerCase();

    return catalogueBooks.filter((book) => {
      const matchesSearch =
        !search ||
        [book.title, book.series, book.classLabel, book.subject, book.kicker]
          .join(" ")
          .toLowerCase()
          .includes(search);

      const matchesSeries =
        selectedSeries === "All" || book.series === selectedSeries;

      const matchesClass =
        selectedClassGroup === "All" || book.classGroup === selectedClassGroup;

      const matchesSubject =
        selectedSubject === "All" || book.subject === selectedSubject;

      return matchesSearch && matchesSeries && matchesClass && matchesSubject;
    });
  }, [deferredQuery, selectedClassGroup, selectedSeries, selectedSubject]);

  const resetFilters = () => {
    setQuery("");
    setSelectedSeries("All");
    setSelectedClassGroup("All");
    setSelectedSubject("All");
  };

  return (
    <main className="page-shell">
      <SEO
        title="School Book Catalogue | 24+ Titles by Class & Subject"
        description="Browse Genius Books' complete school textbook catalogue for Tamil Nadu. Filter 24+ curriculum-aligned titles by series, class group or subject — from LKG to Class 12."
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
        <div className="catalogue-sidebar">
          <SectionHeading
            eyebrow="Browse"
            title="Working catalogue filters"
            body="Browse wrappers by series, class group, subject, or keyword to quickly narrow books for your school."
          />
          <div className="filter-stack">
            <div className="filter-block">
              <strong>Search books</strong>
              <input
                className="filter-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title, class, subject..."
              />
            </div>
            <div className="filter-block">
              <strong>Series</strong>
              <div className="filter-options">
                {seriesOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`filter-chip${selectedSeries === option ? " active" : ""}`}
                    onClick={() => setSelectedSeries(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-block">
              <strong>Class group</strong>
              <div className="filter-options">
                {classOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`filter-chip${selectedClassGroup === option ? " active" : ""}`}
                    onClick={() => setSelectedClassGroup(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-block">
              <strong>Subject</strong>
              <div className="filter-options">
                {subjectOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`filter-chip${selectedSubject === option ? " active" : ""}`}
                    onClick={() => setSelectedSubject(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button type="button" className="button button-secondary filter-reset" onClick={resetFilters}>
            Clear filters
          </button>
        </div>
        <div className="catalogue-main">
          <div className="catalogue-toolbar">
            <p>
              Showing <strong>{filteredBooks.length}</strong> titles
            </p>
            <span>Filtered by series, class group, and subject</span>
          </div>
          {filteredBooks.length ? (
            <div className="catalogue-grid">
              {filteredBooks.map((book, index) => (
                <Reveal key={`${book.series}-${book.title}`} delay={(index % 6) * 70}>
                  <BookMockup {...book} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No books match this filter</h3>
              <p>Try another series, class group, or clear the search to view all wrappers.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

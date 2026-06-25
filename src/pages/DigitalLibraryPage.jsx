import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { contentApi } from "../api";
import Reveal from "../components/Reveal";
import VideoModal from "../components/VideoModal";
import SEO from "../components/SEO";

function cleanLabel(filename) {
  return filename
    .replace(/\.mp4$/i, "")
    .replace(/_/g, " ")
    .trim();
}

export default function DigitalLibraryPage() {
  const { user, authLoading } = useAuth();
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null); // { url, title }
  const [urlLoading, setUrlLoading] = useState(false);

  useEffect(() => {
    contentApi
      .getCatalog()
      .then(({ data }) => {
        setCatalog(data);
        setSelectedClass(data[0]?.classGroup ?? null);
        setSelectedTerm(data[0]?.terms[0]?.term ?? null);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const currentClass = catalog.find((c) => c.classGroup === selectedClass);
  const currentTerm = currentClass?.terms.find((t) => t.term === selectedTerm);

  function selectClass(classGroup) {
    setSelectedClass(classGroup);
    const cls = catalog.find((c) => c.classGroup === classGroup);
    setSelectedTerm(cls?.terms[0]?.term ?? null);
  }

  async function handleVideoClick(video) {
    if (!user) return;
    setUrlLoading(true);
    try {
      const { data } = await contentApi.getVideoUrl(selectedClass, selectedTerm, video.filename);
      setActiveVideo({ url: data.url, title: cleanLabel(video.filename) });
    } catch (err) {
      console.error("Failed to get video URL:", err);
    } finally {
      setUrlLoading(false);
    }
  }

  // Wait for session cookie verification before rendering gated content
  if (authLoading) {
    return <main className="page-shell"><p className="library-loading">Loading…</p></main>;
  }

  return (
    <main className="page-shell">
      <SEO
        title="Digital Library | Interactive Video Lessons for LKG & UKG Schools"
        description="Free digital library for registered Tamil Nadu schools — interactive video lessons for every page of LKG and UKG books across all 3 terms. Register your school in 30 seconds."
        canonical="/library"
        breadcrumbs={[{ name: "Digital Library", path: "/library" }]}
      />
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="library-hero">
        <div className="library-hero-content">
          <Reveal>
            <p className="eyebrow library-eyebrow">Genius Books Digital Library</p>
            <h1 className="library-hero-h1">
              Your school's <span>learning hub</span>
            </h1>
            <p className="library-hero-sub">
              Interactive videos for every page — LKG and UKG, all three terms, curated for Tamil
              Nadu schools.
            </p>
          </Reveal>
          {!user && (
            <Reveal delay={150}>
              <div className="library-hero-cta-row">
                <Link to="/register" className="button button-gold">Register Free</Link>
                <Link to="/login" className="library-signin-link">Already registered →</Link>
              </div>
            </Reveal>
          )}
          {user && (
            <Reveal delay={150}>
              <p className="library-welcome">
                Welcome back, <strong>{user.name}</strong>
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── Gate banner (guests only) ─────────────────── */}
      {!user && (
        <div className="library-gate">
          <div className="library-gate-icon">🔒</div>
          <h2>Register to access the library</h2>
          <p>
            Enter your name and school — takes 30 seconds to unlock all LKG &amp; UKG videos. No
            card required.
          </p>
          <div className="library-gate-actions">
            <Link to="/register" className="button button-primary">Register free</Link>
            <Link to="/login" className="button button-secondary">Sign in</Link>
          </div>
        </div>
      )}

      {/* ── Controls ─────────────────────────────────── */}
      {!loading && catalog.length > 0 && (
        <div className="library-controls">
          <div className="lib-tab-group">
            {catalog.map((cls) => (
              <button
                key={cls.classGroup}
                className={`lib-tab${selectedClass === cls.classGroup ? " active" : ""}`}
                onClick={() => selectClass(cls.classGroup)}
              >
                {cls.classGroup}
                <span className="lib-tab-sub">{cls.label}</span>
              </button>
            ))}
          </div>
          <div className="lib-divider" />
          <div className="lib-tab-group">
            {currentClass?.terms.map((t) => (
              <button
                key={t.term}
                className={`lib-tab${selectedTerm === t.term ? " active" : ""}`}
                onClick={() => setSelectedTerm(t.term)}
              >
                {t.label}
                <span className="lib-tab-sub">{t.videoCount} videos</span>
              </button>
            ))}
          </div>
          <span className="library-count">{currentTerm?.videoCount ?? 0} videos</span>
        </div>
      )}

      {/* ── Video grid ───────────────────────────────── */}
      <section className="library-section">
        {loading && <p className="library-loading">Loading content…</p>}

        {!loading && currentTerm && (
          <div className="library-class-block">
            <h2 className="library-class-heading">
              {currentClass?.label} <span>{currentTerm.label}</span>
            </h2>
            <div className="library-grid">
              {currentTerm.videos.map((video, i) => (
                <Reveal key={video.filename} delay={i * 40}>
                  <VideoCard
                    video={video}
                    user={user}
                    loading={urlLoading}
                    onClick={() => handleVideoClick(video)}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── Video Modal ──────────────────────────────── */}
      {activeVideo && (
        <VideoModal
          url={activeVideo.url}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </main>
  );
}

function VideoCard({ video, user, loading, onClick }) {
  const label = cleanLabel(video.filename);

  return (
    <div className="book-lib-card">
      <div className="book-lib-cover accent-navy video-card-cover">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          width="36"
          height="36"
          className="video-card-icon"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
        </svg>
        {!user && (
          <div className="book-lib-locked">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
        )}
      </div>
      <div className="book-lib-body">
        <p className="book-lib-subject">Video</p>
        <h3 className="book-lib-title">{label}</h3>
        {user ? (
          <button
            className="book-lib-btn book-lib-btn-preview"
            onClick={onClick}
            disabled={loading}
          >
            {loading ? "Loading…" : "▶ Play Video"}
          </button>
        ) : (
          <Link to="/register" className="book-lib-btn book-lib-btn-lock">
            🔒 Register to Watch
          </Link>
        )}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navigation } from "../data/siteData";
import ScrollMeter from "./ScrollMeter";
import { useAuth } from "../context/AuthContext";

export default function SiteLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate("/");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollMeter />
      <header className="topbar">
        <NavLink className="brand" to="/" onClick={closeMenu}>
          <img src="/logo.png" alt="Genius Books" className="brand-logo" />
        </NavLink>

        <nav
          className={`nav-links${menuOpen ? " open" : ""}`}
          aria-label="Primary"
          id="primary-nav"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}${item.to === "/library" ? " nav-link-library" : ""}`
              }
            >
              {item.to === "/library" ? (
                <>
                  Digital Library
                  <span className="nav-library-badge">VIDEOS</span>
                </>
              ) : item.label}
            </NavLink>
          ))}
        </nav>

        {user ? (
          <div className="user-menu">
            <div className="user-avatar-chip" aria-hidden="true">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <span className="user-school-name">{user.name}</span>
            <button className="user-signout" onClick={handleLogout}>Sign out</button>
          </div>
        ) : (
          <NavLink className="button button-primary topbar-cta" to="/contact">
            Partner with Us
          </NavLink>
        )}

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </header>

      {menuOpen && (
        <div
          className="nav-backdrop open"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <span id="main-content" tabIndex={-1} />
      <Outlet />

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand-block">
            <img src="/logo.png" alt="Genius Books" className="footer-brand-logo" />
            <p className="footer-copy">
              Premium school book publishing for institutions that value dependable
              textbooks, structured series, and classroom-ready learning resources.
            </p>
            <div className="footer-seal">
              <span>Educational Publishing</span>
              <strong>Trusted by Schools</strong>
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Explore</p>
            <div className="footer-links footer-links-column">
              {navigation.map((item) => (
                <NavLink key={item.to} to={item.to}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Contact</p>
            <div className="footer-contact-list">
              <a href="mailto:sales@geniusbooks.in">sales@geniusbooks.in</a>
              <a href="tel:04448503975">044-4850 3975</a>
              <p>Mon-Fri &bull; 9 AM to 5 PM</p>
              <p>
                Jain Akshay Apartment, No 15/8, FO.1,
                <br />
                Thirumoorthy Street, T.Nagar,
                <br />
                Chennai 600017
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-note">&copy; 2026 Genius Books. All rights reserved.</p>
          <p className="footer-note">Premium School Book Publishing &middot; Chennai, India</p>
        </div>
      </footer>
    </div>
  );
}

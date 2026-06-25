import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navigation } from "../data/siteData";
import ScrollMeter from "./ScrollMeter";
import { useAuth } from "../context/AuthContext";

export default function SiteLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div className="site-shell">
      <ScrollMeter />
      <header className="topbar">
        <NavLink className="brand" to="/">
          Genius Books
        </NavLink>
        <nav className="nav-links" aria-label="Primary">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
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
            <div className="user-avatar-chip">
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
      </header>
      <Outlet />
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand-block">
            <p className="footer-brand">Genius Books</p>
            <p className="footer-copy">
              Premium school book publishing for institutions that value dependable
              textbooks, structured series, and classroom-ready learning resources.
            </p>
            <div className="footer-seal">
              <span>Educational Publishing</span>
              <strong>Trusted by Schools</strong>
            </div>
            <div className="social-links">
              <a className="social-link" href="#" aria-label="Facebook" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a className="social-link" href="#" aria-label="Instagram" rel="noreferrer">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="2" stroke-linecap="round"/></svg>
              </a>
              <a className="social-link" href="#" aria-label="LinkedIn" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a className="social-link" href="#" aria-label="YouTube" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
              </a>
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
              <p>Mon-Fri • 9 AM to 5 PM</p>
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
          <p className="footer-note">© 2026 Genius Books. All rights reserved.</p>
          <p className="footer-note">Premium School Book Publishing · Chennai, India</p>
        </div>
      </footer>
    </div>
  );
}

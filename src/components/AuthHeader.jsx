import { Link, NavLink } from "react-router-dom";
import { navigation } from "../data/siteData";

export default function AuthHeader({ mode = "register" }) {
  return (
    <header className="auth-topbar-bar">
      <Link to="/" className="brand" style={{ textDecoration: "none" }}>
        Genius Books
      </Link>
      <nav className="auth-topbar-nav" aria-label="Site navigation">
        {navigation.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `auth-topbar-link${isActive ? " active" : ""}${item.to === "/library" ? " lib-special" : ""}`
            }
          >
            {item.to === "/library" ? (
              <>Digital Library <span className="nav-library-badge">VIDEOS</span></>
            ) : item.label}
          </NavLink>
        ))}
      </nav>
      <div className="auth-topbar-cta">
        {mode === "register" ? (
          <Link to="/login" className="button button-secondary auth-topbar-btn">
            Sign In
          </Link>
        ) : (
          <Link to="/register" className="button button-primary auth-topbar-btn">
            Register Free
          </Link>
        )}
      </div>
    </header>
  );
}

import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

import { FaBars } from "react-icons/fa";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Explore from "./pages/Explore.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const contactRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-links-wrap">
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
            <h1>Genius Books</h1>
          </div>

          {/* Hamburger */}
          <FaBars className="hamburger" onClick={() => setShowMenu(!showMenu)} />

          {/* Desktop Links */}
          <ul className="nav-links desktop">
            <li onClick={() => navigate("/explore")}>Our Books</li>
            <li>
              <a href="/#contact">Contact Us</a>
            </li>
          </ul>

          {/* Mobile Menu */}
          {showMenu && (
            <ul className="nav-links mobile">
              <li>
                <a href="/#contact" onClick={() => setShowMenu(false)}>
                  Contact Us →
                </a>
              </li>
              <li
                onClick={() => {
                  setShowMenu(false);
                  navigate("/explore");
                }}
              >
                Our Books →
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Empowering Education, One Book at a Time</h1>
        <p>
          At Genius Book Publishing, we craft comprehensive and engaging
          learning materials tailored for schools and students.
        </p>
        <div className="hero-buttons">
          <button className="btn-filled" onClick={() => navigate("/explore")}>
            Explore Our Books
          </button>
          <a href="/#contact" className="btn-outline">
            Contact Us
          </a>
        </div>
      </header>

      {/* Scrolling Images (Top) */}
      <div className="scrolling-images">
        <div className="scrolling-track">
          <img src="/Term/1.png" alt="1" />
          <img src="/English/1.png" alt="2" />
          <img src="/Art/1.png" alt="3" />
          <img src="/Work/1.png" alt="A" />
          <img src="/Guide/3.png" alt="B" />
          <img src="/Tamil/1.png" alt="C" />
        </div>
      </div>

      {/* Scrolling Images (Bottom) */}
      <div className="scrolling-images">
        <div className="scrolling-track reverse">
          <img src="/Art/2.png" alt="1" />
          <img src="/Tamil/11.png" alt="2" />
          <img src="/Art/2.png" alt="A" />
          <img src="/English/11.png" alt="B" />
          <img src="/Hindi/8.png" alt="C" />
          <img src="/Tamil/8.png" alt="3" />
        </div>

        {/* Angled Card */}
        <div className="angled-card-container">
          <div className="angled-card">
            <div className="card-content">
              <div className="text">
                <h2>Find the perfect books for your school</h2>
                <p>
                  Browse our wide selection of educational books for all grade
                  levels and subjects.
                </p>
              </div>
              <button className="explore-btn" onClick={() => navigate("/explore")}>
                Explore Our Books
              </button>
            </div>
          </div>
          <div className="angled-card-background"></div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="feature-section">
        <div className="feature-text">
          <div className="feature-block">
            <h2>Wide Range of School Books</h2>
            <p>
              Explore our extensive collection of school books covering various
              subjects and grade levels.
            </p>
          </div>
          <div className="feature-block">
            <h2>Interactive Learning Tools</h2>
            <p>
              Engage students with interactive learning tools such as quizzes,
              games, and multimedia resources.
            </p>
          </div>
          <div className="feature-block">
            <h2>Comprehensive Curriculum Materials</h2>
            <p>
              Our curriculum solutions cover core subjects with high-quality
              content that meets educational standards and classroom needs.
            </p>
          </div>
        </div>
        <div className="feature-image-wrapper">
          <img className="animated-image" src="/Term/1.png" alt="Feature" />
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section" id="contact" ref={contactRef}>
        <p className="contact-subtext">
          Our team is available to assist you during our business hours.
        </p>

        <h2 className="contact-title">Contact Us</h2>

        <p className="contact-description">
          Have a question or want to learn more about our school book publishing
          services? <br />
          Reach out to us using the contact information below.
        </p>

        <div className="contact-boxes">
          <div className="contact-box">
            <MdEmail size={30} style={{ color: "#ff726f" }} />
            <h3>Email</h3>
            <p>
              Feel free to send us an email or give
              <br />
              us a call for any inquiries.
            </p>
            <p className="contact-detail">sales@geniusbooks.in</p>
          </div>

          <div className="contact-box">
            <MdPhone size={30} style={{ color: "#ff726f" }} />
            <h3>Phone</h3>
            <p>We look forward to hearing from you!</p>
            <p className="contact-detail">044-4850 3975</p>
          </div>

          <div className="contact-box">
            <MdLocationOn size={30} style={{ color: "#ff726f" }} />
            <h3>Office</h3>
            <p>
              Business Hours: Monday - Friday,
              <br />
              9:00 AM - 5:00 PM
            </p>
            <p className="contact-detail">
              Jain Akshay Apartment,
              <br />
              No 15/8, FO.1,
              <br />
              Thirumoorthy street, T.Nagar
              <br />
              Chennai 600017
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

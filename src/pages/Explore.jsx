import React, { useState, useEffect, useRef } from "react";
import "./Explore.css";

const Explore = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const bookRef = useRef(null);

  const bookData = {
    "Tamil Book Series": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png"],
    "English Book Series": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png"],
    "Hindi Book Series": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"],
    "Term Book Series": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png"],
    "Work Book Series": ["1.png", "2.png", "3.png"],
    "Art & Craft Series": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"],
    "Guide Series": ["1.png", "2.png", "3.png", "4.png"],
  };

  const getFolderName = (series) => series.split(" ")[0];

  // Auto-select first series on initial load
  useEffect(() => {
    setSelectedSeries(Object.keys(bookData)[0]);
  }, []);

  // Scroll to books only on mobile
  useEffect(() => {
    if (selectedSeries && window.innerWidth <= 768 && bookRef.current) {
      setTimeout(() => {
        bookRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [selectedSeries]);

  return (
    <div className="explore-wrapper">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
          <h1>Genius Books</h1>
        </div>
        <ul className="nav-links">
          <li onClick={() => (window.location.href = "/")}>Home</li>
          <li>
            <a href="/#contact" className="link white-hover">
  Contact Us
</a>

          </li>
        </ul>
      </nav>

      {/* Main Container */}
      <div className="explore-container">
        {/* Side Panel */}
        <div className="side-panel">
          <h2>Explore Series</h2>
          <ul>
            {Object.keys(bookData).map((series, index) => (
              <li
                key={index}
                onClick={() => setSelectedSeries(series)}
                style={{
                  fontWeight: selectedSeries === series ? "bold" : "normal",
                  color: selectedSeries === series ? "#ffa500" : "inherit",
                  cursor: "pointer",
                }}
              >
                {series} →
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop View Book Panel */}
        <div className="main-content desktop-only">
          {selectedSeries && (
            <>
              <h2 style={{ color: "#ffa500", marginBottom: "20px" }}>
                {selectedSeries}
              </h2>
              <div className="book-grid">
                {bookData[selectedSeries].map((imgName, i) => (
                  <div className="book-card" key={i}>
                    <img
                      src={`/${getFolderName(selectedSeries)}/${imgName}`}
                      alt={`${selectedSeries} Book ${i + 1}`}
                      className="book-image"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile View Book Panel (below side panel) */}
      <div className="main-content mobile-only" ref={bookRef}>
        {selectedSeries && (
          <>
            <h2 style={{ color: "#ffa500", marginBottom: "20px" }}>
              {selectedSeries}
            </h2>
            <div className="book-grid">
              {bookData[selectedSeries].map((imgName, i) => (
                <div className="book-card" key={i}>
                  <img
                    src={`/${getFolderName(selectedSeries)}/${imgName}`}
                    alt={`${selectedSeries} Book ${i + 1}`}
                    className="book-image"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Explore;

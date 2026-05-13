import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {

  const [showAbout, setShowAbout] = useState(false);

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT - About Website */}
        <div className="footer-section">
          <h3>Divya Darshan</h3>
          <p>
            Divya Darshan helps you explore temples across India.
            Discover state-wise temples, spiritual places, and
            cultural heritage in one platform.
          </p>
        </div>

        {/* MIDDLE - About Us (Toggle) */}
        <div className="footer-section">
          <h4 onClick={() => setShowAbout(!showAbout)} className="clickable">
            About Us
          </h4>

          {showAbout && (
            <p className="about-text">
              We aim to provide authentic temple information,
              spiritual knowledge, and an easy way to explore
              India's divine heritage. This platform is built
              for educational and devotional purposes.
            </p>
          )}
        </div>

        {/* RIGHT - Navigation */}
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li onClick={() => window.scrollTo(0, 0)}>Home</li>

            <li onClick={() => {
              document.querySelector(".img1")?.scrollIntoView({ behavior: "smooth" });
            }}>
              State-wise Temples
            </li>

            <li onClick={() => {
              document.querySelector(".faq-container")?.scrollIntoView({ behavior: "smooth" });
            }}>
              FAQ
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/prashantchavan07/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Developer
              </a>
            </li>
          </ul>
        </div>

      </div>

      

      {/* DISCLAIMER */}
      <div className="footer-disclaimer">
        <p>
          All temple images and information are collected from Google verified sources.
          This website is created for educational purposes only.
        </p>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Divya_Darshan — Darshan. Devotion. Discovery
        </p>
      </div>

    </footer>
  );
};

export default Footer;
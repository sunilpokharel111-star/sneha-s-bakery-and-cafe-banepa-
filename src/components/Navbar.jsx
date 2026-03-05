import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: scrolled ? "#2C1810" : "#3B1F1F",
    height: scrolled ? "65px" : "90px",
    padding: scrolled ? "0 30px" : "0 50px",
    transition: "all 0.35s ease",
    flexWrap: "wrap"
  };

  const logoStyle = {
    color: "white",
    margin: 0,
    fontSize: scrolled ? "20px" : "28px",
    fontWeight: "600",
    letterSpacing: "1px",
    transition: "all 0.35s ease"
  };

  const linksContainer = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap" // allows wrapping on small screens
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    letterSpacing: "1px",
    position: "relative",
    transition: "0.3s ease"
  };

  return (
    <nav style={navStyle}>
      <h2 style={logoStyle}>Sneha’s Bakery & Cafe</h2>

      {/* Desktop & Mobile Links (always visible) */}
      <div style={linksContainer}>
        {["About", "Menu", "Location", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
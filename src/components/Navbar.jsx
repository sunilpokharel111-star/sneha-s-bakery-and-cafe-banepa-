import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{ 
        ...styles.nav, 
        height: scrolled ? "60px" : "90px", 
        padding: scrolled ? "10px 40px" : "20px 40px",
        transition: "all 0.3s ease"
    }}>
      <h2 style={{ ...styles.logo, fontSize: scrolled ? "20px" : "28px" }}>Cafe Name</h2>
      <div style={styles.links}>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#location">Location</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4A2C2A",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  logo: {
    margin: 0,
    transition: "all 0.3s ease"
  },
  links: {
    display: "flex",
    gap: "20px"
  }
};

export default Navbar;
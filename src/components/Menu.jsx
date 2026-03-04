import React from "react";
import menu1 from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import menu3 from "../assets/menu3.png";

function Menu() {
  return (
    <section id="menu" style={styles.container}>
      <h2 style={styles.title}>Our Menu</h2>

      <div style={styles.imagesContainer}>
        <img src={menu1} alt="Menu 1" style={styles.image} />
        <img src={menu2} alt="Menu 2" style={styles.image} />
        <img src={menu3} alt="Menu 3" style={styles.image} />
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#F8F6F3"
  },
  title: {
    fontSize: "32px",
    marginBottom: "40px",
    letterSpacing: "2px"
  },
  imagesContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px"
  },
  image: {
    width: "300px",   // adjust based on your design
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
  }
};

export default Menu;
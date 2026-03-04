import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

function Gallery() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Gallery</h2>

      <div style={styles.images}>
        <img src={img1} alt="Gallery 1" style={styles.img}/>
        <img src={img2} alt="Gallery 2" style={styles.img}/>
        <img src={img3} alt="Gallery 3" style={styles.img}/>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px",
    textAlign: "center",
    backgroundColor: "#F8F6F3"
  },

  title: {
    fontSize: "32px",
    marginBottom: "40px",
    letterSpacing: "2px"
  },

  images: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },

  img: {
    width: "300px",
    height: "350px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
  }
};

export default Gallery;
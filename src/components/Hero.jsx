import React from "react";

function Hero() {
  return (
    <div style={styles.hero}>
      <h1>Sneha's Bakery & Cafe</h1>
      <p>Not just a café.
A feeling you’ll crave again.</p>

      <a href="#menu">
        <button style={styles.button}>View Menu</button>
      </a>
      <p>Serving fresh moments daily in Banepa, Kavre.</p>
    </div>
  );
}

const styles = {

hero: {
  height: "80vh",
  backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/cafe.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white"
},

button:{
padding:"12px 24px",
fontSize:"18px",
marginTop:"20px",
marginBottom:"20px",
backgroundColor:"#C47A2C",
border:"none",
color:"white",
cursor:"pointer"
}

}

export default Hero;
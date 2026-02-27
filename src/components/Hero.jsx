import React from "react";

function Hero() {
  return (
    <div style={styles.hero}>
      <h1>Cafe Name</h1>
      <p>Best Cafe in Banepa</p>

      <a href="#menu">
        <button style={styles.button}>View Menu</button>
      </a>
    </div>
  );
}

const styles = {

hero: {
height:"80vh",
backgroundImage:"url('/cafe.jpg')",
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
color:"white"
},

button:{
padding:"12px 24px",
fontSize:"18px",
marginTop:"20px",
backgroundColor:"#C47A2C",
border:"none",
color:"white",
cursor:"pointer"
}

}

export default Hero;
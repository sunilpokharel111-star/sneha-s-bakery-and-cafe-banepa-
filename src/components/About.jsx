import React from "react";

function About() {
  return (
    <section id="about" style={styles.container}>

      <h2>About Us</h2>

      <p>
        Newly opened in Banepa, Sneha’s Bakery & Café blends warmth, simplicity, and flavor into one welcoming space.
        Inspired by the calm hills and vibrant local spirit of Kavrepalanchok,
        we offer more than coffee — we offer moments worth slowing down for.
      </p>

    </section>
  );
}

const styles = {

container:{
padding:"60px",
textAlign:"center",
backgroundColor:"#F8F6F3"
}

}

export default About;
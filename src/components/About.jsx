import React from "react";

function About() {
  return (
    <section id="about" style={styles.container}>

      <h2>About Us</h2>

      <p>
        Located in Banepa, our cafe offers fresh coffee,
        bakery items and snacks in a comfortable environment.
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
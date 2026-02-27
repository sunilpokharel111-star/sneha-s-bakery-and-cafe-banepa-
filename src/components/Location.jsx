import React from "react";

function Location() {
  return (

<section id="location" style={styles.container}>

<h2>Location</h2>

<p>Banepa, Kavre</p>

<iframe
title="map"
width="80%"
height="300"
src="https://maps.google.com/maps?q=Banepa&t=&z=13&ie=UTF8&iwloc=&output=embed"
/>

</section>

  );
}

const styles = {

container:{
padding:"60px",
textAlign:"center"
}

}

export default Location;
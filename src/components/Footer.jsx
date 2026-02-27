import React from "react";

function Footer() {
  return (

<div style={styles.footer}>

<p>Cafe Name - Banepa</p>

<p style={styles.small}>
Website developed by Sunil
</p>

</div>

  );
}

const styles = {

footer:{
padding:"20px",
backgroundColor:"#4A2C2A",
color:"white",
textAlign:"center"
},

small:{
fontSize:"14px"
}

}

export default Footer;
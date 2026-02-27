import React from "react";

function Menu() {
  return (

<section id="menu" style={styles.container}>

<h2>Menu</h2>

<div style={styles.menuBox}>

<div>

<h3>Coffee</h3>

<p>Espresso - Rs 120</p>
<p>Cappuccino - Rs 150</p>
<p>Latte - Rs 180</p>

</div>

<div>

<h3>Snacks</h3>

<p>Sandwich - Rs 200</p>
<p>MoMo - Rs 150</p>
<p>Cake - Rs 180</p>

</div>

</div>

</section>

  );
}

const styles = {

container:{
padding:"60px",
textAlign:"center"
},

menuBox:{
display:"flex",
justifyContent:"center",
gap:"100px"
}

}

export default Menu;
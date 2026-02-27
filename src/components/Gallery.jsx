import React from "react";

function Gallery() {
  return (

<div style={styles.container}>

<h2>Gallery</h2>

<div style={styles.images}>

<img src="/img1.jpg" style={styles.img}/>
<img src="/img2.jpg" style={styles.img}/>
<img src="/img3.jpg" style={styles.img}/>

</div>

</div>

  );
}

const styles = {

container:{
padding:"60px",
textAlign:"center",
backgroundColor:"#F8F6F3"
},

images:{
display:"flex",
justifyContent:"center",
gap:"20px"
},

img:{
width:"100%",
height:"auto",
objectFit:"cover"
}

}

export default Gallery;
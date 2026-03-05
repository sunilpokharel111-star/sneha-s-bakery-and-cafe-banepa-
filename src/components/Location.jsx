import React from "react";

function Location() {
  return (
    <section id="location" style={styles.container}>
      <h2 style={styles.title}>Location</h2>
      <p style={styles.text}>Located at the heart of Banepa, Kavre</p>

      <div style={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28277.69905815634!2d85.52450759999999!3d27.63342315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb09481f56b443%3A0x5a6f6795fb0bb920!2sSneha%E2%80%99s%20Bakery%20%26%20Cafe!5e0!3m2!1sen!2snp!4v1772521410589!5m2!1sen!2snp"
          style={styles.iframe}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sneha's Bakery Map"
        ></iframe>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "60px 20px", // smaller padding on sides
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  text: {
    marginBottom: "30px",
    fontSize: "16px",
  },
  mapContainer: {
    width: "100%",
    maxWidth: "800px", // max width on desktop
    margin: "0 auto",
  },
  iframe: {
    width: "100%",     // full width of container
    height: "400px",   // desktop height
    border: 0,
    borderRadius: "12px",
  },

  // Mobile adjustments
  "@media(max-width:768px)": {
    iframe: {
      height: "250px",  // smaller height on mobile
    },
  },
};

export default Location;
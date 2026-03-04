import React from "react";

function Location() {
  return (
    <section id="location" style={styles.container}>
      <h2>Location</h2>
      <p>Located at the heart of Banepa, Kavre</p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28277.69905815634!2d85.52450759999999!3d27.63342315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb09481f56b443%3A0x5a6f6795fb0bb920!2sSneha%E2%80%99s%20Bakery%20%26%20Cafe!5e0!3m2!1sen!2snp!4v1772521410589!5m2!1sen!2snp"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

const styles = {
  container: {
    padding: "60px",
    textAlign: "center",
  },
};

export default Location;
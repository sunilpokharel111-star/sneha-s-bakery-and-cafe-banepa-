import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Logo from "./assets/Logo.png"; // Import the logo

// Dynamically set favicon
const setFavicon = (url) => {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  link.href = url;
};

setFavicon(Logo);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import "@/styles/globals.css"; // Move this import statement to the top
// import Navbar from "../../components/navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

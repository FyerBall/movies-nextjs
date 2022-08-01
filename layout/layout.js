import React from "react";
import Footer from "../components/Footer/index.js";
import Header from "../components/Nav/index.js";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

import React from "react";
import "../assets/css/nav.css";
import "../assets/css/font.css";

function NavLinks(props) {
  return (
    <nav className="header-nav header-font">
      <a href="/">Home</a>
      <a href="/">About Me</a>
      <a href="/">Projects</a>
    </nav>
  );
}

export default NavLinks;

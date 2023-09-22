import React from "react";
import "../assets/css/nav.css";
import "../assets/css/font.css";

function NavLinks(props) {
  return (
    <nav className="header-nav header-font">
      <a href="/viniport/">Home</a>
      <a href="/viniport/about">About Me</a>
      <a href="/viniport/projects">Projects</a>
    </nav>
  );
}

export default NavLinks;

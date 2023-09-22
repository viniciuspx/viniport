import React from "react";
import "../assets/css/nav.css";
import "../assets/css/font.css";
import { Link } from "react-router-dom";

function NavLinks(props) {
  return (
    <nav className="header-nav header-font">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}

export default NavLinks;

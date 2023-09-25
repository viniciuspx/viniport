import React from "react";
import "../assets/css/nav.css";
import "../assets/css/font.css";
import { Link } from "react-router-dom";

function NavLinks(props) {
  return (
    <nav className="header-nav header-font">
      <Link onClick={props.onClick} to="/">Home</Link>
      <Link onClick={props.onClick} to="/about">About Me</Link>
      <Link onClick={props.onClick} to="/projects">Projects</Link>
    </nav>
  );
}

export default NavLinks;

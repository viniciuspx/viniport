import React from "react";
import "../assets/css/nav.css";
import "../assets/css/font.css";
import { Link } from "react-router-dom";

function NavLinks(props) {
  return (
    <nav className="header-nav cutive-mono-regular">
      <Link onClick={props.onClick} to="/">Home</Link>
      <Link onClick={props.onClick} to="/about">About-me</Link>
      <Link onClick={props.onClick} to="/projects">Projects</Link>
      <Link onClick={props.onClick} to="/blog">Blog</Link>
    </nav>
  );
}

export default NavLinks;

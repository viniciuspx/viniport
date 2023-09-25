import React from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";

import "../assets/css/header.css";
import "../assets/css/font.css";

function Header() {
  return (
    <header className="main-header header-font">
      <h2><Link to={"/"} className="main-header-text">Vinícius Gabriel</Link></h2>
      <Nav></Nav>
    </header>
  );
}

export default Header;

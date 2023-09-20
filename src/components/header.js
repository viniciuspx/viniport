import React from "react";
import Nav from "./nav";

import "../assets/css/header.css";
import "../assets/css/font.css";

function Header() {
  return (
    <header className="main-header header-font">
      <h2>
        <a href="/">Vinícius Gabriel</a>
      </h2>
      <Nav></Nav>
    </header>
  );
}

export default Header;

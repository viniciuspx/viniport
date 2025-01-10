import React from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";

import "../assets/css/header.css";
import "../assets/css/font.css";

function Header() {
  return (
    <header className="main-header">
      <h2>
        <Link to={"/"} className="main-header-text cutive-mono-regular-bold">
          vinicius/dev
        </Link>
      </h2>
      <Nav />
    </header>
  );
}

export default Header;

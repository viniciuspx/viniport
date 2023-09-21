import React from "react";

import "../assets/css/card.css";

function Card(props) {
  return (
    <div className="main-container">
      <div className="card">{props.children}</div>
    </div>
  );
}

export default Card;

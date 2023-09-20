import React from "react";

import "../assets/css/sandwich.css";

function Sandwich(props) {
  return (
    <button className="sandwich" onClick={props.onClick}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}

export default Sandwich;

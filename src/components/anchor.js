import React from "react";

function Anchor(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" className={props.className}>
      {props.text}
    </a>
  );
}

export default Anchor;

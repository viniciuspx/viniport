import React from "react";

import "../assets/css/projectCard.css";
import github from "../assets/img/github.png";

import Anchor from "./anchor";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="github-link">
        <img src={github} alt="github-logo" className="github-img"></img>
        <Anchor href={props.link} text={props.text} />
      </div>
      <a href={props.pageLink} target="_blank" rel="noreferrer">
        <img src={props.img} alt="thumbnail" className="thumb"></img>
      </a>
      {props.descText}
      {props.type === "frontend" ? (
        <span className="frontend">Frontend</span>
      ) : (
        <span className="backend">Backend</span>
      )}
    </div>
  );
}

export default ProjectCard;

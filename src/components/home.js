import React from "react";

import Card from "./card";

import "../assets/css/home.css";
import "../assets/css/font.css";

import reactlogo from "../assets/img/react.png";
import jslogo from "../assets/img/javascript.png";
import javalogo from "../assets/img/java.png";
import htmllogo from "../assets/img/html.png";
import csslogo from "../assets/img/css.png";
import githublogo from "../assets/img/github.png";
import linkedinlogo from "../assets/img/linkedin.png";
import mongologo from "../assets/img/mongo.png";
import tslogo from "../assets/img/ts.png";
import twlogo from "../assets/img/tw.png";
import pylogo from "../assets/img/py.png"
import post from "../assets/img/post.png"
import Typewriter from "./typewriter";

function Home() {
  const createHome = () => {
    return (
      <div className="home">
        <div className="presentation">
          <div className="pres-content">
            <Typewriter text="Welcome!,I'm Vinícius :),Web and Fullstack Developer" delay={185} loop={true} />
          </div>
        </div>
        <div className="tech">
          <div className="tech-container">
            <div className="tech-title">
              {"> "} <Typewriter text="Languages and Technologies" delay={0} loop={true} />
            </div>
            <div>
              <img src={pylogo} alt="Python"></img>
              <img src={jslogo} alt="JavaScript"></img>
              <img src={tslogo} alt="TypeScript"></img>
              <img src={htmllogo} alt="html"></img>
              <img src={csslogo} alt="css"></img>
              <img src={reactlogo} alt="react"></img>
              <img src={twlogo} alt="Tailwind"></img>
              <img src={javalogo} alt="Java"></img>
              <img src={mongologo} alt="MongoDB"></img>
              <img src={post} alt="PostgreSQL"></img>
            </div>
          </div>

          <div className="under-paragraph">
            <strong>Fullstack</strong> / <strong>Web</strong> Developer and{" "}
            <em><strong>Computer Scientist</strong></em>. Always open to learning new
            technologies and programming languages, great at code maintenance
            and analysis.
          </div>

          <div className="socials">
            <a
              href="https://github.com/viniciuspx"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githublogo} alt="gh"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/viniciuspx/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinlogo} alt="linkedin"></img>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return <Card children={createHome()} />;
}

export default Home;

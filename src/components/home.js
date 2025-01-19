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
import pylogo from "../assets/img/py.png";
import post from "../assets/img/post.png";
import Typewriter from "./typewriter";

import { IoChevronForwardOutline } from "react-icons/io5";

function Home() {
  const createHome = () => {
    return (
      <div className="home">
        <div className="presentation">
          <div className="pres-content cutive-mono-regular">
            <Typewriter
              text="Welcome!,I'm Vinícius,Back-end/Fullstack DEV"
              delay={185}
              loop={true}
            />
          </div>
        </div>
        <div className="tech">
          <div className="tech-container">
            <div className="tech-title cutive-mono-regular">
              <IoChevronForwardOutline className="chevron"/> Languages and Technologies
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

          <div className="under-paragraph cutive-mono-regular">
            <strong>Back-end</strong> / <strong>Fullstack</strong> Developer and{" "}
            <em>Computer Scientist</em>
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

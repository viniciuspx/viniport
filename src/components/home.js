import React from "react";

import Card from "./card";

import "../assets/css/home.css";
import "../assets/css/font.css";
import profilePicture from "../assets/img/profile.png";
import reactlogo from "../assets/img/react.png";
import jslogo from "../assets/img/javascript.png";
import javalogo from "../assets/img/java.png";
import htmllogo from "../assets/img/html.png";
import csslogo from "../assets/img/css.png";
import githublogo from "../assets/img/github.png";
import linkedinlogo from "../assets/img/linkedin.png";
import mongologo from "../assets/img/mongo.png";
import tslogo from "../assets/img/ts.png";

function Home() {
  const createHome = () => {
    return (
      <div className="home text-font">
        <div className="home__container home__left-container">
          <div className="home__img">
            <img src={profilePicture} alt="profile"></img>
          </div>
          <div className="home__desc home__main-paragraph">
            <p>
              My name is <strong>Vinícius Gabriel</strong> and I am a Software
              Developer with experience in both <strong>Backend</strong> and{" "}
              <strong>Frontend</strong>.
            </p>
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
        <div className="home__container home__right-container">
          <h1>Languages and Technologies</h1>
          <div className="home__tech">
            <img src={jslogo} alt="JavaScript"></img>
            <img src={tslogo} alt="TypeScript"></img>
            <img src={htmllogo} alt="html"></img>
            <img src={csslogo} alt="css"></img>
            <img src={reactlogo} alt="react"></img>
            <img src={javalogo} alt="Java"></img>
            <img src={mongologo} alt="MongoDB"></img>
          </div>
          <div className="home__paragraph">
            <p>
              <strong>Backend/Frontend</strong> Developer and{" "}
              <em>Computer Scientist</em>. Always open to learning new
              technologies and programming languages, great at code maintenance
              and analysis. Confident in my ability to face any challenge that
              comes my way.
            </p>
          </div>
          <details className="home__others" open>
            <summary>Others:</summary>
            <p>SQL, Delphi, Pascal, Go, Rust, C and C++</p>
          </details>
        </div>
      </div>
    );
  };

  return <Card children={createHome()} />;
}

export default Home;

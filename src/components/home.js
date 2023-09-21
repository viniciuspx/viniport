import React from "react";

import "../assets/css/home.css";
import Card from "./card";
import profilePicture from "../assets/img/profile.png";
import reactlogo from "../assets/img/react.png";
import jslogo from "../assets/img/javascript.png";
import javalogo from "../assets/img/java.png";
import htmllogo from "../assets/img/html.png";
import csslogo from "../assets/img/css.png";

function Home() {
  const createHome = () => {
    return (
      <div className="home">
        <div className="home__container home__left-container">
          <div className="home__img">
            <img src={profilePicture} alt="profile"></img>
          </div>
          <div className="home__desc">
            <p>
              My name is <strong>Vinícius Gabriel</strong> and i am a Software Developer with experience in both <strong>Backend and Frontend</strong>.
            </p>
          </div>
        </div>
        <div className="home__container home__right-container">
          <h2>Languages and Technologies</h2>
          <div className="home__tech">
            <img src={jslogo} alt="JavaScript"></img>
            <img src={htmllogo} alt="html"></img>
            <img src={csslogo} alt="css"></img> 
            <img src={reactlogo} alt="react"></img>
            <img src={javalogo} alt="Java"></img>
          </div>
          <details className="home__others">
            <summary>Others:</summary>
            <p>Delphi, Pascal, Go, Rust, C e C++</p>
          </details>
        </div>
      </div>
    );
  };

  return <Card children={createHome()} />;
}

export default Home;

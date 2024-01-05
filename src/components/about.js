import React from "react";
import Card from "./card";

import "../assets/css/about.css";
import "../assets/css/font.css";
import profilePicture from "../assets/img/profile.png";

function About() {
  const createAbout = () => {
    return (
      <div className="main__about text-font">
        <div className="home__img">
          <img src={profilePicture} alt="profile"></img>
        </div>
        <h2>Aboute me:</h2>
        <p>
          Software Developer. Back-end Developer, enthusiast of new technologies, always willing to learn
          more. As a back-end developer I think that the notion of front-end
          development is essential for the evolution of my skills, so I am a
          front-end developer as well! Who is great at coding but not very good
          at Design. Main programming languages are JS, Java, Delphi, C and C++.
          HTML and CSS are great skills to have under my belt too.
        </p>
        <hr />
        <h2>Education:</h2>
        <p>
          UFG - Universidade Federal de Goiás, Goiânia
          <div className="university">
            <strong>Masters in Computer Science</strong> <span>2020 - 2022</span>
          </div>
          <div className="university">
            <strong>Bacharel in Computer Science</strong> <span>2014 - 2019</span>
          </div>
        </p>
        <hr />
        <h2>Contact information:</h2>
        <address>
          Please contact by{" "}
          <a
            href="https://www.linkedin.com/in/viniciuspx"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>{" "}
          or{" "}
          <a href="mailto:vinicius.gabriel.px@gmail.com">
            vinicius.gabriel.px@gmail.com
          </a>
        </address>
        <hr />
      </div>
    );
  };
  return <Card children={createAbout()} />;
}

export default About;

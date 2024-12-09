import React from "react";
import Card from "./card";

import "../assets/css/about.css";
import "../assets/css/font.css";
import profilePicture from "../assets/img/profile.png";
import down from "../assets/img/down.png";
import up from "../assets/img/up.png";

function About() {
  const createAbout = () => {
    return (
      <div className="main__about text-font" id="profile">
        <div className="home__img">
          <img src={profilePicture} alt="profile"></img>
        </div>
        <h2>Aboute me:</h2>
        <p>
          <h2>Software Developer | Fullstack Developer</h2>
          Enthusiast of new technologies and a lifelong learner. While my
          primary expertise lies in back-end development, I believe
          understanding front-end development is essential for growing as a
          well-rounded developer—so I have cultivated skills in both areas. I
          have experience in back-end development from my work at Nelogica,
          where I honed my expertise in building robust and efficient systems.
          On the front-end side, I worked on Dank City projects, utilizing CSS,
          Next.js, TypeScript, and other JavaScript libraries. While I excel in
          coding, I admit design isn’t my strongest suit—but I enjoy
          collaborating with designers to bring ideas to life. My main
          programming languages are JavaScript, TypeScript, Java, Delphi, C, and
          C++. I also have solid skills in HTML and CSS, which are invaluable in
          bridging front-end and back-end systems seamlessly.
        </p>
        <a href={"#edu"}>
          <img src={down} alt="downarrow" className="arrow blink"></img>
        </a>
      </div>
    );
  };

  const createEducation = () => {
    return (
      <div className="main__about text-font" id="edu">
        <a href="#profile">
          <img src={up} alt="uparrow" className="arrow blink"></img>
        </a>
        <h2>Education:</h2>
        <p>
          UFG - Universidade Federal de Goiás, Goiânia
          <div className="university">
            <strong>Masters in Computer Science</strong>{" "}
            <span>2020 - 2022</span>
          </div>
          <div className="university">
            <strong>Bacharel in Computer Science</strong>{" "}
            <span>2014 - 2019</span>
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

  return (
    <>
      <Card children={createAbout()} />;
      <Card children={createEducation()} />;
    </>
  );
}

export default About;

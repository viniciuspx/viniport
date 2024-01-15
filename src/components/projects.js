import React from "react";

import Card from "./card";
import Anchor from "./anchor";

import "../assets/css/projects.css";
import ProjectCard from "./projectCard";
import port from "../assets/img/port.png";
import ladder from "../assets/img/ladder.png";
import ezcep from "../assets/img/ezcep.png";
import ghc from "../assets/img/ghc.png";
import iresume from "../assets/img/iresume.png";

function Projects() {
  const createProjects = () => {
    return (
      <div className="text-font projects-list">
        <h1>Projects</h1>
        <h3>Project Live Pages:</h3>

        <div className="project-cards">
          <ProjectCard
            img={port}
            pageLink="/"
            link="https://github.com/viniciuspx/viniport"
            text="This page in on Github!"
            descText="This Portfolio :)"
            type="frontend"
          />

          <ProjectCard
            img={iresume}
            pageLink="https://iresume-web.vercel.app/"
            link=""
            text="Private Project"
            descText="Resume creator APP! Web and Mobile (ReactJS + React Native)"
            type="frontend"
          />

          <ProjectCard
            img={ezcep}
            link="https://github.com/viniciuspx/ezcep"
            pageLink="https://viniciuspx.github.io/ezcep/"
            text="ezCEP"
            descText="CEP Infomartion (Only Brazil Addresses)"
            type="frontend"
          />

          <ProjectCard
            img={ghc}
            link="https://github.com/viniciuspx/ghost-help-center"
            pageLink="https://viniciuspx.github.io/ghost-help-center/"
            text="GHC"
            descText="SPA of a Help Center ReactJS + JS"
            type="frontend"
          />

          <ProjectCard
            img={ladder}
            link="https://github.com/viniciuspx/css-ladder"
            pageLink="https://viniciuspx.github.io/css-ladder/"
            text="CSS Ladder"
            descText="Plain HTML and CSS - Studying CSS"
            type="frontend"
          />
        </div>

        <h3>Other Projects:</h3>

        <ul>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/json2csv"
              text="json2csv"
            />{" "}
            &#8594; JSON to CSV converter - Backend: JAVA 17 + SpringBoot
            Frontend: ReactJS ( <span className="frontend">Frontend</span> +{" "}
            <span className="backend">Backend</span> )
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/calculator"
              text="calculator"
            />{" "}
            &#8594; Calculator made with ReactJS{" "}
            <Anchor
              href="https://viniciuspx.github.io/calculator/"
              text="Page"
            />{" "}
            ( <span className="frontend">Frontend</span> )
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/crm-api"
              text="crm-api"
            />{" "}
            &#8594; Simple API to control Employees - Backend: JAVA 17 +
            SpringBoot DB: MongoDB ( <span className="backend">Backend</span> )
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/simple-crud-springboot"
              text="simple-crud"
            />{" "}
            &#8594; Simple CRUD API - Backend: JAVA 17 + SpringBoot ({" "}
            <span className="backend">Backend</span> )
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/todo-list"
              text="todo-list"
            />{" "}
            &#8594; Todo List - Backend: JAVA 17 + SpringBoot Frontend: ReactJS{" "}
            ( <span className="frontend">Frontend</span> +{" "}
            <span className="backend">Backend</span> )
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/challange-units"
              text="units"
            />{" "}
            &#8594; Company Logistic Backend - Backend: Typescript ({" "}
            <span className="backend">Backend</span> )
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/spot-sharer"
              text="spot-sharer"
            />{" "}
            &#8594; An App to share spots visited (Incomplete) - Backend:
            ExpressJS + JS Frontend: ReactJS ({" "}
            <span className="frontend">Frontend</span> +{" "}
            <span className="backend">Backend</span> )
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/unleet-codes"
              text="unleet-codes"
            />{" "}
            &#8594; Leet Code Solutions - Various Languages (mainly JS) Same as
            Repo <Anchor href="https://github.com/viniciuspx/TAP" text="TAP" />{" "}
            ( <span className="backend">coding</span> )
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/simple-list"
              text="simple-list"
            />{" "}
            &#8594; Simple-list Frontend: ReactJS ({" "}
            <span className="frontend">Frontend</span> )
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/simple-express-api"
              text="simple-express-API"
            />{" "}
            &#8594; CRUD API - Backend: ExpressJS + JS ({" "}
            <span className="backend">Backend</span> )
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/tictactoe"
              text="tictactoe"
            />{" "}
            &#8594; Tictactoe Game - Only Frontend: ReactJS{" "}
            <Anchor
              href="https://viniciuspx.github.io/tictactoe/"
              text="Page"
            />{" "}
            ( <span className="frontend">Frontend</span> )
          </li>
          <li>
            <Anchor href="https://github.com/viniciuspx/JojoPage" text="JOJO" />{" "}
            &#8594; First Ever webpage Simple HTML + CSS{" "}
            <Anchor href="https://viniciuspx.github.io/JojoPage/" text="Page" />{" "}
            ( <span className="frontend">Frontend</span> )
          </li>
        </ul>
      </div>
    );
  };
  return <Card children={createProjects()}></Card>;
}

export default Projects;

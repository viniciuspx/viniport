import React from "react";

import Card from "./card";
import Anchor from "./anchor";

import "../assets/css/projects.css";

function Projects() {
  const createProjects = () => {
    return (
      <div className="text-font projects-list">
        <h1>Projects List</h1>
        <ul>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/viniport"
              text="This page in on Github!"
            />
            &#8594; See the code! <span className="frontend">Frontend</span>
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/css-ladder"
              text="CSS Ladder"
            />
            &#8594; Plain HTML and CSS - Studying CSS{" "}
            <Anchor
              href="https://viniciuspx.github.io/css-ladder/"
              text="Link to page"
            />{" "}
            <span className="frontend">Frontend</span>
          </li>
          <li>
            <Anchor href="https://github.com/viniciuspx/ezcep" text="ezCEP" />
            &#8594; CEP Infomartion (Only Brazil Addresses) - ReactJS and Plain
            JS{" "}
            <Anchor
              href="https://viniciuspx.github.io/ezcep/"
              text="Link to page"
            />{" "}
            <span className="frontend">Frontend</span>
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/ghost-help-center"
              text="GHC"
            />{" "}
            &#8594; SPA of a Help Center ReactJS + JS{" "}
            <Anchor
              href="https://viniciuspx.github.io/ghost-help-center/"
              text="Link to page"
            />{" "}
            <span className="frontend">Frontend</span>
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/json2csv"
              text="json2csv"
            />{" "}
            &#8594; JSON to CSV converter - Backend: JAVA 17 + SpringBoot
            Frontend: ReactJS <span className="frontend">Frontend</span> +{" "}
            <span className="backend">Backend</span>
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/calculator"
              text="calculator"
            />{" "}
            &#8594; Calculator made with ReactJS{" "}
            <Anchor
              href="https://viniciuspx.github.io/calculator/"
              text="Link to page"
            />{" "}
            <span className="frontend">Frontend</span>
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/crm-api"
              text="crm-api"
            />{" "}
            &#8594; Simple API to control Employees - Backend: JAVA 17 +
            SpringBoot DB: MongoDB <span className="backend">Backend</span>
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/simple-crud-springboot"
              text="simple-crud"
            />{" "}
            &#8594; Simple CRUD API - Backend: JAVA 17 + SpringBoot{" "}
            <span className="backend">Backend</span>
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/todo-list"
              text="todo-list"
            />{" "}
            &#8594; Todo List - Backend: JAVA 17 + SpringBoot Frontend: ReactJS{" "}
            <span className="frontend">Frontend</span> +{" "}
            <span className="backend">Backend</span>
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/challange-units"
              text="units"
            />{" "}
            &#8594; Company Logistic Backend - Backend: Typescript{" "}
            <span className="backend">Backend</span>
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/spot-sharer"
              text="spot-sharer"
            />{" "}
            &#8594; An App to share spots visited (Incomplete) - Backend:
            ExpressJS + JS Frontend: ReactJS{" "}
            <span className="frontend">Frontend</span> +{" "}
            <span className="backend">Backend</span>
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/unleet-codes"
              text="unleet-codes"
            />{" "}
            &#8594; Leet Code Solutions - Various Languages (mainly JS) Same as
            Repo <Anchor href="https://github.com/viniciuspx/TAP" text="TAP" />{" "}
            <span className="backend">coding</span>
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/simple-list"
              text="simple-list"
            />{" "}
            &#8594; Simple-list Frontend: ReactJS{" "}
            <span className="frontend">Frontend</span>
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/simple-express-api"
              text="simple-express-API"
            />{" "}
            &#8594; CRUD API - Backend: ExpressJS + JS{" "}
            <span className="backend">Backend</span>
          </li>
          <li>
            <Anchor
              href="https://github.com/viniciuspx/tictactoe"
              text="tictactoe"
            />{" "}
            &#8594; Tictactoe Game - Only Frontend: ReactJS{" "}
            <Anchor
              href="https://viniciuspx.github.io/tictactoe/"
              text="Link to page"
            />{" "}
            <span className="frontend">Frontend</span>
          </li>
          <li>
            <Anchor href="https://github.com/viniciuspx/JojoPage" text="JOJO" />{" "}
            &#8594; First Ever webpage Simple HTML + CSS{" "}
            <Anchor
              href="https://viniciuspx.github.io/JojoPage/"
              text="Link to page"
            />{" "}
            <span className="frontend">Frontend</span>
          </li>
        </ul>
      </div>
    );
  };
  return <Card children={createProjects()}></Card>;
}

export default Projects;

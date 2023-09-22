import React from "react";
import Card from "./card";

import "../assets/css/projects.css";

function Projects() {
  const createProjects = () => {
    return (
      <div className="text-font projects-list">
        <h2>Finished/Unfinished List</h2>
        <ul>
          <li>
            <a href="https://github.com/viniciuspx/viniport">
              This page in on Github!
            </a>{" "}
            &#8594; See the code!
          </li>
          <li>
            <a href="https://github.com/viniciuspx/css-ladder">CSS Ladder</a>{" "}
            &#8594; Plain HTML and CSS - Studying CSS{" "}
            <a href="https://viniciuspx.github.io/css-ladder/">Link to page</a>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/ezcep">ezCEP</a>
            &#8594; CEP Infomartion (Only Brazil Addresses) - ReactJS and Plain
            JS <a href="https://viniciuspx.github.io/ezcep/">Link to page</a>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/ghost-help-center">GHC</a>{" "}
            &#8594; SPA of a Help Center ReactJS + JS{" "}
            <a href="https://viniciuspx.github.io/ghost-help-center/">
              Link to page
            </a>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/json2csv">json2csv</a>{" "}
            &#8594; JSON to CSV converter - Backend: JAVA 17 + SpringBoot
            Frontend: ReactJS
          </li>
          <li>
            <a href="https://github.com/viniciuspx/calculator">calculator</a>{" "}
            &#8594; Calculator made with ReactJS{" "}
            <a href="https://viniciuspx.github.io/calculator/">Link to page</a>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/crm-api">crm-api</a> &#8594;
            Simple API to control Employees - Backend: JAVA 17 + SpringBoot DB:
            MongoDB + Frontend tests with Postman
          </li>
          <li>
            <a href="https://github.com/viniciuspx/simple-crud-springboot">
              simple-crud
            </a>{" "}
            &#8594; Simple CRUD API - Backend: JAVA 17 + SpringBoot
          </li>
          <li>
            <a href="https://github.com/viniciuspx/todo-list">todo-list</a>{" "}
            &#8594; Todo List - Backend: JAVA 17 + SpringBoot Frontend: ReactJS
          </li>
          <li>
            <a href="https://github.com/viniciuspx/challange-units">units</a>{" "}
            &#8594; Company Logistic Backend - Backend: Typescript
          </li>
          <li>
            <a href="https://github.com/viniciuspx/spot-sharer">spot-sharer</a>{" "}
            &#8594; An App to share spots visited (Incomplete) - Backend:
            ExpressJS + JS Frontend: ReactJS
          </li>
          <li>
            <a href="https://github.com/viniciuspx/unleet-codes">
              unleet-codes
            </a>{" "}
            &#8594; Leet Code Solutions - Various Languages (mainly JS) Same as
            Repo <a href="https://github.com/viniciuspx/TAP">TAP</a>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/simple-list">simple-list</a>{" "}
            &#8594; Simple-list Frontend: ReactJS
          </li>
          <li>
            <a href="https://github.com/viniciuspx/simple-express-api">
              simple-express-API
            </a>{" "}
            &#8594; CRUD API - Backend: ExpressJS + JS
          </li>
          <li>
            <a href="https://github.com/viniciuspx/tictactoe">tictactoe</a>{" "}
            &#8594; Tictactoe Game - Only Frontend: ReactJS
          </li>
          <li>
            <a href="https://github.com/viniciuspx/JojoPage">JOJO</a> &#8594;
            First Ever webpage Simple HTML + CSS{" "}
            <a href="https://viniciuspx.github.io/JojoPage/">Link to page</a>
          </li>
        </ul>
      </div>
    );
  };
  return <Card children={createProjects()}></Card>;
}

export default Projects;

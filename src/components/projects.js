import React from "react";
import Card from "./card";

import "../assets/css/projects.css";

function Projects() {
  const createProjects = () => {
    return (
      <div className="text-font projects-list">
        <h1>Projects List</h1>
        <ul>
          <li>
            <a href="https://github.com/viniciuspx/viniport">
              This page in on Github!
            </a>{" "}
            &#8594; See the code! <span className="frontend">Frontend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/css-ladder">CSS Ladder</a>{" "}
            &#8594; Plain HTML and CSS - Studying CSS{" "}
            <a href="https://viniciuspx.github.io/css-ladder/">Link to page</a>{" "}
            <span className="frontend">Frontend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/ezcep">ezCEP</a>
            &#8594; CEP Infomartion (Only Brazil Addresses) - ReactJS and Plain
            JS <a href="https://viniciuspx.github.io/ezcep/">
              Link to page
            </a>{" "}
            <span className="frontend">Frontend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/ghost-help-center">GHC</a>{" "}
            &#8594; SPA of a Help Center ReactJS + JS{" "}
            <a href="https://viniciuspx.github.io/ghost-help-center/">
              Link to page
            </a>{" "}
            <span className="frontend">Frontend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/json2csv">json2csv</a>{" "}
            &#8594; JSON to CSV converter - Backend: JAVA 17 + SpringBoot
            Frontend: ReactJS <span className="frontend">Frontend</span> +{" "}
            <span className="backend">Backend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/calculator">calculator</a>{" "}
            &#8594; Calculator made with ReactJS{" "}
            <a href="https://viniciuspx.github.io/calculator/">Link to page</a>{" "}
            <span className="frontend">Frontend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/crm-api">crm-api</a> &#8594;
            Simple API to control Employees - Backend: JAVA 17 + SpringBoot DB:
            MongoDB <span className="backend">Backend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/simple-crud-springboot">
              simple-crud
            </a>{" "}
            &#8594; Simple CRUD API - Backend: JAVA 17 + SpringBoot{" "}
            <span className="backend">Backend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/todo-list">todo-list</a>{" "}
            &#8594; Todo List - Backend: JAVA 17 + SpringBoot Frontend: ReactJS{" "}
            <span className="frontend">Frontend</span> +{" "}
            <span className="backend">Backend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/challange-units">units</a>{" "}
            &#8594; Company Logistic Backend - Backend: Typescript{" "}
            <span className="backend">Backend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/spot-sharer">spot-sharer</a>{" "}
            &#8594; An App to share spots visited (Incomplete) - Backend:
            ExpressJS + JS Frontend: ReactJS{" "}
            <span className="frontend">Frontend</span> +{" "}
            <span className="backend">Backend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/unleet-codes">
              unleet-codes
            </a>{" "}
            &#8594; Leet Code Solutions - Various Languages (mainly JS) Same as
            Repo <a href="https://github.com/viniciuspx/TAP">TAP</a>{" "}
            <span className="backend">coding</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/simple-list">simple-list</a>{" "}
            &#8594; Simple-list Frontend: ReactJS{" "}
            <span className="frontend">Frontend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/simple-express-api">
              simple-express-API
            </a>{" "}
            &#8594; CRUD API - Backend: ExpressJS + JS{" "}
            <span className="backend">Backend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/tictactoe">tictactoe</a>{" "}
            &#8594; Tictactoe Game - Only Frontend: ReactJS{" "}
            <a href="https://viniciuspx.github.io/tictactoe/">Link to page</a>{" "}
            <span className="frontend">Frontend</span>
          </li>
          <li>
            <a href="https://github.com/viniciuspx/JojoPage">JOJO</a> &#8594;
            First Ever webpage Simple HTML + CSS{" "}
            <a href="https://viniciuspx.github.io/JojoPage/">Link to page</a>{" "}
            <span className="frontend">Frontend</span>
          </li>
        </ul>
      </div>
    );
  };
  return <Card children={createProjects()}></Card>;
}

export default Projects;

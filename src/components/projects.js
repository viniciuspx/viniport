import React from "react";
import Card from "./card";
import Anchor from "./anchor";
import ProjectCard from "./projectCard";
import "../assets/css/projects.css";

// Images
import port from "../assets/img/port.png";
import ladder from "../assets/img/ladder.png";
import ezcep from "../assets/img/ezcep.png";
import ghc from "../assets/img/ghc.png";
import iresume from "../assets/img/iresume.png";
import scheduler from "../assets/img/scheduler.png";
import events from "../assets/img/events.png";
import mono from "../assets/img/mono.png";
import dank from "../assets/img/dank.png";
import nelo from "../assets/img/nelo.png";
import sparklean from "../assets/img/sparklean.png";

const PROJECTS = [
  {
    img: port,
    pageLink: "/",
    link: "https://github.com/viniciuspx/viniport",
    text: "This page in on Github!",
    descText: "This Portfolio :)",
    type: "frontend",
  },
  {
    img: events,
    pageLink: "https://events-orcin.vercel.app/",
    link: "https://github.com/viniciuspx/events",
    text: "Events Calendar App",
    descText:
      "Calendar App (NextJS, TypeScript, ReactJS, Tailwind, Express, MongoDB)",
    type: "both",
  },
  {
    img: mono,
    pageLink: "https://monogram-pi.vercel.app/",
    link: "https://github.com/viniciuspx/monogram",
    text: "Shop Home Page",
    descText: "A simple home page for products",
    type: "frontend",
  },
  {
    img: scheduler,
    pageLink: "https://scheduler-eosin.vercel.app/",
    link: "https://github.com/viniciuspx/scheduler",
    text: "Scheduler",
    descText: "Scheduler App (NextJS, TypeScript, ReactJS, Tailwind, Express)",
    type: "both",
  },
  {
    img: iresume,
    pageLink: "https://iresume-web.vercel.app/",
    link: "",
    text: "iResume",
    descText: "Resume creator APP! Web and Mobile (ReactJS + React Native)",
    type: "frontend",
  },
  {
    img: ezcep,
    pageLink: "https://viniciuspx.github.io/ezcep/",
    link: "https://github.com/viniciuspx/ezcep",
    text: "ezCEP",
    descText: "CEP Information (Only Brazil Addresses)",
    type: "frontend",
  },
  {
    img: ghc,
    pageLink: "https://viniciuspx.github.io/ghost-help-center/",
    link: "https://github.com/viniciuspx/ghost-help-center",
    text: "GHC",
    descText: "SPA of a Help Center (ReactJS + JS)",
    type: "frontend",
  },
  {
    img: ladder,
    pageLink: "https://viniciuspx.github.io/css-ladder/",
    link: "https://github.com/viniciuspx/css-ladder",
    text: "CSS Ladder",
    descText: "Plain HTML and CSS - Studying CSS",
    type: "frontend",
  },
];

const OTHER_PROJECTS = [
  {
    name: "Scheduler-API",
    href: "https://github.com/viniciuspx/scheduler-api",
    description:
      "Backend for the Scheduler project - NodeJS, TypeScript, ExpressJS",
    type: "backend",
  },
  {
    name: "json2csv",
    href: "https://github.com/viniciuspx/json2csv",
    description:
      "JSON to CSV converter - Backend: JAVA 17 + SpringBoot Frontend: ReactJS",
    type: "both",
  },
  // Add other projects here similarly
];

const LIVE_PAGES = [
  {
    img: dank,
    pageLink: "https://dankcitydelivery.com",
    link: "https://dankcitydelivery.com",
    text: "Dank City Delivery",
    descText: "Role: Fullstack Developer | 1 year of experience",
    type: "both",
  },
  {
    img: nelo,
    pageLink: "https://www.nelogica.com.br/",
    link: "https://www.nelogica.com.br/",
    text: "Nelogica",
    descText: "Role: Backend Developer | 2 years of experience",
    type: "backend",
  },
  {
    img: sparklean,
    pageLink: "https://sparkleanteam.com/",
    link: "https://sparkleanteam.com/",
    text: "Sparklean Team",
    descText: "Role: Lead Developer | Side Project",
    type: "both",
  },
];

const ProjectList = () => (
  <div className="project-cards">
    {PROJECTS.map((project) => (
      <ProjectCard key={project.text} {...project} />
    ))}
  </div>
);

const OtherProjectsList = () => (
  <ul>
    {OTHER_PROJECTS.map((project) => (
      <li key={project.name}>
        <Anchor href={project.href} text={project.name} /> &#8594;{" "}
        {project.description} (
        <span className={project.type}>{project.type}</span>)
      </li>
    ))}
  </ul>
);

const LivePageList = () => (
  <div className="project-cards">
    {LIVE_PAGES.map((project) => (
      <ProjectCard key={project.text} {...project} />
    ))}
  </div>
);

function Projects() {
  return (
    <Card>
      <div className="text-font projects-list">
        <h1>Projects</h1>
        <h3>Where I've Worked:</h3>
        <LivePageList />
        <h3>Projects:</h3>
        <ProjectList />
        <h3>Other Projects:</h3>
        <OtherProjectsList />
      </div>
    </Card>
  );
}

export default Projects;

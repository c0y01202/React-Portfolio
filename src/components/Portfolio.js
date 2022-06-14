//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Budget-Tracker, a Progressive Web Application",
    languages: "Javascript",
    packages: "Mongoose, Compression, Express, Morgan",
    image: "/img/screen_shot.png",
    description: "Allows you to track your budget!",
    repo: "https://github.com/c0y01202/Budget-Tracker",
    live: "https://evening-eyrie-48642.herokuapp.com/",
  },
  {
    id: 1,
    title: "Social Network API",
    languages: "Javascript",
    packages: "Mongoose, MongoDB, Express, Nodemon",
    image: "/img/social_network_api.png",
    description:
      "The purpose of this project was to introduce user to learn about NoSQL databases to create a Progressive Web Application.",
    repo: "https://github.com/c0y01202/Social_Network_API",
  },
  {
    id: 2,
    title: "The Tech Blog",
    languages: "html, css, js, handlebars",
    packages: "bcrypt, express handlebars.js, sequelize, express, Jest, mysql2",
    image: "/img/tech_blog",
    description:
      "Allows users to post information on tech related events and news!",
    live: "https://mighty-escarpment-27826.herokuapp.com/",
    repo: "https://github.com/c0y01202/tech-blog",
  },
  {
    id: 3,
    title: "Notetaker",
    languages: "html, css, javascript",
    image: "/img/note_taker.png",
    packages: "Node.js, Jest, Express",
    description:
      "An application that allows you to add and delete notes for any task.",
    repo: "https://github.com/c0y01202/note-taker",
    live: "https://infinite-ridge-23251.herokuapp.com/",
  },
  {
    id: 4,
    title: "Simple Currency Exchange",
    languages: "HTML, CSS, Javascript",
    packages: "Express, Bulma",
    image: "/img/currency_exchange_website",
    description:
      "Convert currencies and track weather in 4 major networks across the globe.",
    repo: "https://github.com/c0y01202/currency_exchange_site",
    live: "https://c0y01202.github.io/currency_exchange_site/",
  },
  {
    id: 5,
    title: "Basic Portfolio",
    languages: "html, css",
    packages: "none",
    image: "/img/biography_homepage.png",
    description:
      "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/c0y01202/Biography_Page",
    live: "https://c0y01202.github.io/Biography_Page/",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    languages: "HTML, CSS, Javascript",
    image: "/img/weather_dashboard.png",
    description:
      "This site includes dynamically built HTML and CSS. The app allows users to be able to see weather data for multiple cities.",
    repo: "https://github.com/c0y01202/weather-dashboard",
    live: "https://c0y01202.github.io/weather-dashboard/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;

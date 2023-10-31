import proficiencies from "./proficiencyData";

const projects = [
  {
    name: "Toff-leo",
    img: "../../../assets/images/project-thumbnails/toff-leo.png",
    github: "https://github.com/jsgunn22/toff-leo",
    link: "https://toff-leo-6bd4612bd777.herokuapp.com/",
    description:
      "Toff-leo is an online version of the ancient game of hnefatafl that I contributed to as a group project while in bootcamp.  The application supports authentications and a javascript game engine as well as multiplayer matching and chat via socket.IO.",
    proficiencies: [
      proficiencies[1],
      proficiencies[2],
      proficiencies[3],
      proficiencies[7],
    ],
  },
  {
    name: "Vidya",
    img: "../../../assets/images/project-thumbnails/vidya.png",
    github: "https://github.com/jsgunn22/vidya-game-search-engine",
    link: "https://luis00809.github.io/Group-3-project/",
    description:
      "Vidya is a video game search engine that is powered by the RAWG and Gamerpower APIs.  I contributed on this group project as an exercise in utilizing JavaScript and 3rd party APIs.",
    proficiencies: [proficiencies[1], proficiencies[8], proficiencies[4]],
  },
  {
    name: "Just Another Text Editor",
    img: "assets/images/project-thumbnails/jate.png",
    github: "https://github.com/jsgunn22/text-editor",
    link: "https://jot-it-a62ee6b5eac9.herokuapp.com/",
    description:
      "Webpack is a simple text editor.  The real purpose of this application was to learn about Webpack for client side bundling and creating Progressive Web Apps. ",
    proficiencies: [proficiencies[1], proficiencies[3], proficiencies[9]],
  },
  {
    name: "Day Planner",
    img: "assets/images/project-thumbnails/planner.png",
    github: "https://github.com/jsgunn22/day-planner",
    link: "https://jsgunn22.github.io/day-planner/",
    description:
      "The Day Planner is an app that allows the user to store and retrieve notes that are saved to a specific time frame throughtout the day.  I went above and beyond on this project and added an current time badge that and the ability to set the start and stop time of the users day. ",
    proficiencies: [proficiencies[1]],
  },
  {
    name: "Weather App",
    img: "assets/images/project-thumbnails/weather.png",
    github: "https://github.com/jsgunn22/weather-app",
    link: "https://jsgunn22.github.io/weather-app/",
    description:
      "This project was a lesson is using 3rd party web APIs as well as storing JSON data in the browsers localStorage",
    proficiencies: [proficiencies[1], proficiencies[4]],
  },
  {
    name: "Notes App",
    img: "assets/images/project-thumbnails/notes.png",
    github: "https://github.com/jsgunn22/noter-taker",
    link: "https://stick-e-notes-bcaf36872306.herokuapp.com/notes",
    description:
      "The note take was my first project for Full Stack developement.  It allows us to store notes that user writes for later use.",
    proficiencies: [proficiencies[1]],
  },
];

export default projects;

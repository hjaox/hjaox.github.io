import { RiJavascriptLine, RiHtml5Line, RiCss3Fill, RiReactjsFill } from "react-icons/ri";
import { SiAxios, SiPostgresql, SiExpress, SiJest } from "react-icons/si";
import { IoLogoNpm, IoLogoNodejs } from "react-icons/io";

export const languages = {
  JavaScript: {
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    logo: <RiJavascriptLine size={20} style={{ alignSelf: "center" }} />,
  },
};

export const frontend = {
  HTML: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    logo: <RiHtml5Line size={20} style={{ alignSelf: "center" }} />,
  },
  CSS: {
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    logo: <RiCss3Fill size={20} style={{ alignSelf: "center" }} />,
  },
  React: {
    link: "https://react.dev/",
    logo: <RiReactjsFill size={20} style={{ alignSelf: "center" }} />,
  },
  "React-Native": {
    link: "https://reactnative.dev/",
    logo: <RiReactjsFill size={20} style={{ alignSelf: "center" }} />,
  },
  Axios: {
    link: "https://www.npmjs.com/package//axios",
    logo: <SiAxios size={20} style={{ alignSelf: "center" }} />,
  },
};

export const backend = {
  PostgreSQL: {
    link: "https://www.postgresql.org/",
    logo: <SiPostgresql size={20} style={{ alignSelf: "center" }} />,
  },
  "node-PostgreSQL": {
    link: "https://node-postgres.com/",
    logo: <IoLogoNpm size={20} style={{ alignSelf: "center" }} />,
  },
  Express: {
    link: "https://expressjs.com/",
    logo: <SiExpress size={20} style={{ alignSelf: "center" }} />,
  },
  "Node.js": {
    link: "https://nodejs.org/en",
    logo: <IoLogoNodejs size={20} style={{ alignSelf: "center" }} />,
  },
};

export const testing = {
  Jest: {
    link: "https://jestjs.io/",
    logo: <SiJest size={20} style={{ alignSelf: "center" }} />,
  },
  Supertest: {
    link: "https://github.com/ladjs/supertest#readme",
    logo: <IoLogoNpm size={20} style={{ alignSelf: "center" }} />,
  },
};

export const hosting = ["Render", "Netlify", "ElephantSQL"];

["Test-Driven Development (TDD)", "Object-Oriented Programming (OOP)", "AGILE", "SCRUM", "Git"];
export const others = {
  "Test-Driven Development (TDD)": {
    description:
      "A software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases.",
    link: "https://en.wikipedia.org/wiki/Test-driven_development",
  },
  "Object-Oriented Programming (OOP)": {
    description:
      "A programming paradigm based on the concept of objects, which can contain data and code: data in the form of fields (often known as attributes or properties), and code in the form of procedures (often known as methods).",
    link: "https://en.wikipedia.org/wiki/Object-oriented_programming",
  },
  AGILE: {
    description:
      'Agile practices (sometimes written "Agile") include requirements discovery and solutions improvement through the collaborative effort of self-organizing and cross-functional teams with their customer(s)/end user(s).',
    link: "https://en.wikipedia.org/wiki/Agile_software_development",
  },
  SCRUM: {
    description:
      "An agile project management system where it prescribes for teams to break work into goals to be completed within time-boxed iterations, called sprints.",
    link: "https://en.wikipedia.org/wiki/Scrum_(software_development)",
  },
  KANBAN: {
    description:
      "A lean method to manage and improve work across human systems. This approach aims to manage work by balancing demands with available capacity, and by improving the handling of system-level bottlenecks.",
    link: "https://en.wikipedia.org/wiki/Kanban_(development)",
  },
  Git: {
    description:
      "A distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers who are collaboratively developing source code during software development.",
    link: "https://en.wikipedia.org/wiki/Git",
  },
};

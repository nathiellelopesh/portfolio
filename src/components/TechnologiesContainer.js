import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiGit,
  DiReact,
  DiNodejsSmall,
} from "react-icons/di";

import { SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML", icon: <DiHtml5 /> },
  { id: "css", name: "CSS", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "ts", name: "TypeScript", icon: <SiTypescript /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "mongo", name: "MondoDB", icon: <SiMongodb /> },
  { id: "postgres", name: "PostgreSQL", icon: <SiPostgresql /> },
  { id: "git", name: "Git", icon: <DiGit /> },
  { id: "node", name: "Node", icon: <DiNodejsSmall /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;

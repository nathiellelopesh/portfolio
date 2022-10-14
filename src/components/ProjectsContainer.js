import "../styles/components/projectscontainer.sass";
import StrangerThings from "../img/strangerThings.svg";
import naTrave from "../img/naTrave.svg";
import eSports from "../img/eSports.svg";

const projects = [
  {
    id: "strangerThings",
    name: "Stranger Things Club",
    img: StrangerThings,
    url: "https://nathiellelopesh.github.io/clube-stranger-things/",
    code: "https://github.com/nathiellelopesh/clube-stranger-things",
  },
  {
    id: "naTrave",
    name: "naTrave",
    img: naTrave,
    url: "https://na-trave-apostas.netlify.app/",
    code: "https://github.com/nathiellelopesh/naTrave-web",
  },
  {
    id: "eSports",
    name: "eSports",
    img: eSports,
    url: "",
    code: "https://github.com/nathiellelopesh/eSports",
  },
];

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="projects-card" id={project.id} key={project.id}>
            <div className="projects-info">
              <img src={project.img} alt={project.name}></img>
              <div className="buttons">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="projects-btn"
                >
                  {" "}
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="projects-btn"
                >
                  {" "}
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsContainer;

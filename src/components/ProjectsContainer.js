import "../styles/components/projectscontainer.sass";
import StrangerThings from "../img/strangerThings.svg";
import AluraPlus from "../img/alura.png";

const projects = [
  {
    id: "strangerThings",
    name: "Stranger Things Club",
    img: StrangerThings,
    url: "https://nathiellelopesh.github.io/clube-stranger-things/",
    code: "https://github.com/nathiellelopesh/clube-stranger-things",
  },
  {
    id: "aluraPlus",
    name: "AluraPlus",
    img: AluraPlus,
    url: "https://nathiellelopesh.github.io/ProjetoAlura/",
    code: "https://github.com/nathiellelopesh/ProjetoAlura",
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
              <h3>{project.name}</h3>
              <div className="buttons">
                <a href={project.url} target="_blank" className="projects-btn">
                  {" "}
                  Live Demo
                </a>
                <a href={project.code} target="_blank" className="projects-btn">
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

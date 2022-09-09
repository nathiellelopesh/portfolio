import "../styles/components/projectscontainer.sass";
import StrangerThings from "../img/strangerThings.svg";
import moviesLib from "../img/movieslib.PNG";
import Countdown from "../img/Countdown.PNG";

const projects = [
  {
    id: "strangerThings",
    name: "Stranger Things Club",
    img: StrangerThings,
    url: "https://nathiellelopesh.github.io/clube-stranger-things/",
    code: "https://github.com/nathiellelopesh/clube-stranger-things",
  },
  {
    id: "moviesLib",
    name: "MoviesLib",
    img: moviesLib,
    url: "https://movieslib-react-vite.netlify.app/",
    code: "https://github.com/nathiellelopesh/movielib-react-vite",
  },
  {
    id: "countdown",
    name: "Countdown",
    img: Countdown,
    url: "https://nathiellelopesh.github.io/Countdown-timer/",
    code: "https://github.com/nathiellelopesh/Countdown-timer",
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

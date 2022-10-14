import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/me.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Nathielle Harka" />
      <p className="title">Front-end Developer</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/1jHNvtCTVrRhLdY1h9ht26Km8eTKQOduR/view?usp=sharing"
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        Download Resume
      </a>
    </aside>
  );
};

export default Sidebar;

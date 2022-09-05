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
      <a href="#" className="btn">
        Download Resume
      </a>
    </aside>
  );
};

export default Sidebar;

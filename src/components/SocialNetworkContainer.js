import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      <a
        href="https://www.linkedin.com/in/nathielle-lopes-harka/"
        className="social-btn"
        target="_blank"
        id={socialNetworks[0].name}
        key={socialNetworks[0].name}
      >
        {socialNetworks[0].icon}
      </a>
      <a
        href="https://github.com/nathiellelopesh"
        className="social-btn"
        target="_blank"
        id={socialNetworks[1].name}
        key={socialNetworks[1].name}
      >
        {socialNetworks[1].icon}
      </a>
    </section>
  );
};

export default SocialNetworkContainer;

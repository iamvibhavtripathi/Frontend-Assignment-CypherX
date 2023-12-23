import React from "react";
// import { FaLinkedin, FaGithub} from 'react-icons/fa6';
import "./Footer.css";

const Footer = () => {
    const socials = [{
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/vibhav365/',
      // icon: <FaLinkedin />,
      hoverColor: 'hover:text-blue-800',
      darkhoverColor: 'dark:hover:text-blue-800',
    },
    {
      name: 'Github',
      link: 'https://github.com/iamvibhavtripathi',
      // icon: <FaGithub />,
      hoverColor: 'hover:text-black',
      darkhoverColor: 'dark:hover:text-white',
    },
];
  return (
    <div className="Footer">
       👋 Developed by <a href="https://github.com/iamvibhavtripathi">  😊 Vibhav Tripathi  😊 </a>. Find the
      source code{" "}
      <a href="https://github.com/iamvibhavtripathi/Frontend-Assignment-CypherX">
        here ❤️❤️ .
      </a>

      





    </div>
  );
};

export default Footer;

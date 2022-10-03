import React from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import resume from '../../assets/documents/Sarmiento-Salas-Resume.pdf'

function Footer() {
  return (
    <footer className="footer flex justify-center">
      <a
        href="https://github.com/chris-15"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub className=" text-6xl hover:bg-blue-500 p-2" />
      </a>
      <a
        href="https://www.linkedin.com/in/christopher-sarmiento-salas/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaLinkedin className="text-6xl hover:bg-blue-500 p-2" />
      </a>

      <a
        href={resume}
        target="_blank"
        rel="noreferrer noopener"
        download
      >
        <FaFileAlt className="text-6xl hover:bg-blue-500 p-2" />
      </a>

    </footer>
  );
}

export default Footer;

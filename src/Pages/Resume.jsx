import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaFileWord } from "react-icons/fa";

function Resume() {
  return (
    <>
      <div className="resume">
        <header>
          <h1 className="header-name">Zack Cinal</h1>
          <h3>Full Stack Software Engineer</h3>
          <ul>
            <li>
              <SiGmail />
              <a href="mailto:zekeriyacnl@gmail.com">zekeriyacnl@gmail.com</a>
            </li>
            <li className="lines">|</li>
            <li>
              <a href="https://github.com/zackcinal" target="_blank">
                <FaGithub /> GitHub
              </a>
            </li>
            <li className="lines">|</li>
            <li>
              <a href="https://www.linkedin.com/in/zack-cinal/" target="_blank">
                <BsLinkedin />
                LinkedIn
              </a>
            </li>
            <li className="lines">|</li>
            <li>
              <a
                href="https://olive-jerrilyn-8.tiiny.site/"
                target="_blank"
              >
                <FaFileWord />
                Resume
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default Resume;

import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="project-container">
        <div>
          <h1>Accio Knowledge</h1>
        </div>
        <p className="description">
          Accio Knowledge is a website about Harry Potter. You can explore
          books, movies, characters, spells etc.
        </p>
        <div className="project-list">
          <ul className="rw-list">
            <li>Software Engineer</li>
            <li>|</li>
            <li>Solo</li>
            <li>|</li>
            <li>2 Days</li>
          </ul>
          <ul className="rw-list2">
            <li>
              <a
                href="https://main--accioknowledge.netlify.app/"
                target="_blank"
              >
                Live
              </a>
            </li>
            <li>|</li>
            <li>
              <a
                href="https://github.com/zackcinal/accio-knowledge-project"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <div>
          <h1>Modern Family API</h1>
        </div>
        <p className="description">
          Modern Family API allows users to access character information,
          explore seasons, and retrieve quotes from the show.
        </p>
        <div className="project-list">
          <ul className="rw-list">
            <li>Software Engineer</li>
            <li>|</li>
            <li>Solo</li>
            <li>|</li>
            <li>2 Days</li>
          </ul>
          <ul className="rw-list2">
            <li>
              <a
                href="https://modernfamilyapi-078e7c797411.herokuapp.com"
                target="_blank"
              >
                Live
              </a>
            </li>
            <li>|</li>
            <li>
              <a
                href="https://github.com/zackcinal/modern-family-api"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <div>
          <h1>The Real Reel</h1>
        </div>
        <p className="description">
          A social media website where you can find and review movies, follow
          the people you want and more. Frontend built with React.js and backend
          built with Express, Mongoose, and MongoDB.
        </p>
        <div className="project-list">
          <ul className="rw-list">
            <li>Software Engineer</li>
            <li>|</li>
            <li>Team</li>
            <li>|</li>
            <li>1 Week</li>
          </ul>
          <ul className="rw-list2">
            <li>
              <a
                href="https://therealreel.netlify.app/"
                target="_blank"
              >
                Live
              </a>
            </li>
            <li>|</li>
            <li>
              <a
                href="https://github.com/ambretate/the-real-reel-front-end"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;

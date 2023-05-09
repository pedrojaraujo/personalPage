import React from "react";
import "./styles.css";

const Projects = () => {
  return (
    <div>
      <section className="containerProjects m-auto">
        <ul className="text-center">
          <li>
            <a href="https://pedrojaraujo.github.io/html-css/">
              <img src="../../../public/img/tecBlog.jpg" alt="tecBlog-image" />
              TecBlog
            </a>
          </li>
          <li>
            <a href="https://pedrojaraujo.github.io/orcamentoPessoal/">
              <img
                src="../../../public/img/orcamentoPessoal.jpg"
                alt="orcamentoPessoal-image"
              />
              Orçamento Pessoal
            </a>
          </li>
          <li>
            <a href="https://pedrojaraujo.github.io/storyteller/">
              <img
                src="../../../public/img/storyTeller.jpg"
                alt="storyTeller-image"
              />
              Story Teller
            </a>
          </li>
          <li>
            <a href="https://pedrojaraujo.github.io/weatherApp/">
              <img
                src="../../../public/img/weatherApp.jpg"
                alt="weatherApp-image"
              />
              Weather App
            </a>
          </li>
          <li>
            <a href="https://pedrojaraujo.github.io/killFlies/">
              <img
                src="../../../public/img/killFlies.jpg"
                alt="killFlies-image"
              />
              Kill Flies
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;

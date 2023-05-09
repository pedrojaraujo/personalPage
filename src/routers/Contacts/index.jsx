import React from "react";
import "./styles.css";
import { FaGithub, FaLinkedin, FaEnvelopeOpen } from "react-icons/fa";

const Contacts = () => {
  return (
    <div>
      <section className="flex justify-center">
        <ul className="grid grid-cols-3 gap-10 my-5">
          <li>
            <a href="https://github.com/pedrojaraujo">
              <FaGithub className="iconContact" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pedrojaraujo/">
              <FaLinkedin className="iconContact" />
            </a>
          </li>
          <li>
            <a href="mailto:pedroa990@gmail.com">
              <FaEnvelopeOpen className="iconContact" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contacts;

import React from "react";
import { useState } from "react";
import ImageFetcher from "../utils/ImageFetcher";
import "./styles.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuState, setMenuState] = useState(true);

  function handleMenu() {
    setMenuState((prevMenuState) => !prevMenuState);
  }

  return (
    <nav className="flex-col text-center">
      <ImageFetcher />
      <section className="tilte-subtitle font-bold text-xl">
        <h1>Pedro Joaquim Araujo</h1>
        <h3 className="font-normal">jr. developer frontend</h3>
      </section>

      <section className="sectionButton flex justify-center">
        <button
          onClick={handleMenu}
          className="buttonMenu flex justify-center items-center w-2/4"
        >
          <FaBars className="FaBars" />
          <p>Menu</p>
        </button>
      </section>

      <ul className={menuState ? "menuBarClose" : "menuBar"}>
        <Link className="linkMenu" to="/">
          Home
        </Link>
        <Link className="linkMenu" to="/Projects">
          Projetos
        </Link>
        <Link className="linkMenu" to="/AboutMySelf">
          Sobre mim
        </Link>
        <Link className="linkMenu" to="/Contacts">
          Contatos
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;

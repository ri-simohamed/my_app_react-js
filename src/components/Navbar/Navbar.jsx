import React from "react";
import mrami from "../../images/mrami.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar_logo">
          <img src={mrami} alt="logo" className="navbar_logo" />
        </a>
        <div className="navbar_bars">
          <i className="fas fa-bars" />
        </div>
        <ul className="navbar_menu">
          <li href="/" className="navbar_menu_links">
            Home
          </li>
          <li href="#" className="navbar_menu_links">
            Projects
          </li>
          <li href="#" className="navbar_menu_links">
            Serves
          </li>
          <li href="#" className="navbar_menu_links" id="button">
            Sing Up
          </li>
        </ul>
      </nav>
    </>
  );
};

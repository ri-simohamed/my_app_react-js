import React from "react";
import mrami from "../../images/mrami.png";
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}> 
      <img src={mrami} alt="logo" className="navbar_logo" />
      </Link>
        <div className="navbar_bars">
          <GiHamburgerMenu/>
        </div>
        <ul className="navbar_menu">
          <Link to="/" className="navbar_menu_links">
            Home
          </Link>
          <Link to="/projects" className="navbar_menu_links">
            Projects
          </Link>
          <Link to="/services" className="navbar_menu_links">
            Services
          </Link>
        </ul>
      </nav>
    </>
  );
};

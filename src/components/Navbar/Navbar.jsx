import React from "react";
import mrami from "../../images/mrami.png";
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {

  const [toggle, setToggle] = useState(false);

//  const handleClickbut = () => {
//         console.log("hello");
//   }

  return (
    <>
      <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}> 
      <img src={mrami} alt="logo" className="navbar_logo" />
      </Link>
        <div className="navbar_bars">
          <GiHamburgerMenu onClick={() => setToggle(true)}/>
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
      <div className="navbar_right">
        {toggle && (
          <ul className="navbar_right_list">
          <Link to="/" className="navbar_right_list_links" onClick={() => setToggle(false)}>
            Home
          </Link>
          <Link to="/projects" className="navbar_right_list_links" onClick={() => setToggle(false)}>
            Projects
          </Link>
          <Link to="/services" className="navbar_right_list_links" onClick={() => setToggle(false)}>
            Services
          </Link>
        </ul>
        )}
        </div>
    </>
  );
};

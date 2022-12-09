import React from "react";
import "../components/Styles/page.scss";
import prog from "../images/prog.jpeg";

export const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero_container">
          <div className="hero_container_left">
            <h1>Well Be Camming Soon!</h1>
            <p>Join Us To Start.</p>
            <button className="hero_container_btn">
              Get Started
            </button>
          </div>
          <div className="hero_container_right">
            <img src={prog} alt="logo" className="hero_container_img" />
          </div>
        </div>
      </div>
    </>
  );
};

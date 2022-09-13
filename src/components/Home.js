import React from "react";
import { Link } from "react-router-dom";
import title from "../assets/images/title-home.png";
import rick from "../assets/images/img-rick_home.png";
import rick2 from "../assets/images/img-rick_home-2.png";

function Home() {
  return (
    <div className="main-home">
      <div className="container-text-home">
        <div className="title-home">
          <img
            className="img-title"
            src={title}
            alt="Rick and Morty App  2.0"
          ></img>
        </div>

        <div className="container-btns-home">
          <div className="btn-home">
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
            <div className="btns-styles-home btn-home-cards"></div>
            <div className="btns-styles-home btn-hover-home-cards"></div>
            <Link className="a-cards" to="/rickandmorty">
              <h2>cards</h2>
            </Link>
          </div>

          <div className="btn-home">
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
            <div className="btns-styles-home btn-home-table "></div>
            <div className="btns-styles-home btn-hover-home-table"></div>
            <Link className="a-table" to="/table">
              <h2>table</h2>
            </Link>
          </div>

          <div className="btn-home">
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
            <div className="btns-styles-home btn-home-form"></div>
            <div className="btns-styles-home btn-hover-home-form"></div>
            <Link className="a-form" to="/form">
              <h2>form</h2>
            </Link>
          </div>
        </div>
      </div>

      <div className="img-home">
        <img className="rick" src={rick} alt="Rick" />
        <img className="rick-2" src={rick2} alt="Rick" />
      </div>
    </div>
  );
}

export default Home;

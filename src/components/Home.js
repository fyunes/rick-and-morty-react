import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-home">
      <div className="container-text-home">
        <div className="title-home">
          <img
            className="img-title"
            src="img/title_readme.png"
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
            <Link to="/rickandmorty">
              <h2>Rick and Morty characters</h2>
            </Link>
          </div>

          <div className="btn-home">
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
            <div className="btns-styles-home btn-home-table "></div>
            <div className="btns-styles-home btn-hover-home-table"></div>
            <Link to="/table">
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
            <Link to="/form">
              <h2>form</h2>
            </Link>
          </div>
        </div>
      </div>

      <div className="img-home">
        <img className="rick" src="img/img-rick_home.png" alt="Rick" />
        <img className="rick-2" src="img/img-rick_home-2.png" alt="Rick" />
      </div>
    </div>
  );
}

export default Home;

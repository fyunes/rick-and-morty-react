import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="main-home">
                <div className="container-title">
                    <div className="title-home">
                        <img src="img/title_readme.png"
                        alt="Rick and Morty App  2.0"
                        />
                    </div>

                    <div className="container-btns-home">
                        <div className="btn-home">
                            <span className="top"></span>
                            <span className="right"></span>
                            <span className="bottom"></span>
                            <span className="left"></span>
                            <div className="btns-styles-home btn-home-cards">
                                <Link to="/rickandmorty">
                                Rick and Morty Characters
                                </Link>
                            </div>
                        </div>

                        <div className="btn-home">
                            <span className="top"></span>
                            <span className="right"></span>
                            <span className="bottom"></span>
                            <span className="left"></span>
                            <div className="btns-styles-home btn-home-tablet">
                                <Link to="/">
                                table
                                </Link>
                            </div>
                        </div>

                        <div className="btn-home">
                            <span className="top"></span>
                            <span className="right"></span>
                            <span className="bottom"></span>
                            <span className="left"></span>
                            <div className="btns-styles-home btn-home-form">
                                <Link to="/form">
                                form
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="img-home">
                    <img className="rick" src="img/img-rick_home.png" alt="Rick" />
                </div>
            </div>
        </>
    )
}

export default Home;
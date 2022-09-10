import React from 'react';

function Home() {
    return (
<div className="main-home">
            <div className="container-title">
                <div className="title-home">
                    <img src="img/title_readme.png"
                    alt="Rick and Morty App  2.0"></img>
                </div>

                <div className="container-btns-home">
                    <div className="btn-home">
                        <span className="top"></span>
                        <span className="right"></span>
                        <span className="bottom"></span>
                        <span className="left"></span>
                        <div className="btns-styles-home btn-home-cards"></div>
                        <h2>cards</h2>
                    </div>

                    <div className="btn-home">
                        <span className="top"></span>
                        <span className="right"></span>
                        <span className="bottom"></span>
                        <span className="left"></span>
                        <div className="btns-styles-home btn-home-tablet"></div>
                        <h2>table</h2>
                    </div>

                    <div className="btn-home">
                        <span className="top"></span>
                        <span className="right"></span>
                        <span className="bottom"></span>
                        <span className="left"></span>
                        <div className="btns-styles-home btn-home-form"></div>
                        <h2>form</h2>
                    </div>
                </div>
            </div>

            <div className="img-home">
                <img className="rick" src="img/img-rick_home.png" alt="Rick"></img>
            </div>
        </div>
    )
}

export default Home;
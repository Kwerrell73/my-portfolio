import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import moodboost from "../../img/moodboost2.png";

const Portfolio = () => (
    <section id="work">


        <div className="row">

        </div>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h3 className="projectlabelthree">Mood Boost</h3>
                    <a className="text-white text-center" href="https://github.com/Kwerrell73/mood-boost">Github Repo</a>
                    <div style={{
                        backgroundImage: `url("https://i.imgur.com/gAdynxh.png")`
                    }} className="smallphotosthree">

                        <a href="https://kwerrell73.github.io/mood-boost/">Mood Boost</a>
                        <img src={moodboost} className="my-2" style={{ width: "50%" }} className="float-left" alt="screenshot of app" />
                    </div>

                </div>



                <div className="col-sm">
                    <h3 className="projectlabelthree">myMovieList</h3>
                    <a className="text-white text-center" href="https://github.com/jbryant4/Project2-Group1">Github Repo</a>
                    <div style={{
                        backgroundImage: `url("https://i.imgur.com/XqS7fp6.png")`
                    }} className="smallphotosthree">

                        <a href="https://mymovielistapp.herokuapp.com/">myMovieList</a>
                    </div>

                </div>

                <div className="col-sm">
                    <h3 className="projectlabeltwo">Teaching Artist Hub</h3>
                    <a className="text-white text-center" href="https://github.com/LindseyKrause/Teaching-Artist-Hub/">Github Repo</a>
                    <div style={{
                        backgroundImage: `url("https://i.imgur.com/ahLTLsL.png")`
                    }} className="smallphotosthree">

                        <a href="https://teaching-artist-hub.herokuapp.com/">TAH</a>

                    </div>

                </div>

            </div>
        </div>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h3 className="projectlabelthree">Weather Dashboard</h3>
                    <a className="text-white text-center" href="https://github.com/Kwerrell73/weather-dashboard">Github Repo</a>
                    <div style={{
                        backgroundImage: `url("https://i.imgur.com/PNrmqda.png")`
                    }} className="smallphotosthree">


                        <a href="https://kwerrell73.github.io/weather-dashboard/">Weather Dashboard</a>
                    </div>


                </div>
                <div className="col-sm">
                    <h3 className="projectlabelthree">Memory Game</h3>
                    <a className="text-white text-center" href="https://github.com/Kwerrell73/memory-game">Github Repo</a>

                    <div style={{
                        backgroundImage: `url("https://i.imgur.com/gg2v5M3.png")`
                    }} className="smallphotosthree">

                        <a href="https://kwerrell73.github.io/memory-game/">Memory Game</a>

                    </div>

                </div>

                <div className="col-sm">
                    <h3 className="projectlabeltwo">Work Day Scheduler</h3>
                    <a className="text-white text-center" href="https://github.com/Kwerrell73/work-day-scheduler">Github Repo</a>
                    <div style={{
                        backgroundImage: `url("https://i.imgur.com/DioNYlv.png")`
                    }} className="smallphotosthree">


                        <p>
                            <a id="workday" href="https://kwerrell73.github.io/work-day-scheduler/">Work
                                Day</a>
                        </p>
                    </div>

                </div>


            </div>
        </div>




    </section>
);

export default Portfolio;

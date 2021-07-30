import React from 'react';
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import moodboost from "../../img/moodboost2.png";

function Portfolio() {
    return (


        <section>


            <br></br>
            <br></br>
            <h2>Work</h2>

            <br></br>
            <br></br>
            <div class="row">
                <div class="col">

                    <h3 class="projectlabelone">Run Buddy Project:</h3>
                    <div  style={{
                            backgroundImage: `url("https://i.imgur.com/rgmEfEJ.png")`
                        }} class="projectcontainer">
                        <p>
                            <a href="https://kwerrell73.github.io/run-buddy/">Run Buddy</a>
                        </p>
                    </div>
                </div>
            </div>
            <br></br>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <h3 class="projectlabelthree">Mood Boost:</h3>
                        <div style={{
                            backgroundImage: `url("https://i.imgur.com/gAdynxh.png")`
                        }} class="smallphotosthree">

                            <a href="https://kwerrell73.github.io/mood-boost/">Mood Boost</a>
                            <img src={moodboost} className="my-2" style={{ width: "50%" }} class="float-left" alt="screenshot of app" />
                        </div>

                    </div>



                    <div class="col-sm">
                        <h3 class="projectlabelthree">myMovieList:</h3>
                        <div style={{
                            backgroundImage: `url("https://i.imgur.com/XqS7fp6.png")`
                        }} class="smallphotosthree">

                            <a href="https://mymovielistapp.herokuapp.com/">myMovieList</a>
                        </div>

                    </div>

                    <div class="col-sm">
                        <h3 class="projectlabeltwo">Password Generator:</h3>
                        <div style={{
                            backgroundImage: `url("https://i.imgur.com/4LXVgBj.png")`
                        }} class="smallphotosthree">

                            <a href="https://kwerrell73.github.io/password-generator/">Password Generator</a>

                        </div>
                    </div>

                </div>
            </div>
            <br></br>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <h3 class="projectlabelthree">Weather Dashboard:</h3>
                        <div style={{
                            backgroundImage: `url("https://i.imgur.com/PNrmqda.png")`
                        }} class="smallphotosthree">
                   

                            <a href="https://kwerrell73.github.io/weather-dashboard/">Weather Dashboard</a>
                        </div>


                    </div>
                    <div class="col-sm">
                        <h3 class="projectlabelthree">Memory Game:</h3>
                        <div style={{
                            backgroundImage: `url("https://i.imgur.com/gg2v5M3.png")`
                        }} class="smallphotosthree">

                            <a href=" https://kwerrell73.github.io/memory-game/">Memory Game</a>
                        </div>

                    </div>

                    <div class="col-sm">
                        <h3 class="projectlabeltwo">Work Day Scheduler:</h3>
                        <div style={{
                            backgroundImage: `url("https://i.imgur.com/DioNYlv.png")`
                        }} class="smallphotosthree">


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
}

export default Portfolio;
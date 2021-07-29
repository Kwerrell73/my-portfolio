import React from 'react';
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
    return (


        <section id="work" class="container">
          
            <div class="row">
                <div class="col">
                    <h2>Work</h2>



                    <h3 class="projectlabelone">Run Buddy Project:</h3>
                    <div class="projectcontainer">
                        <p>
                            <a href="https://kwerrell73.github.io/run-buddy/">Run Buddy</a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <h3 class="projectlabelthree">Mood Boost:</h3>
                        <div class="smallphotosthree">

                            <a href="https://kwerrell73.github.io/mood-boost/">Mood Boost</a>
                        </div>

                    </div>



                    <div class="col-sm">
                        <h3 class="projectlabelthree">myMovieList:</h3>
                        <div class="smallphotosMovie">

                            <a href="https://mymovielistapp.herokuapp.com/">myMovieList</a>
                        </div>

                    </div>

                    <div class="col-sm">
                        <h3 class="projectlabeltwo">Password Generator:</h3>
                        <div class="smallphotostwo">

                            <a href="https://kwerrell73.github.io/password-generator/">Password Generator</a>

                        </div>
                    </div>

                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <h3 class="projectlabelthree">Weather Dashboard:</h3>
                        <div class="smallphotosfour">

                            <a href="https://kwerrell73.github.io/weather-dashboard/">Weather Dashboard</a>
                        </div>


                    </div>
                    <div class="col-sm">
                        <h3 class="projectlabelthree">Memory Game:</h3>
                        <div class="smallphotosfive">

                            <a href=" https://kwerrell73.github.io/memory-game/">Memory Game</a>
                        </div>

                    </div>

                    <div class="col-sm">
                        <h3 class="projectlabeltwo">Work Day Scheduler:</h3>
                        <div class="smallphotossix">
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
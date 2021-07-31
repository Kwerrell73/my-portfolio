import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import moodboost from "../../img/moodboost2.png";

const Portfolio = () => (
  <section id="work">

          
            <div class="row">
            
            </div>
            <br></br>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <h3 class="projectlabelthree">Mood Boost</h3>
                        <a class ="text-white text-center" href="https://github.com/Kwerrell73/mood-boost">Github Repo</a>
                        <div style={{
                            backgroundImage: `url("https://i.imgur.com/gAdynxh.png")`
                        }} class="smallphotosthree">

                            <a href="https://kwerrell73.github.io/mood-boost/">Mood Boost</a>
                            <img src={moodboost} className="my-2" style={{ width: "50%" }} class="float-left" alt="screenshot of app" />
                        </div>
                      
                    </div>



                    <div class="col-sm">
                        <h3 class="projectlabelthree">myMovieList</h3>
                        <a class ="text-white text-center" href="https://github.com/jbryant4/Project2-Group1">Github Repo</a>
                        <div style={{
                            backgroundImage: `url("https://i.imgur.com/XqS7fp6.png")`
                        }} class="smallphotosthree">

                            <a href="https://mymovielistapp.herokuapp.com/">myMovieList</a>
                        </div>
                     
                    </div>

                    <div class="col-sm">
                        <h3 class="projectlabeltwo">Password Generator</h3>
                        <a class ="text-white text-center" href="https://github.com/Kwerrell73/password-generator">Github Repo</a>
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
                        <h3 class="projectlabelthree">Weather Dashboard</h3>
                        <a class ="text-white text-center" href="https://github.com/Kwerrell73/weather-dashboard">Github Repo</a>
                        <div style={{
                            backgroundImage: `url("https://i.imgur.com/PNrmqda.png")`
                        }} class="smallphotosthree">
                   

                            <a href="https://kwerrell73.github.io/weather-dashboard/">Weather Dashboard</a>
                        </div>
                     

                    </div>
                    <div class="col-sm">
                        <h3 class="projectlabelthree">Memory Game</h3>
                        <a class ="text-white text-center" href="https://github.com/Kwerrell73/memory-game">Github Repo</a>
                        
                        <div style={{
                            backgroundImage: `url("https://i.imgur.com/gg2v5M3.png")`
                        }} class="smallphotosthree">

                          
                                                      
                        </div>
                       
                    </div>

                    <div class="col-sm">
                        <h3 class="projectlabeltwo">Work Day Scheduler</h3>
                        <a class ="text-white text-center" href="https://github.com/Kwerrell73/work-day-scheduler">Github Repo</a>
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

export default Portfolio;

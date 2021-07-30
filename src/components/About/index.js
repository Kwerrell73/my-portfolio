import React from 'react';
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import KelW3 from "../../img/KelW3.jpg";
function About() {
    return (

        <section class="content">
            <section class="hero">
                <div id="about-me" class="container">
                    <div class="row">
                        <div class="col-sm">

                            <img src={KelW3} className="my-2" style={{ width: "50%" }} class="float-left" alt="headshot of developer" />
                      
                        </div>

                        <div class="col-sm about-me-text">


                            <h2>About Me</h2>
                            <br></br>
                            <p>
                                <strong>Name: </strong> Kellie Werrell
                            </p>

                            <p>
                                <strong>Bio: </strong>

                                For the past 28 years, I've worked as both an account and project manager in the travel industry. Due to
                                the
                                worldwide pandemic in 2020, I was placed on furlough.Over the past year, I've worked diligently to build
                                my
                                technical
                                skillset.I'm currently studying Full Stack Development, with focus on HTML, CSS, JavaScript, MongoDB
                                and React. It's my dream to rebuild my career as a successful
                                developer.
                            </p >
         
         </div>
         </div>
         </div>
            </section >
        </section >
                    );
}

                    export default About;
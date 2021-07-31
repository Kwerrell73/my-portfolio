import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import KelW3 from "../../img/KelW3.jpg";



const Home = () => (
    <section class="content">
        <section class="hero">
            <div id="about-me" class="container">
                <div class="row">
                    <div class="col-sm" id="headshot">
                        <br></br>
                        <img src={KelW3} className="my-2" style={{ width: "50%" }} class="float-left" alt="headshot of developer" />

                    </div>

                    <div class="col-sm about-me-text">


                        <br></br>
                        <p class="aboutmeName">
                            <strong>Name: </strong> Kellie Werrell
                        </p>
                        <br></br>
                        <p class="bio">
                            <strong>Bio: </strong>

                            For the past 28 years, I've worked as both an account and project manager in the travel industry. Due to
                            the
                            worldwide pandemic in 2020, I was placed on furlough.  Over the past year, I've worked diligently to build
                            my
                            technical
                            skillset. I'm currently studying Full Stack Development, with focus on HTML, CSS, JavaScript, MongoDB
                            and React. It's my dream to rebuild my career as a successful
                            developer.
                        </p >
                        <br></br>
                        <p class="family">
                            <strong>Family: </strong>

                            I've been married to my husband Jeff for the past 17 years.  We live in Cave Creek, AZ.  We have no children of our own,
                            but we adopted my niece and helped raise her.  We have a poodle mix rescue dog, and enjoy walks in the park, family time,
                            and nature.  My happy place is the beach and Muir Woods.
                        </p >

                    </div>
                </div>
            </div>
        </section >
    </section >
);

export default Home;

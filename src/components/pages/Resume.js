import React from 'react';
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import resumePDF from "../../assets/docs/DevResume_2021.pdf";

function Resume() {
  return (

    <section>


      <div class="col-sm">
        <br></br>
        <br></br>
        <div>
          <h2>Resume:</h2>

          <div id="resume" class="container">
            <div class="card text-left border border-primary bg-secondary">
              <div class="card-body text-left">
                <h5 class="card-title">Resume:</h5>

                <a id="resume2" class="nav-link active" href={resumePDF}>Click here to view or download my
                  resume.</a>
<br></br>
                <h5>Skills:</h5>

                <div id="resume" class="container">
                  <div class="card text-left bg-secondary">
                    <div class="card-body text-left">
                     <p>HTMl, CSS, JavaScript, Node, Express, Sequelize, mySQL, MongoDB, React, Git, GitHub, Heroku, MS Office  </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section >
  );
}

export default Resume;
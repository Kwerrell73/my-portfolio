import React from 'react';
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import resumePDF from "../../assets/docs/DevResume_2021.pdf";

function Resume() {
  return (

    <section>


      <div className="col-sm">
        <br></br>
        <br></br>
        <div>
      

          <div id="resume" className="container">
            <div className="card text-left border bg-secondary">
              <div className="card-body text-left">
                <h5 className="card-title text-white">Resume:</h5>
                <br></br>

                <a id="resume2" className="nav-link active" href={resumePDF}>***Click here to view or download my
                  resume.***</a>
<br></br>
<br></br>
<br></br>
                <h5>Skills:</h5>
                <br></br>
                <div id="resume" className="container">
                  <div className="card text-left ">
                    <div className="card-body text-left">
                     <p className="skills">HTMl, CSS, JavaScript, Node, Express, Sequelize, mySQL, MongoDB, React, Git, GitHub, Heroku, MS Office  </p>

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
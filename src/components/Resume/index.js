import React from 'react';
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import resumePDF from "../../assets/docs/DevResume_2021.pdf";

function Resume() {
    return (

        <section>

<div class="col-sm">
  
                        <h2>Resume</h2>
                       
        <div id="resume" class="container">
          <div class="card text-left border border-primary bg-secondary">
            <div class="card-body text-left">
              <h5 class="card-title">Resume:</h5>
              
                <a class="nav-link active" href={resumePDF}>My
                  Resume</a>
              
            </div>
          </div>
        </div>
      </div>
         
        </section >
    );
}

export default Resume;
import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';




function ContactForm() {
    const [formState, setFormState] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [errorMessage, setErrorMessage] = useState("");
  
    const { name, email, message } = formState;
  
    function handleChange(e) {
      if (e.target.name === "email") {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        if (!isValid) {
          setErrorMessage("Your email is invalid.");
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required!`);
        } else {
          setErrorMessage("");
        }
      }
      if(!errorMessage){
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
    }
  
    return (
      <section>
        <h1 data-testid="contact">Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="submit" type="submit">Submit</button>
        </form>
      </section>
    );
  }

function Contact() {
    return (


        <div id="contact-me">
            <br></br>
            <br></br>
            <h2>Contact:</h2>

            <br></br>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                    <div id="contact-me" class="container">
            <div class="card bg-secondary text-left border border-primary contact-me-card">
              <div class="card-body text-left">
                <h5 class="card-title text-white">Contact Me:</h5>

                        <p class="text-white">
                            Phone: 602.577.0789
                            <br></br>
                            Email: kelliewerrell@gmail.com
                            
                           <div class="row card-body text-center">
                             <h5>View my profiles:</h5>
                            <a class="nav-link active text-left text-white" id="link"
                                href="https://www.linkedin.com/in/kellie-werrell/">Linkedin
                                Profile</a>
                            <a class="nav-link active text-left text-white" id="link"
                                href="https://github.com/Kwerrell73">GitHub
                                Profile</a>
                            <a class="nav-link active text-left text-white" id="link"
                                href="https://stackoverflow.com/users/15286252/kellie-werrell">Stackoverflow
                                Profile</a>     
                                </div>
                        </p>



                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>



    );
}

export default Contact;

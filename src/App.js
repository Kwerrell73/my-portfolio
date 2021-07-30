import React, { useState } from "react";
import About from './components/About';
import Contact from './components/Contact';
import ContactForm from "./components/Contact";
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Header from './components/Header';
//import logo from './logo.svg';
import './App.css';


function App() {
  const [categories] = useState([
    {
      name: "About",
      description:
        "Short bio and head-shot",
    },
    { name: "Portfolio", description: "Projects completed" },
    { name: "Resume", description: "Delicious delicacies" },
    {
      name: "Contact",
      description: "Contact Info",
    },
  ]);

  const [contactSelected, setContactSelected] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (

    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Header>
         <main>
          {!contactSelected ? (
            <>
              <About currentCategory={currentCategory}></About>
              <About></About>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
       

        <Portfolio />
        <Resume />
        <Contact />
        </main>
       
    </div>

      );
}

      export default App;

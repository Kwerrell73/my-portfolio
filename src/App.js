import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Header from './components/Header';
//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <p>
      <Header/>
      <About />
      <Resume />
      <Portfolio />
      <Contact />



    </p>

  );
}

export default App;

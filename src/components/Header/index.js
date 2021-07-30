import React from 'react';
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
return (

    <header class="header sticky sticky--top js-header">
    <h1>
      <a class="text-white" href="/">Werrell</a>
    </h1>

<nav>

<ul>

  <li>

    <a href="#about-me">About</a>
  </li>
  <li>
    <a  href="#work">Portfolio</a>
  </li>
  <li>
    <a  href="#contact-me">Contact</a>
  </li>
  <li>
    <a  href="#resume">Resume</a>
  </li>
</ul>
</nav>

        
    </header>
);
}
 


export default Header;

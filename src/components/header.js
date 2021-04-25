import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
const Header=() => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#" 
          ><b>Brian Crisp</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html" 
                >Home/About <span class="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html" 
                >Portfolio</a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </nav>
    )
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const Header=() => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="name-background" 
          ><b>Brian Crisp</b>
        </Link>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" 
                >Home/About 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./portfolio" className="nav-link"  
                >Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="./contact" className="nav-link" 
                >Contact</Link>
              
            </li>
          </ul>
        </div>
      </nav>
    )
};

export default Header;
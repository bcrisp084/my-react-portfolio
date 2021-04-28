import React from "react";
import "./footer.css"



const Footer=() => {
  return (
    <footer className="footer">
        <div md="4" className="footer-copywright">
          <h3>copyright @ Brian Crisp 2021</h3>
        </div>
        <div>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/bcrisp084"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/brian-crisp-265a39204"
                style={{ color: "white" }}
                >
                <i className="fab fa-linkedin-in"></i>
            </a>
            </li>
          </ul>
        </div>
    </footer>
  );
}

export default Footer;
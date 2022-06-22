import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h3>
          kdynamique.com <i className="far fa-copyright" /> 2022
        </h3>
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/kdynamiqued" className="social-icon">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/kdy.productions/" className="social-icon">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCC-GUSc3umEDEew5uLS2jeg" className="social-icon">
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;

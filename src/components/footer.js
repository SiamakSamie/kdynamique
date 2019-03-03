import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h3>
          kdypro.com <i className="far fa-copyright" /> 2019
        </h3>
        <ul className="social-icons">
          <li>
            <a href="" className="social-icon">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="" className="social-icon">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="" className="social-icon">
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;

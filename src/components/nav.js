import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      isTop: true
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  getNavStyles = path => {
    return this.props.location.pathname === path ? { className: " current" } : { className: "" };
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 90;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    let linksMarkup = this.props.links.map((link, index) => {
      return (
        <li key={index} {...this.getNavStyles(link.link)}>
          <NavLink exact={true} to={link.link} onClick={() => this.closeMenu()}>
            {link.label}
          </NavLink>
        </li>
      );
    });
    return (
      <div>
        <nav className={this.state.isTop ? "menu" : "menu menuBackground"}>
          <NavLink exact={true} to="/">
            <img className={this.state.isTop ? " hideNavLogo" : ""} src={require("../Assets/images/logoWhiteSmall.png")} alt="KDY" />
          </NavLink>
          <ul className="camera">{linksMarkup}</ul>
        </nav>

        <div className={"bm-burger-menu"}>
          <img src={require("../Assets/images/logoWhiteSmall.png")} alt="KDY" />
        </div>
        <Menu className="bm-burger-button " isOpen={this.state.menuOpen} onStateChange={state => this.handleStateChange(state)}>
          <div className="bm-header">
            <img src={require("../Assets/images/logoWhiteSmall.png")} alt="KDY" />
          </div>
          <ul className="camera">{linksMarkup}</ul>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Navbar);

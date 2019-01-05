import React, { Component } from "react";

//components
import Nav from "./components/nav";
import Header from "./components/header";
import Home from "./components/pages/home";
import About from "./components/pages/about";

import { BrowserRouter as Router, Route } from "react-router-dom";

// includes
import "./Assets/css/default.min.css";
import "./Assets/css/nav.min.css";
import "./Assets/css/header.min.css";

class App extends Component {
  render() {
    let links = [
      { label: "Home", link: "/" },
      { label: "Services", link: "/services" },
      { label: "Portfolio", link: "/portfolio" },
      { label: "Our Team", link: "/about" },
      { label: "Contact Us", link: "/contact" }
    ];

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Nav className="hidden" links={links} />
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

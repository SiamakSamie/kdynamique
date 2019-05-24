import React, { Component } from "react";

//components
import Nav from "./components/nav";
import Header from "./components/header";
import Home from "./components/pages/home";
import Services from "./components/pages/services";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio";
import Footer from "./components/footer";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

// includes
import "./Assets/css/default.min.css";
import "./Assets/css/button.min.css";
import "./Assets/css/nav.min.css";
import "./Assets/css/header.min.css";
import "./Assets/css/home.min.css";
import "./Assets/css/portfolio.min.css";
import "./Assets/css/footer.min.css";
import "./Assets/css/contact.min.css";
import "./Assets/css/about.min.css";
import "./Assets/css/services.min.css";

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
        <ScrollToTop>
          <div className="App">
            <Nav className="hidden" links={links} />
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;

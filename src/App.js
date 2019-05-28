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

    window.fbAsyncInit = function() {
      const FB = window.FB;
      FB.init({
        xfbml: true,
        version: "v3.3"
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

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

            <div id="fb-root" />

            <div class="fb-customerchat" attribution="setup_tool" page_id="156784661430604" />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;

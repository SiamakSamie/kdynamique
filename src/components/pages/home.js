import React, { Component } from "react";
import { Parallax } from "react-parallax";

class Home extends Component {
  render() {
    let logos = [
      { label: "Guru", src: require("../../Assets/images/guru.png") },
      { label: "kdy", src: require("../../Assets/images/guru.png") },
      { label: "kdy", src: require("../../Assets/images/guru.png") },
      { label: "kdy", src: require("../../Assets/images/guru.png") },
      { label: "kdy", src: require("../../Assets/images/guru.png") },
      { label: "kdy", src: require("../../Assets/images/guru.png") },
      { label: "kdy", src: require("../../Assets/images/guru.png") },
      { label: "kdy", src: require("../../Assets/images/guru.png") }
    ];
    let logo = logos.map((logo, i) => (
      <img key={i} src={logo.src} alt={logo.label} />
    ));

    return (
      <div className="container-fluid">
        <div className="row homeIntroLine">
          <h1>
            Lights. Camera. <span>Action.</span>
          </h1>
        </div>
        <div className="row videoBackground">
          <div className="videoWrapper">
            <div className="resposiveVideoContainer ">
              <iframe
                title="kdy"
                src="https://player.vimeo.com/video/280309304?title=0&byline=0&portrait=0"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen={true}
              />
            </div>
          </div>
        </div>
        <div className="row homeStatement">
          <h2>Montreal Video Production Team</h2>
          <h3>
            Bruh, do you want to be super cool? Well let me tell you, the super
            coolest thing you can do is throw money in my face to make you a
            dope videop. pls n thankst
          </h3>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                <div className=" box">
                  <i className="fa fa-camera-retro fa-3x" />
                  <h4>pre production</h4>
                  <p>
                    I am too busy trying to make shit pretty to even come up
                    with decent placeholder text. Someone better help me with
                    part or imma cut a bitch
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className=" box">
                  <i className="fa fa-camera-retro fa-3x" />
                  <h4>pre production</h4>
                  <p>
                    I am too busy trying to make shit pretty to even come up
                    with decent placeholder text. Someone better help me with
                    part or imma cut a bitch
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className=" box">
                  <i className="fa fa-camera-retro fa-3x" />
                  <h4>pre production</h4>
                  <p>
                    I am too busy trying to make shit pretty to even come up
                    with decent placeholder text. Someone better help me with
                    part or imma cut a bitch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row clientList">
          <h1>Client List</h1>
          <div className="clientListLogos">{logo}</div>
        </div>
        <div className="row testimonials">
          <Parallax
            blur={10}
            bgImage={require("../../Assets/images/mtl4.jpg")}
            bgImageAlt="the cat"
            strength={200}
          >
            <h1>Testimonials section</h1>
          </Parallax>
        </div>
        <div className="row clientList">
          <h1>Call To Action Section</h1>
        </div>
      </div>
    );
  }
}

export default Home;

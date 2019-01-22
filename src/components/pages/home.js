import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Slider from "react-slick";

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

    let testimonial = [
      {
        label: "Guru",
        text: "This is a testimonial example, this is how it'll look so yeah"
      },
      {
        label: "Guru",
        text:
          "I'm a pretty big fan of this look and this slider it even has touch capabikitites"
      },
      {
        label: "Guru",
        text:
          "I remember using it a loong time ago but it got better since then"
      }
    ];
    let testimonials = testimonial.map((testimonial, i) => (
      <div key={i}>
        <h1>{testimonial.label}</h1>
        <div className="testimonialContainer">
          <i className="fas fa-quote-left" />
          <h2 alt={testimonial.label}>{testimonial.text}</h2>
          <i className="fas fa-quote-right" />
        </div>
      </div>
    ));

    var sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };

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
            blur={4}
            bgImage={require("../../Assets/images/mtl4.jpg")}
            bgImageAlt="testimonial"
            strength={600}
          >
            <h1>Testimonials section</h1>
            <Slider {...sliderSettings}>{testimonials}</Slider>
          </Parallax>
        </div>
        <div className="row clientList">
          <h1>Call to action</h1>
        </div>
      </div>
    );
  }
}

export default Home;

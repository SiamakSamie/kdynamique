import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Slider from "react-slick";

class Home extends Component {
  render() {
    let logos = [
      {
        label: "Guru",
        src: require("../../Assets/images/clientLogos/guru.png")
      },
      {
        label: "Kinka",
        src: require("../../Assets/images/clientLogos/kinka.png")
      },
      {
        label: "Visa",
        src: require("../../Assets/images/clientLogos/visa.png")
      },
      {
        label: "Combat d'archer",
        src: require("../../Assets/images/clientLogos/combatdarcher.png")
      },
      {
        label: "Arriba burrito",
        src: require("../../Assets/images/clientLogos/arriba.png")
      },
      {
        label: "Romeo & Fils",
        src: require("../../Assets/images/clientLogos/romeo.png")
      },
      {
        label: "Starlight",
        src: require("../../Assets/images/clientLogos/starlight.png")
      },
      {
        label: "Xtreme Fitness",
        src: require("../../Assets/images/clientLogos/xtreme.png")
      },
      {
        label: "ShuttleControl",
        src: require("../../Assets/images/clientLogos/shuttlecontrol.png")
      },
      {
        label: "BeauteSelect",
        src: require("../../Assets/images/clientLogos/beauteselect.png")
      }
    ];
    let logo = logos.map((logo, i) => (
      <img key={i} src={logo.src} alt={logo.label} />
    ));

    let testimonial = [
      {
        name: "Julian Crasci",
        label: "Digital Marketing Director, Guru Energy",
        text:
          "Great job on the videos! The team really likes them and it made everyone smile to watch them"
      },
      {
        name: "Oliver",
        label: "CEO, Combat D'archers",
        text:
          "My clients love watching the videos playing at our center that they filmed. It gets them excited to play. "
      },
      {
        name: "Edward Maxedon",
        label: "CEO, ShuttleControl",
        text:
          "Our expectactions were far exceeded. Working with the KDY team was an extraordinary experience. Go KDY!"
      },
      {
        name: "Jose Garcia",
        label: "Restaurant, Arriba Burito",
        text:
          "We love the videos and so do our clients. I highly recomend kdy productions to other restaurants that want to grow their business"
      }
    ];
    let testimonials = testimonial.map((testimonial, i) => (
      <div key={i}>
        <div className="testimonialContainer">
          <i className="fas fa-quote-left" />
          <h2 alt={testimonial.label}>{testimonial.text}</h2>
          <i className="fas fa-quote-right" />
        </div>
        <h3>
          {testimonial.name} <span>{testimonial.label}</span>
        </h3>
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
          <h2>Montreal-Toronto Production Team</h2>
          <h3>
            Welcome to kdy productions. We're here to put your vision on video.
            We've got an experienced team that take pride in what we do. From
            script writing to the final touches, we put care in every step of
            the production process.
          </h3>
          <hr />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                <div className=" box">
                  <i className="fas fa-pencil-alt fa-3x" />
                  <h4>Pre Production</h4>
                  <p>
                    I am too busy trying to make shit pretty to even come up
                    with decent placeholder text. Someone better help me with
                    part or imma cut a bitch
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className=" box">
                  <i className="fas fa-video fa-3x" />
                  <h4>Production</h4>
                  <p>
                    I am too busy trying to make shit pretty to even come up
                    with decent placeholder text. Someone better help me with
                    part or imma cut a bitch
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className=" box">
                  <i className="fas fa-desktop fa-3x" />
                  <h4>Post Prodcution</h4>
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
          <h1>Our Trusted Clients</h1>
          <div className="clientListLogos">{logo}</div>
        </div>
        <div className="row testimonials">
          <Parallax
            blur={4}
            bgImage={require("../../Assets/images/headerPhotos/home.JPG")}
            bgImageAlt="testimonial"
            strength={600}
          >
            <h1>Testimonials</h1>
            <Slider {...sliderSettings}>{testimonials}</Slider>
          </Parallax>
        </div>
        <div className="row callToAction">
          <h1>Call to action</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <div className=" box">
                  <i className="fas fa-chart-line fa-3x" />
                  <h4>increase revenue</h4>
                  <p>
                    I am too busy trying to make shit pretty to even come up
                    with decent placeholder text. Someone better help me with
                    part or imma cut a bitch
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className=" box">
                  <i className="far fa-smile-wink fa-3x" />
                  <h4>be happy</h4>
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
      </div>
    );
  }
}

export default Home;

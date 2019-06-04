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
    let logo = logos.map((logo, i) => <img key={i} src={logo.src} alt={logo.label} />);

    let testimonial = [
      {
        name: "Julian Crasci",
        label: "Digital Marketing Director, Guru Energy",
        text: "Great job on the videos! The team really likes them. It made everyone in the office smile!"
      },
      {
        name: "Oliver-Scott Ulysse",
        label: "CEO, Combat D'archers",
        text: "My clients love watching the videos produced by KDY. We have them playing at our center. It gets everyone excited to play. "
      },
      {
        name: "Edward Maxedon",
        label: "CEO, ShuttleControl",
        text: "Our expectactions were far exceeded. Working with the KDY team was an extraordinary experience. Go KDY!"
      },
      {
        name: "Jose Garcia",
        label: "Restaurant, Arriba Burito",
        text: "We love the videos and so do our clients. I highly recomend kdy productions to other restaurants that want to grow their business!"
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
            Welcome to kdy productions. We're here to put your vision on video. We've got an experienced team that take pride in what we do. From
            script writing to the final touches, we put care in every step of the production process.
          </h3>
          <hr />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                <div className=" box">
                  <i className="fas fa-pencil-alt fa-3x" />
                  <h4>Creativity</h4>
                  <p>
                    We're always thinking of new ways to spice up the content we create. We use new cinematic techniques and creative concepts to
                    capture the viewer's attention.
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className=" box">
                  <i className="fas fa-hands-helping fa-3x" />
                  <h4>Teamwork</h4>
                  <p>
                    Producing quality content needs a team with unique skills. It also depends on YOU! We'll work together closely to make your vision
                    come to life!
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className=" box">
                  <i className="fas fa-business-time fa-3x" />
                  <h4>Professionalism</h4>
                  <p>
                    We ensure that every process is held to the highest quality. We want the final product to be amazing but we also want the process
                    to get there to be a great experience.
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
          <Parallax blur={4} bgImage={require("../../Assets/images/headerPhotos/home.JPG")} bgImageAlt="testimonial" strength={600}>
            <h1>Testimonials</h1>
            <Slider {...sliderSettings}>{testimonials}</Slider>
          </Parallax>
        </div>
        <div className="row callToAction">
          <img src={require("../../Assets/images/logoCallToAction.png")} alt="KDY" className="responsive" />
        </div>
      </div>
    );
  }
}

export default Home;

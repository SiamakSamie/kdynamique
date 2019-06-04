import React, { Component } from "react";

class Services extends Component {
  render() {
    let services = [
      {
        title: "Video Production",
        logo: "fas fa-video fa-3x",
        description: "You will receive amazing video captured by our talented crew using our professional gear."
      },
      {
        title: "Content Development",
        logo: "fas fa-box-open fa-3x",
        description: "We'll help grow your brand and business by providing a long term solution for content."
      },
      {
        title: "Events",
        logo: "fas fa-cocktail fa-3x",
        description: "If it's live, we can handle it: Concerts, festivals, weddings, sporting events, shows, etc."
      },
      {
        title: "Photography",
        logo: "fas fa-camera fa-3x",
        description: "3,2,1 SMILE! Handling your photography needs from product, lifestyle, studio, weddings and more."
      },
      {
        title: "Editing",
        logo: "fas fa-edit fa-3x",
        description: "We've got editing wizards! They'll transform your raw footage to an engaging and exciting video."
      },
      {
        title: "VFX",
        logo: "fas fa-bomb fa-3x",
        description: "Add a little excitement to your video with graphic animations, logo animations, enhanced visuals, and more."
      },
      {
        title: "Music",
        logo: "fas fa-music fa-3x",
        description: "Bring your video to life with some original music compositions, jingles, background music, and more."
      },
      {
        title: "Sound Design",
        logo: "fas fa-microphone-alt fa-3x",
        description: "All videos need an audio specialist for on set recording, VO recording, mixing, mastering, and more."
      },
      {
        title: "Equipment Rental",
        logo: "fas fa-truck-moving fa-3x",
        description: "Cameras, lights, gimbals, drone, etc. Contact us for a full list of our equipment."
      }
    ];

    let service = services.map((object, i) => (
      <div key={i} className="col-md-4 col-sm-6">
        <div className=" box">
          <i className={object.logo} />
          <h4>{object.title}</h4>
          <p>{object.description}</p>
        </div>
      </div>
    ));

    return (
      <div className="servicesContainer">
        <div className="services">
          <div className="row">{service}</div>
        </div>
      </div>
    );
  }
}

export default Services;

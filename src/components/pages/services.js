import React, { Component } from "react";

class Services extends Component {
  render() {
    let services = [
      {
        title: "Video Production",
        logo: "fas fa-pencil-alt fa-3x",
        description:
          "I am too busy trying to make shit pretty to even come up with decent placeholder text. Someone better help me with part or imma cut a bitch"
      },
      {
        title: "Content Development",
        logo: "fas fa-pencil-alt fa-3x",
        description:
          "I am too busy trying to make shit pretty to even come up with decent placeholder text. Someone better help me with part or imma cut a bitch"
      },
      {
        title: "Live Events",
        logo: "fas fa-pencil-alt fa-3x",
        description:
          "I am too busy trying to make shit pretty to even come up with decent placeholder text. Someone better help me with part or imma cut a bitch"
      },
      {
        title: "Photography",
        logo: "fas fa-pencil-alt fa-3x",
        description:
          "I am too busy trying to make shit pretty to even come up with decent placeholder text. Someone better help me with part or imma cut a bitch"
      },
      {
        title: "Editing",
        logo: "fas fa-pencil-alt fa-3x",
        description:
          "I am too busy trying to make shit pretty to even come up with decent placeholder text. Someone better help me with part or imma cut a bitch"
      },
      {
        title: "VFX",
        logo: "fas fa-pencil-alt fa-3x",
        description:
          "I am too busy trying to make shit pretty to even come up with decent placeholder text. Someone better help me with part or imma cut a bitch"
      },
      {
        title: "Music",
        logo: "fas fa-pencil-alt fa-3x",
        description:
          "I am too busy trying to make shit pretty to even come up with decent placeholder text. Someone better help me with part or imma cut a bitch"
      }
    ];

    let service = services.map((object, i) => (
      <div key={i} className="col-sm-4">
        <div className=" box">
          <i className={object.logo} />
          <h4>{object.title}</h4>
          <p>{object.description}</p>
        </div>
      </div>
    ));

    return (
      <div className="services">
        <div className="container-fluid">{service}</div>
      </div>
    );
  }
}

export default Services;

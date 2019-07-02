import React, { Component } from "react";
import Modal from "react-awesome-modal";

class About extends Component {
  constructor() {
    super();
    this.state = {
      visisble: false,
      modalHeader: "",
      modalBody: "",
      modalFirstName: "",
      modalLastName: ""
    };
  }

  openModal(img, desc, first, last) {
    this.setState({
      modalPhoto: img,
      modalBody: desc,
      modalFirstName: first,
      modalLastName: last,
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    let members = [
      {
        firstName: "Malik",
        lastName: "Bouabid",
        description: "Co-founder, director of operations, and production manager.",
        descriptionLong:
          "I have an eye for moving images and a love for capturing their moments. My team is my strength. Watermelon is my favorite fruit.",
        image: require("../../Assets/images/teamPhotos/malik.png")
      },
      {
        firstName: "Siamak",
        lastName: "Samie",
        description: "Co-founder, producer, and creative director.",
        descriptionLong: "I want everything I produce to exceed expectations. My team hasn't let me down so far. ",
        image: require("../../Assets/images/teamPhotos/siamak.png")
      },
      {
        firstName: "Andrew",
        lastName: "Hanichkovsky",
        description: "Co-founder, production coordinator, producer.",
        descriptionLong:
          "I'm the guy on set that can handle any problem thrown my way. A 16 hour shoot at night in the rain? that's a walk in the park.",
        image: require("../../Assets/images/teamPhotos/frank.jpg")
      },
      {
        firstName: "Andy",
        lastName: "Le",
        description: "Audio specialist and associate producer.",
        descriptionLong:
          "I have a bachelor's in Electro Acoustic studies from Concordia and several years of experience in audio production. I will make you sound beautiful.",
        image: require("../../Assets/images/teamPhotos/andy.jpg")
      }
    ];

    let member = members.map((object, i) => (
      <figure
        key={i}
        className="aboutUsMemberContainer"
        onClick={this.openModal.bind(this, object.image, object.descriptionLong, object.firstName, object.lastName)}>
        <img src={object.image} alt="Headshot" />
        <figcaption>
          <h2>
            {object.firstName} <span>{object.lastName}</span>
          </h2>
          <p>{object.description}</p>
        </figcaption>
      </figure>
    ));

    return (
      <div className="container-fluid about">
        <h2>Our mission</h2>
        <p>
          Kdy productions was initially created to make highly creative, intensive, and dynamic action videos. Throughout the years, we've evolved and
          now offer a multitude of services. From corporate videos, to feature films, we've got the right people and the right attitude.
        </p>
        <hr />
        {member}
        <Modal visible={this.state.visible} width="400" height="340" effect="fadeInUp" onClickAway={() => this.closeModal()}>
          <div>
            <h2 className="aboutUsHeader">
              {this.state.modalFirstName} {this.state.modalLastName}
            </h2>
            <img className="aboutUsPhoto" src={this.state.modalPhoto} alt="KDY" />
            <h3 className="aboutUsBody">{this.state.modalBody}</h3>
            <button className="btn btn-primary aboutUsModalButton" onClick={() => this.closeModal()}>
              close
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default About;

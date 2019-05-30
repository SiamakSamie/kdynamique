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
        description:
          "Co-Founder and Some punk who thinks that kdy can be successful lol",
        descriptionLong:
          "Malik is the kinf of guy that will be like... 'Yo i did the math' and then say something as if it'll actually be profitable but he sucks at math so it never is.",
        image: require("../../Assets/images/teamPhotos/malik.png")
      },
      {
        firstName: "Siamak",
        lastName: "Samie",
        description: "Co-Founder and is a very sexy man with beautiful hair",
        descriptionLong:
          "Siamak spend 90% of the time staring into a mirror and telling himself he is the prettiest stuntman of them all. ",
        image: require("../../Assets/images/teamPhotos/siamak.png")
      },
      {
        firstName: "Frank",
        lastName: "Hatchetnov",
        description:
          "Stunt Grip and a silly slav boi. has the weirdest beard in town",
        descriptionLong:
          "Dis boi is a crazy boi. One day he'll be an actra stuntman... maybe in his fourties. He'll never give up tho",
        image: require("../../Assets/images/teamPhotos/frank.jpg")
      },
      {
        firstName: "Andy",
        lastName: "Le",
        description: "Our talented audio engineer",
        descriptionLong:
          "Andy studies audio engineering at Concordia University. He has Blah blah blah composition n sound design",
        image: require("../../Assets/images/teamPhotos/andy.jpg")
      }
    ];

    let member = members.map((object, i) => (
      <figure
        key={i}
        className="aboutUsMemberContainer"
        onClick={this.openModal.bind(
          this,
          object.image,
          object.descriptionLong,
          object.firstName,
          object.lastName
        )}
      >
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
          Kdy productions was initially created for to make highly creative,
          intensive, and dynamic action videos. Throughout the years, we've
          evolved and now offer a multitude of services. From corporate videos,
          to feature films, we've got the right people and the right attitude.
        </p>
        <hr />
        {member}
        <Modal
          visible={this.state.visible}
          width="400"
          height="340"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <h2 className="aboutUsHeader">
              {this.state.modalFirstName} {this.state.modalLastName}
            </h2>
            <img
              className="aboutUsPhoto"
              src={this.state.modalPhoto}
              alt="KDY"
            />
            <h3 className="aboutUsBody">{this.state.modalBody}</h3>
            <button
              className="btn btn-primary aboutUsModalButton"
              onClick={() => this.closeModal()}
            >
              close
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default About;

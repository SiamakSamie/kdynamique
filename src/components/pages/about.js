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
        description: "Co-Founder and Some punk who thinks that kdy can be successful lol",
        descriptionLong:
          "Malik is the kinf of guy that will be like... 'Yo i did the math' and then say something as if it'll actually be profitable but then it turns out to be nothing. this just goes to show that nik can't do math",
        image: "https://pkimgcdn.peekyou.com/afb9ebbf22f634f59bacdc53d5cf4165.jpeg"
      },
      {
        firstName: "Siamak",
        lastName: "Samie",
        description: "Co-Founder and is a very sexy man with beautiful hair",
        descriptionLong: "Siamak spend 90% of the time staring into a mirror and telling himself he is the prettiest stuntman of them all. ",
        image: "https://i.vimeocdn.com/portrait/19867204_300x300.webp"
      },
      {
        firstName: "Frank",
        lastName: "Hatchetnov",
        description: "Stunt Grip and a silly slav boi. has the weirdest beard in town",
        descriptionLong: "Dis boi is a crazy boi. One day he'll be an actra stuntman... maybe in his fourties. He'll never give up tho",
        image:
          "https://media.licdn.com/dms/image/C5603AQE4XCg6Suay7Q/profile-displayphoto-shrink_800_800/0?e=1559174400&v=beta&t=iQcjNbHmbzyUnnV5skS5WvRU6YlwPhCTvjtv7kjKWXA"
      },
      {
        firstName: "Adam",
        lastName: "Shade",
        description: "CHain Smoker with a cool stage name. Likes beer choking himself for pleasure",
        descriptionLong: "Adam Shade is a ladie's man... just jokes all he does is smoke and watch porn",
        image:
          "https://media.licdn.com/dms/image/C4D03AQEa0Nwow1pO5g/profile-displayphoto-shrink_800_800/0?e=1559174400&v=beta&t=GMCnnQvJeZkCckW52mHt98snZc686-WA7I0WsYfDYbY"
      }
    ];

    let member = members.map((object, i) => (
      <figure
        key={i}
        className="snip0051"
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
          Kdy productions was initially created for the purpose of creating highly creative, intensive, and dynamic action videos. Throughout the
          years, we've evolved and now offer a multitude of services. From corporate videos, to feature films, we've got the right people and the
          right attitude.
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

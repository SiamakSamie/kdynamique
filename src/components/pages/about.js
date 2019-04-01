import React, { Component } from "react";

class About extends Component {
  render() {
    let members = [
      {
        firstName: "Malik",
        lastName: "Bouabid",
        description: "Co-Founder and Some punk who thinks that kdy can be successful lol",
        image: "https://pkimgcdn.peekyou.com/afb9ebbf22f634f59bacdc53d5cf4165.jpeg"
      },
      {
        firstName: "Siamak",
        lastName: "Samie",
        description: "Co-Founder and Some dumbass that knows it'll never be successful but continues with it anyways",
        image: "https://i.vimeocdn.com/portrait/19867204_300x300.webp"
      },
      {
        firstName: "Frank",
        lastName: "Hatchetnov",
        description: "Stunt Grip and Some dumbass that knows it'll never be successful but continues with it anyways",
        image:
          "https://media.licdn.com/dms/image/C5603AQE4XCg6Suay7Q/profile-displayphoto-shrink_800_800/0?e=1559174400&v=beta&t=iQcjNbHmbzyUnnV5skS5WvRU6YlwPhCTvjtv7kjKWXA"
      },
      {
        firstName: "Adam",
        lastName: "Shade",
        description: "CHain Smoker and Some dumbass that knows it'll never be successful but continues with it anyways",
        image:
          "https://media.licdn.com/dms/image/C4D03AQEa0Nwow1pO5g/profile-displayphoto-shrink_800_800/0?e=1559174400&v=beta&t=GMCnnQvJeZkCckW52mHt98snZc686-WA7I0WsYfDYbY"
      }
    ];

    let member = members.map((object, i) => (
      <figure key={i} className="snip0051">
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
      </div>
    );
  }
}

export default About;

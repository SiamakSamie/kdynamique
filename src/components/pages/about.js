import React, {Component} from "react";
import Modal from "react-awesome-modal";

class About extends Component {
	constructor() {
		super();
		this.state = {
			visisble: false,
			modalHeader: "",
			demoReelUrl: "",
			modalFirstName: "",
			modalLastName: ""
		};
	}

	openModal(img, url, first, last) {
		this.setState({
			modalPhoto: img,
			demoReelUrl: url,
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
				description: "Performer, actor, content creator, action filmmaker.",
				url: "https://www.youtube.com/embed/mbhw9uRbQ-Q",
				image: require("../../Assets/images/teamPhotos/malik.png")
			},
			{
				firstName: "Siamak",
				lastName: "Samie",
				description: "Performer, choreographer, actor, content creator.",
				url: "https://player.vimeo.com/video/700139610?h=caaced28ac",
				image: require("../../Assets/images/teamPhotos/siamak.jpg")
			},
			{
				firstName: "Andrew",
				lastName: "Hanichkovsky",
				description: "Performer, actor, content creator.",
				url: "https://www.youtube.com/embed/euJbjsZJwkY",
				image: require("../../Assets/images/teamPhotos/frank.jpg")
			},
		];

		let member = members.map((object, i) => (
			<figure
				key={i}
				className="aboutUsMemberContainer"
				onClick={this.openModal.bind(this, object.image, object.url, object.firstName, object.lastName)}>
				<img src={object.image} alt="Headshot"/>
				<figcaption>
					<h2>
						{object.firstName} <span>{object.lastName}</span>
					</h2>
					<p>{object.description}</p>
					<h3>Click For Reel <i className="fas fa-arrow-right"/></h3>
				</figcaption>
			</figure>
		));

		return (
			<div className="container-fluid about">
				<h2>Mission</h2>
				<p>
					To create intense and dynamic content. We love all aspects of action in film from conception to post
					production. There is always more to learn and we're excited about that.
				</p>
				<hr/>

				<h4>
					A little about the creators of kdynamique:
				</h4>
				<p>
					Friends since college who started a martial arts club and then began making action films. Throughout
					the years we got better and had the privilege to work with talented people in various fields.
				</p>
				{member}
				<Modal visible={this.state.visible} width="700" effect="fadeInUp"
				       onClickAway={() => this.closeModal()}>
					<div style={{height:"100%"}}>
						<h2 className="aboutUsHeader">
							{this.state.modalFirstName} {this.state.modalLastName}
						</h2>
						<img className="aboutUsPhoto" src={this.state.modalPhoto} alt="KDY"/>
						<div className="videoWrapper aboutUsVideo">
							<div className="resposiveVideoContainer">
								{ this.state.visible &&
									<iframe
										title="kdy"
										src={this.state.demoReelUrl}
										frameBorder="0"
										allowFullScreen={true}
									/>
								}
							</div>
						</div>
						<button className="btn btn-primary" onClick={() => this.closeModal()}>
							close
						</button>
					</div>
				</Modal>
			</div>
		);
	}
}

export default About;

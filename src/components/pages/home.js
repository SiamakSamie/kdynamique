import React, {Component} from "react";
import {Parallax} from "react-parallax";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

class Home extends Component {
	render() {
		let logos = [
			{
				label: "Fantasia (selection)",
				src: require("../../Assets/images/laurels/fantasia.jpg")
			},
			{
				label: "My Rode Reel (winner)",
				src: require("../../Assets/images/laurels/rode.png")
			},
			{
				label: "48H Film Festival (winner)",
				src: require("../../Assets/images/laurels/48h.png")
			},
			{
				label: "Action On (selection)",
				src: require("../../Assets/images/laurels/actionon.png")
			},
			{
				label: "Crank (selection)",
				src: require("../../Assets/images/laurels/crank.png")
			},
		];
		let logo = logos.map((logo, i) =>
			<div>
				<img key={i} src={logo.src} alt={logo.label}/>
				<p>{logo.label}</p>
			</div>
		);

		let film = [
			{
				title: "The Horror Experience",
				url: "/portfolio",
				date: "Digital Marketing Director, Guru Energy",
				desc: "Cabin in the woods slasher style film with a twist. A group of teenagers are seeking the horror experience and achieve it by kidnapping someone and forcing them to play the part of the killer"
			},
			{
				title: "Project Midnight",
				url: "/portfolio",
				desc: "A multi-person fight choreography between two gangs over a misunderstanding. A large scale fight that intertwines with each other."
			},
			{
				title: "Sparring Sesh",
				url: "/portfolio",
				desc: "Tech mogul uses a local boxer to test his AI fight simulator. With each fight, the boxer gets better and the AI gets smarter. "
			},
			{
				title: "Sword Hero",
				url: "/portfolio",
				desc: "One man against a small army of sword wielders."
			},
			{
				title: "Escape",
				url: "/portfolio",
				desc: "1-take action scene, with no hidden cuts. A group of unarmed prisoners attempt to escape from a military facility to avoid being used as medical test subjects."
			},
			{
				title: "Perdition",
				url: "/portfolio",
				desc: "A man relives the same moment of being dragged into the woods and murdered. Can he get to the bottom of why he's stuck in this loop?"
			}
		];
		let films = film.map((film, i) => (
			<div key={i}>
				<h2>
					<span>{film.title}</span>
				</h2>
				<div className="filmContainer">
					<i className="fas fa-quote-left"/>
					<h2>{film.desc}</h2>
					<i className="fas fa-quote-right"/>
				</div>
				<NavLink exact={true} to="/portfolio">
					<h3><span>Watch Now <i className="fas fa-arrow-right"/></span></h3>
				</NavLink>
			</div>
		));

		var sliderSettings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 8000
		};

		return (
			<div className="container-fluid">
				<div className="row homeIntroLine">
					<h1>
						EXPECT SOME ACTION
					</h1>
				</div>
				<div className="row videoBackground">
					<div className="videoWrapper">
						<div className="resposiveVideoContainer ">
							<iframe
								title="kdy"
								src="https://www.youtube.com/embed/517VoWZj43Y"
								frameBorder="0"
								allowFullScreen={true}
							/>
						</div>
					</div>
				</div>
				<div className="row homeStatement">
					<h2>Action Design and Performance </h2>
					<h3>
						Kdynamique is a team of action-oriented humans that create content from conception to final
						touches.
					</h3>
					<hr/>
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-6">
								<div className=" box">
									<i className="fas fa-video fa-3x"/>
									<h4>Previsuals</h4>
									<div className="videoWrapper">
										<div className="resposiveVideoContainer ">
											<iframe
												title="kdy"
												src="https://player.vimeo.com/video/724134433?h=50442502ff"
												frameBorder="0"
												allowFullScreen={true}
											/>
										</div>
									</div>
									<NavLink exact={true} to="/portfolio">
										<p>See more previsuals <i className="fas fa-arrow-right"/></p>
									</NavLink>
								</div>
							</div>
							<div className="col-sm-6">
								<div className=" box">
									<i className="fas fa-film fa-3x"/>
									<h4>Productions</h4>
									<div className="videoWrapper">
										<div className="resposiveVideoContainer ">
											<iframe
												title="kdy"
												src="https://player.vimeo.com/video/723521065?h=77f614d426"
												frameBorder="0"
												allowFullScreen={true}
											/>
										</div>
									</div>
									<NavLink exact={true} to="/portfolio?index=corporate">
										<p>See more films <i className="fas fa-arrow-right"/></p>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row awardList">
					<h1>Awards and Recognitions</h1>
					<div className="awardListLogos">{logo}</div>
				</div>
				<div className="row films">
					<Parallax blur={4} bgImage={require("../../Assets/images/headerPhotos/home.JPG")} bgImageAlt="film"
					          strength={600}>
						<h1>Our Favorite Creations</h1>
						<Slider {...sliderSettings}>{films}</Slider>
					</Parallax>
				</div>
				<div className="row callToAction">
					<img src={require("../../Assets/images/kdyTextBlack.png")} alt="KDY" className="responsive"/>
				</div>
			</div>
		);
	}
}

export default Home;

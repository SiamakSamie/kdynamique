import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {Parallax} from "react-parallax";
import {NavLink} from "react-router-dom";

class Header extends Component {
	parallaxImage(param) {
		switch (param) {
			case "/":
				return [require("../Assets/images/headerPhotos/home.JPG"), "", "", ""];
			case "/portfolio":
				return [
					require("../Assets/images/headerPhotos/portfolio.jpg"),
					"Portfolio",
					".",
					"Proudly created by us"
				];
			case "/about":
				return [
					require("../Assets/images/headerPhotos/about.jpg"),
					"About Us",
					".",
					"What is kdynamique?"
				];
			case "/contact":
				return [
					require("../Assets/images/headerPhotos/contactUs.jpg"),
					"Contact Us",
					".",
					"Happy to answer any questions!"
				];
			default:
				return [
					require("../Assets/images/headerPhotos/home.JPG"),
					"404 Page Not Found",
					".",
					"hmm this page doesnt exist"
				];
		}
	}

	// className="container homeHeaderContent"
	homeHeaderContent(param) {
		return param === "/"
			? {className: " container homeHeaderContent"}
			: {className: "hidden"};
	}

	render() {
		return (
			<Parallax
				className="parallax"
				blur={{min: -9, max: 15}}
				bgImage={this.parallaxImage(this.props.location.pathname)[0]}
				bgImageAlt="Parallax Background Image"
				strength={400}
			>
				<div {...this.homeHeaderContent(this.props.location.pathname)}>
					<div className="row ">
						<div className="col-xs-12">
							<img
								className="logo"
								src={require("../Assets/images/kdyLogoWhite.png")}
								alt="KDY"
							/>
						</div>
						<div className="col-xs-12">
							{/*<a href="tel:1-438-998-0466">*/}
							{/*  <button className="btn btn-primary">*/}
							{/*    <span className="btn-content">(514) 559-0578</span>*/}
							{/*    <span className="icon">*/}
							{/*      <i className="fa fa-phone" aria-hidden="true" />*/}
							{/*    </span>*/}
							{/*  </button>*/}
							{/*</a>*/}
							<NavLink exact={true} to="/portfolio">
								<button className="btn btn-danger">
									<span className="btn-content">click here to see our portfolio</span>
									<span className="icon">
                    <i className="fa fa-film" aria-hidden="true"/>
                  </span>
								</button>
							</NavLink>
						</div>
					</div>
				</div>

				<div className="parallaxTextContainer">
					<h1>
						{this.parallaxImage(this.props.location.pathname)[1]}
						<span>{this.parallaxImage(this.props.location.pathname)[2]}</span>
					</h1>
					<h2>{this.parallaxImage(this.props.location.pathname)[3]}</h2>
				</div>
				<div className="parallax-image-container"/>
			</Parallax>
		);
	}
}

export default withRouter(Header);

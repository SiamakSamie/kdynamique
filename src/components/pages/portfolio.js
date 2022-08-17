import React, {Component} from "react";
import Masonry from "react-masonry-component";
import ModalVideo from "react-modal-video";

const masonryOptions = {
	fitWidth: true,
	columnWidth: 25
};

class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeIndex: "film",
			isOpen: false,
			videoID: "SZq4HRF1ErE"
		};

		this.toggleClass = this.toggleClass.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	componentDidMount() {
		const search = this.props.location.search;
		const params = new URLSearchParams(search);
		const index = params.get("index");
		const videoId = params.get("video");


		if (index != null) {
			this.setState({activeIndex: index});
		}

		if (videoId != null) {
			this.openModal(videoId);
		}
	}

	updateUrl = index => {
		this.props.history.push({
			search: "?index=" + index
		});
	};

	updateUrlWithVideo = videoID => {
		this.props.history.push({
			search: "?index=" + this.state.activeIndex + "&video=" + videoID
		});
	};

	toggleClass(index) {
		this.setState({activeIndex: index});
		this.updateUrl(index);
	}

	openModal(videoID) {
		this.updateUrlWithVideo(videoID);
		this.setState({isOpen: true, videoID: videoID});
	}

	render() {
		let media = [

			//Films
			{name: "Sparring Session", category: "film", videoID: "m5xgRBn9R0k"},
			{name: "Sword Hero", category: "film", videoID: "AejEoq9DBug"},
			{name: "Escape", category: "film", videoID: "0_kwysdCmrw"},
			{name: "The Horror Experience", category: "film", videoID: "JAtb627mfU4"},
			{name: "Briefcase", category: "film", videoID: "j9eGjivQiHI"},
			{name: "Perdition", category: "film", videoID: "NUtLptl7RB0"},
			{name: "Project Midnight", category: "film", videoID: "avIr-QQk8JE"},
			{name: "Shut Up!", category: "film", videoID: "JYmzTlUM-Zk"},
			{name: "Happy New Year!", category: "film", videoID: "oWzIUU-ystE"},
			{name: "Anticipation", category: "film", videoID: "-PKksZtYXGA"},
			{name: "Knife Fight Miami", category: "film", videoID: "lM-jsOcDrYs"},
			{name: "No Name", category: "film", videoID: "J-ZSm0Lib_g"},
			{name: "Tom Wick", category: "film", videoID: "aRRTKnFBZI4"},
			{name: "Warehouse", category: "film", videoID: "xTh-OCV-Kqg"},

			//Previsuals
			{name: "The Kill", category: "previsual", videoID: "sVb_4PvPrWI"},
			{name: "Black vs. Red", category: "previsual", videoID: "GPgrm3S1pRM"},
			{name: "The Psycho", category: "previsual", videoID: "8F8oL2VtnfE"},
			{name: "The Bully", category: "previsual", videoID: "cri-VZSJEDE"},
			{name: "G1man Kill 2", category: "previsual", videoID: "EuyetBHqCnc"},
			{name: "The Assassin", category: "previsual", videoID: "zvRUzErltPM"},
			{name: "Sword King", category: "previsual", videoID: "XVrf8inIavA"},
			{name: "Quick Time Event", category: "previsual", videoID: "WFCh_h3-Zo8"},
			{name: "Blinded by Sound", category: "previsual", videoID: "YNKTfvyf4zY"},
			{name: "ZDY: Night Zombies", category: "previsual", videoID: "PmLIT-FSDyI"},
			{name: "The Heist", category: "previsual", videoID: "ixHJBBPciUg"},
			{name: "G1man Kill 1", category: "previsual", videoID: "bCUn8C_Hqwo"},
			{name: "Knife Fight Previz", category: "previsual", videoID: "eJyECpz3kcs"},

			//Fight Scenes
			{name: "One-Take Knife Fight", category: "fight", videoID: "aLOVtb-_nZY"},
			{name: "Elevator Gun Fight", category: "fight", videoID: "pTdsnvGxsl0"},
			{name: "Street Fight", category: "fight", videoID: "M-crV2gA7QE"},
			{name: "Parking Lot Fight", category: "fight", videoID: "NeF0RlWwVz0"},
			{name: "Train Fight", category: "fight", videoID: "SdfuYIaxBis"},
			{name: "Slow Motion: Knife Concept", category: "fight", videoID: "HRSMzjzPaSk"},

			//Vlogs
			{name: "KDY Chronicles: Momo", category: "vlog", videoID: "c2hwtwiWCf4"},
			{name: "KDY Chronicles: The Tricker", category: "vlog", videoID: "30tYmX75biM"},
			{name: "KDY Chronicles: Zihan", category: "vlog", videoID: "sUAxRsjVicY"},
			{name: "Montreal's Underrated", category: "vlog", videoID: "Oy_CGrUiMao"},
			{name: "Fight Study #1", category: "vlog", videoID: "L7EEq3_czGU"},
			{name: "Fight 4 Thought #1", category: "vlog", videoID: "0hvbeef0oQk"},
			{name: "Wirework Workshop", category: "vlog", videoID: "RegCHnqbed4"},
			{name: "Training Basic 8 Count", category: "vlog", videoID: "fel4oOhRjdI"},

			//Bts
			{name: "BTS: Escape", category: "bts", videoID: "L_aLGCEoUsE"},
			{name: "BTS: Combat D'Archers", category: "bts", videoID: "Ebok-iyGjCU"},
			{name: "BTS: Maillot jaune", category: "bts", videoID: "M-aNVqGy5y4"},
			{name: "BTS: Sparring Sesh", category: "bts", videoID: "7soqRij5FXs"},
			{name: "BTS: The Heist", category: "bts", videoID: "wf-5qgviUyI"},
			{name: "BTS: The Assassin", category: "bts", videoID: "f5sujvVxC3Q"},
			{name: "BTS: Blinded By Sound", category: "bts", videoID: "AYCt_LBSnuU"},
			{name: "BTS: G1nman Kill 2", category: "bts", videoID: "Px8VJtv9oJA"},
			{name: "BTS: The Bully", category: "bts", videoID: "KkahDTc0ENY"},
			{name: "BTS: The Psycho", category: "bts", videoID: "u2LEVf3Oe7g"},
			{name: "BTS: Black vs Red", category: "bts", videoID: "lwl9BA9JYvE"},
			{name: "BTS: The Kill", category: "bts", videoID: "_0z_M940QPk"},
			{name: "BTS: So Alive", category: "bts", videoID: "1YCSIUaWyLA"},
			{name: "BTS: Nequita Russell", category: "bts", videoID: "boerFoK-vEU"},
			{name: "BTS: Siamak x Jeremy", category: "bts", videoID: "Dy1GqL-UqWs"},
			{name: "BTS: Andrew x Yuna", category: "bts", videoID: "6Zr8YY_Row8"},
			{name: "BTS: Komodo Test", category: "bts", videoID: "G5DLgW9WxUM"},
			{name: "BTS: Shut Up", category: "bts", videoID: "LqG9Ud2sYUs"},
			{name: "BTS: Pirate Ship", category: "bts", videoID: "EKQyxCZLfWA"},

			//Miscellaneous
			{name: "Stayin Alive - Wellington", category: "misc", videoID: "O1u6EwvhyHE"},
			{name: "Ford: Goes Fast", category: "misc", videoID: "kXsJ9qb-qsM"},
			{name: "Car hit insurance", category: "misc", videoID: "KQaTr1IFhwI"},
			{name: "Bixi Fight", category: "misc", videoID: "SVinxafUlII"},
			{name: "Kitchen Fight", category: "misc", videoID: "bswj4h0ztzc"},

			//Ads
			{name: "Combat d'Archers 2", category: "ads", videoID: "-Azkckxeb_g"},
			{name: "Combat Nerf", category: "ads", videoID: "m_FavpdOvAU"},
			{name: "Guru Flip", category: "ads", videoID: "9ZFBbHixKEw"},
			{name: "Guru School", category: "ads", videoID: "UJ_JgToErXo"},
			{name: "Mario Kart Live Action", category: "ads", videoID: "vvR3-qzljb0"},
			{name: "Combat d'Archers", category: "ads", videoID: "P3UolCH2xtA"},
			{name: "iBar concept 1", category: "ads", videoID: "2gq7RNy8aRs"},
			{name: "iBar concept 2", category: "ads", videoID: "8p9sJ0sgf0k"},
		];
		let filteredMedia;
		if (this.state.activeIndex === "film") {
			filteredMedia = media.filter(function (media) {
				return media.category === "film";
			});
		} else if (this.state.activeIndex === "fight") {
			filteredMedia = media.filter(function (media) {
				return media.category === "fight";
			});
		} else if (this.state.activeIndex === "previsual") {
			filteredMedia = media.filter(function (media) {
				return media.category === "previsual";
			});
		} else if (this.state.activeIndex === "bts") {
			filteredMedia = media.filter(function (media) {
				return media.category === "bts";
			});
		} else if (this.state.activeIndex === "vlog") {
			filteredMedia = media.filter(function (media) {
				return media.category === "vlog";
			});
		}
		else if (this.state.activeIndex === "misc") {
			filteredMedia = media.filter(function (media) {
				return media.category === "misc";
			});
		}
		else if (this.state.activeIndex === "ads") {
			filteredMedia = media.filter(function (media) {
				return media.category === "ads";
			});
		}
		else {
			filteredMedia = media;
		}

		let video = filteredMedia.map((object, i) => (
			<div key={i} className="videoImg">
				<div className="imgText">{object.name}</div>
				<img src={"https://img.youtube.com/vi/" + object.videoID + "/0.jpg"}
				     onClick={this.openModal.bind(this, object.videoID)} alt={object.name}/>
			</div>
		));

		return (
			<div className="portfolio">
				<ul>
					<li className={this.state.activeIndex === "film" ? "active" : null}
					    onClick={this.toggleClass.bind(this, "film")}>
						Films
					</li>
					<li className={this.state.activeIndex === "fight" ? "active" : null}
					    onClick={this.toggleClass.bind(this, "fight")}>
						Fight Scenes
					</li>
					<li className={this.state.activeIndex === "previsual" ? "active" : null}
					    onClick={this.toggleClass.bind(this, "previsual")}>
						Previsuals
					</li>
					<li className={this.state.activeIndex === "vlog" ? "active" : null}
					    onClick={this.toggleClass.bind(this, "vlog")}>
						Vlogs
					</li>
					<li className={this.state.activeIndex === "bts" ? "active" : null}
					    onClick={this.toggleClass.bind(this, "bts")}>
						BTS
					</li>
					<li className={this.state.activeIndex === "misc" ? "active" : null}
					    onClick={this.toggleClass.bind(this, "misc")}>
						Misc
					</li>
					<li className={this.state.activeIndex === "ads" ? "active" : null}
					    onClick={this.toggleClass.bind(this, "ads")}>
						Ads
					</li>
					<li className={this.state.activeIndex === "all" ? "active" : null}
					    onClick={this.toggleClass.bind(this, "all")} data-filter="*">
						All
					</li>
				</ul>
				<div className="masonryContainer">
					<Masonry className="masonry" options={masonryOptions}>
						{video}
					</Masonry>
				</div>
				<ModalVideo channel="youtube" isOpen={this.state.isOpen} videoId={this.state.videoID}
				            onClose={() => this.setState({isOpen: false})}/>
			</div>
		);
	}
}

export default Portfolio;

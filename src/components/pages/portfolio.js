import React, { Component } from "react";
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
      activeIndex: "all",
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

    if (index != null) {
      this.setState({ activeIndex: index });
    }
  }

  updateUrl = index => {
    this.props.history.push({
      search: "?index=" + index
    });
  };

  toggleClass(index) {
    this.setState({ activeIndex: index });
    this.updateUrl(index);
  }
  openModal(videoID) {
    this.setState({ isOpen: true, videoID: videoID });
  }

  render() {
    let media = [
      //music
      { name: "So Alive", category: "music", videoID: "Bu9gl10AkzQ" },
      { name: "See You", category: "music", videoID: "WrTdEeSEK2c" },
      {
        name: "Best I'll Never Have",
        category: "music",
        videoID: "_VRsdKhnLbY"
      },
      { name: "Strangers", category: "music", videoID: "kQqClLNm2iY" },
      //commercial
      {
        name: "Guru Lite Launch",
        category: "commercial",
        videoID: "Z-TMSzIPWJg"
      },
      {
        name: "Guru Summer Medley",
        category: "commercial",
        videoID: "NXGVNPOBkRU"
      },
      {
        name: "Combat D'archers Laval",
        category: "commercial",
        videoID: "-Azkckxeb_g"
      },
      {
        name: "Combat Nerf Montreal",
        category: "commercial",
        videoID: "5eJ_Bph06L4"
      },
      //corporate
      { name: "BDP Gala", category: "corporate", videoID: "buBhwuaQ_4A" },
      {
        name: "Combat D'archers Outdoor",
        category: "corporate",
        videoID: "AqSQg4WcvFQ"
      },
      { name: "Aki Pro", category: "corporate", videoID: "A0m6EfIpBJ0" },
      {
        name: "Ambition Boxing Gala",
        category: "corporate",
        videoID: "quI6cYQHPDM"
      },
      { name: "One Jamat", category: "corporate", videoID: "lkdzdMx0jbk" },
      //creative
      {
        name: "G1nman Kill (Previsual)",
        category: "creative",
        videoID: "bCUn8C_Hqwo"
      },
      { name: "Anticipation", category: "creative", videoID: "-PKksZtYXGA" },
      { name: "Fireworks", category: "creative", videoID: "oWzIUU-ystE" },
      { name: "New Years", category: "creative", videoID: "p2q536qJ898" }
    ];
    let filteredMedia;
    if (this.state.activeIndex === "music") {
      filteredMedia = media.filter(function(media) {
        return media.category === "music";
      });
    } else if (this.state.activeIndex === "commercial") {
      filteredMedia = media.filter(function(media) {
        return media.category === "commercial";
      });
    } else if (this.state.activeIndex === "corporate") {
      filteredMedia = media.filter(function(media) {
        return media.category === "corporate";
      });
    } else if (this.state.activeIndex === "creative") {
      filteredMedia = media.filter(function(media) {
        return media.category === "creative";
      });
    } else {
      filteredMedia = media;
    }

    let video = filteredMedia.map((object, i) => (
      <div key={i} className="videoImg">
        <div className="imgText">{object.name}</div>
        <img src={"https://img.youtube.com/vi/" + object.videoID + "/0.jpg"} onClick={this.openModal.bind(this, object.videoID)} alt={object.name} />
      </div>
    ));

    return (
      <div className="portfolio">
        <ul>
          <li className={this.state.activeIndex === "music" ? "active" : null} onClick={this.toggleClass.bind(this, "music")}>
            Music Videos
          </li>
          <li className={this.state.activeIndex === "commercial" ? "active" : null} onClick={this.toggleClass.bind(this, "commercial")}>
            Commercial
          </li>
          <li className={this.state.activeIndex === "corporate" ? "active" : null} onClick={this.toggleClass.bind(this, "corporate")}>
            Corporate
          </li>
          <li className={this.state.activeIndex === "creative" ? "active" : null} onClick={this.toggleClass.bind(this, "creative")}>
            Creative
          </li>
          <li className={this.state.activeIndex === "all" ? "active" : null} onClick={this.toggleClass.bind(this, "all")} data-filter="*">
            All
          </li>
        </ul>
        <div className="masonryContainer">
          <Masonry className="masonry" options={masonryOptions}>
            {video}
          </Masonry>
        </div>
        <ModalVideo channel="youtube" isOpen={this.state.isOpen} videoId={this.state.videoID} onClose={() => this.setState({ isOpen: false })} />
      </div>
    );
  }
}

export default Portfolio;

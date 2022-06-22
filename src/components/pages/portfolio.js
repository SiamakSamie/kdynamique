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
    const videoId = params.get("video");


    if (index != null) {
      this.setState({ activeIndex: index });
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
      search: "?index="+ this.state.activeIndex +"&video=" + videoID
    });
  };

  toggleClass(index) {
    this.setState({ activeIndex: index });
    this.updateUrl(index);
  }

  openModal(videoID) {
    this.updateUrlWithVideo(videoID);
    this.setState({ isOpen: true, videoID: videoID });
  }

  render() {
    let media = [
      //previsuals
      { name: "So Alive", category: "music", videoID: "Bu9gl10AkzQ" },
      { name: "See You", category: "music", videoID: "WrTdEeSEK2c" },
      { name: "Strangers", category: "music", videoID: "kQqClLNm2iY" },
      //fight
      {name: "Guru Lite Launch", category: "commercial", videoID: "Z-TMSzIPWJg"},

      //film
      //bts

    ];
    let filteredMedia;
    if (this.state.activeIndex === "previsual") {
      filteredMedia = media.filter(function(media) {
        return media.category === "previsual";
      });
    } else if (this.state.activeIndex === "fight") {
      filteredMedia = media.filter(function(media) {
        return media.category === "fight";
      });
    } else if (this.state.activeIndex === "film") {
      filteredMedia = media.filter(function(media) {
        return media.category === "film";
      });
    } else if (this.state.activeIndex === "bts") {
      filteredMedia = media.filter(function(media) {
        return media.category === "bts";
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
          <li className={this.state.activeIndex === "previsual" ? "active" : null} onClick={this.toggleClass.bind(this, "music")}>
            Music Videos
          </li>
          <li className={this.state.activeIndex === "fight" ? "active" : null} onClick={this.toggleClass.bind(this, "commercial")}>
            Commercial
          </li>
          <li className={this.state.activeIndex === "film" ? "active" : null} onClick={this.toggleClass.bind(this, "corporate")}>
            Corporate
          </li>
          <li className={this.state.activeIndex === "bts" ? "active" : null} onClick={this.toggleClass.bind(this, "creative")}>
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

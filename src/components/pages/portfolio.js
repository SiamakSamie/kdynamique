import React, { Component } from "react";
import Masonry from "react-masonry-component";
import ModalVideo from "react-modal-video";

const masonryOptions = {
  fitWidth: true
};

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 1,
      isOpen: false,
      videoID: "SZq4HRF1ErE"
    };

    this.toggleClass = this.toggleClass.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  toggleClass(index, e) {
    this.setState({ activeIndex: index });
  }
  openModal(videoID, e) {
    this.setState({ isOpen: true, videoID: videoID });
  }
  render() {
    let videos = [
      { name: "Siamak Demo Reel", category: "music", videoID: "6WYJMBE-Rr0" },
      { name: "anticipation", category: "commercial", videoID: "-PKksZtYXGA" },
      { name: "this is a really long title", category: "corporate", videoID: "SZq4HRF1ErE" },
      { name: "The horror experience", category: "corporate", videoID: "6WYJMBE-Rr0" },
      { name: "ShuttleControl", category: "corporate", videoID: "6WYJMBE-Rr0" },
      { name: "This is an insanely long title.", category: "fiction", videoID: "6WYJMBE-Rr0" },
      { name: "This is an insanely long title.", category: "fiction", videoID: "6WYJMBE-Rr0" }
    ];
    let filteredVideos;
    if (this.state.activeIndex === 1) {
      filteredVideos = videos.filter(function(videos) {
        return videos.category === "music";
      });
    } else if (this.state.activeIndex === 2) {
      filteredVideos = videos.filter(function(videos) {
        return videos.category === "commercial";
      });
    } else if (this.state.activeIndex === 3) {
      filteredVideos = videos.filter(function(videos) {
        return videos.category === "corporate";
      });
    } else if (this.state.activeIndex === 4) {
      filteredVideos = videos.filter(function(videos) {
        return videos.category === "fiction";
      });
    } else {
      filteredVideos = videos;
    }
    let video = filteredVideos.map((object, i) => (
      <div key={i} className="videoImg">
        <div className="imgText">{object.name}</div>
        <img src={"https://img.youtube.com/vi/" + object.videoID + "/0.jpg"} onClick={this.openModal.bind(this, object.videoID)} alt={object.name} />
      </div>
    ));

    return (
      <div className="portfolio">
        <ul>
          <li className={this.state.activeIndex === 1 ? "active" : null} onClick={this.toggleClass.bind(this, 1)}>
            Music Videos
          </li>
          <li className={this.state.activeIndex === 2 ? "active" : null} onClick={this.toggleClass.bind(this, 2)}>
            Commercial
          </li>
          <li className={this.state.activeIndex === 3 ? "active" : null} onClick={this.toggleClass.bind(this, 3)}>
            Corporate
          </li>
          <li className={this.state.activeIndex === 4 ? "active" : null} onClick={this.toggleClass.bind(this, 4)}>
            Fiction
          </li>
          <li className={this.state.activeIndex === 0 ? "active" : null} onClick={this.toggleClass.bind(this, 0)} data-filter="*">
            All
          </li>
        </ul>
        <Masonry className="masonry" options={masonryOptions}>
          {video}
        </Masonry>
        <ModalVideo channel="youtube" isOpen={this.state.isOpen} videoId={this.state.videoID} onClose={() => this.setState({ isOpen: false })} />
      </div>
    );
  }
}

export default Portfolio;

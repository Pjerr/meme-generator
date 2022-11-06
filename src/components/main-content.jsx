import React from "react";
import memesData from "../memesData";
export class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMeme: null,
    };
    this.getMemeImage = this.getMemeImage.bind(this);
  }

  getMemeImage() {
    const memesArrray = memesData.data.memes;
    const i = Math.floor(Math.random() * memesArrray.length);
    const meme = memesArrray[i];
    this.setState({ currentMeme: meme }, () => {
      console.log(this.state.currentMeme);
    });
  }

  render() {
    return (
      <div className="main-form">
        <div className="user-input-container">
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
        </div>
        <button
          type="button"
          className="form-button"
          onClick={this.getMemeImage}
        >
          Generate meme image
        </button>
        {this.state.currentMeme !== null && (
          <img
            src={this.state.currentMeme.url}
            alt="slika"
            className="meme-image"
          ></img>
        )}
      </div>
    );
  }
}

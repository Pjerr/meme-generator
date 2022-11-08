import React from "react";
import { getAllMemes } from "../services/api";
export class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMeme: null,
      topText: "",
      bottomText: "",
      allMemeImages: [],
    };

    getAllMemes().then((data) => {
      this.state.allMemeImages = data;
    });

    this.getMemeImage = this.getMemeImage.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getMemeImage() {
    const i = Math.floor(Math.random() * this.state.allMemeImages.length);
    const meme = this.state.allMemeImages[i];
    this.setState({ currentMeme: meme });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="main-wrapper">
        <form onSubmit={this.handleSubmit} className="main-form">
          <div className="user-input-container">
            <input
              type="text"
              placeholder="Top text"
              name="topText"
              onChange={this.handleInputChange}
              value={this.state.topText}
            />
            <input
              type="text"
              placeholder="Bottom text"
              name="bottomText"
              onChange={this.handleInputChange}
              value={this.state.bottomText}
            />
          </div>
          <button className="form-button" onClick={this.getMemeImage}>
            Generate meme image
          </button>
        </form>
        <div className="meme">
          {this.state.currentMeme !== null && (
            <img
              src={this.state.currentMeme.url}
              alt="slika"
              className="meme-image"
            ></img>
          )}
          {this.state.topText && (
            <h2 className="top-text meme-text">{this.state.topText}</h2>
          )}
          {this.state.bottomText && (
            <h2 className="bottom-text meme-text">{this.state.bottomText}</h2>
          )}
        </div>
      </div>
    );
  }
}

import React from "react";

export class MainContent extends React.Component {
  render() {
    return (
      <div className="main-form">
        <div className="user-input-container">
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
        </div>
        <button type="button" className="form-button">
          Generate meme image
        </button>
        <img src="" alt="slika" className="meme-image"></img>
      </div>
    );
  }
}

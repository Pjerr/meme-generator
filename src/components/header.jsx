import React from "react";
import memeFace from "../assets/images/meme-face.png";

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={memeFace} alt="logo" className="logo"></img>
        <p className="title">Meme generator</p>
      </header>
    );
  }
}

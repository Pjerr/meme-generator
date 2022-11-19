import React from "react";
import { Link } from "react-router-dom";
import memeFace from "../assets/images/meme-face.png";

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={memeFace} alt="logo" className="logo"></img>
        <Link className="title" to="/">
          Meme generator
        </Link>
        <Link className="title" to="/about">
          About
        </Link>
      </header>
    );
  }
}

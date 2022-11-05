import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { MainContent } from "./components/main-content";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <MainContent />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

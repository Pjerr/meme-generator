import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { About } from "./components/about";
import { MainContent } from "./components/main-content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </>
);

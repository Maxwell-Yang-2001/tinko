import { Component } from "react";
import "./HomeScreen.scss";
import bell from "./../assets/bell.png";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="homescreen-background" className="centered-content">
        <div id="homescreen-container">
          <div id="homescreen-container-left" className="image-container-centered-content">
            <img id="homescreen-logo" src={bell} alt="Tinko" />
            <div></div>
          </div>
          <div id="homescreen-container-right">
            <div id="homescreen-title">TINKO</div>
            <div id="homescreen-subtitle">
              An effective tool for team communicaton.
            </div>
            <div id="homescreen-container-buttons-container">
              <button id="homescreen-button1" className="homescreen-button">
                <span className="white-font font-bold-weight">Get started</span>
              </button>
              <button id="homescreen-button2" className="homescreen-button">
                <span>Have an account? </span>
                <span className="orange-font font-bold-weight">Sign in</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;

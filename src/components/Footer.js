import React, { Component } from "react";
import "../assets/css/Footer.css";
import "../assets/css/Default.css";
import face from "../assets/img/facebook-logo.png";
import twitter from "../assets/img/twitter-logo-button.png";
import insta from "../assets/img/instagram-logo.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h2>Fale conosco:</h2>
        <img src={face} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
        <img src={insta} alt="Instagram" />
        <div className="number">
          <span>
            (11) 2313-5549
            <br />
            (11) 2554-9781
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;

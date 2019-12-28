import React, { Component } from "react"
import PropTypes from "prop-types"
import { FaTwitter, FaInstagram, FaLinkedinIn, FaDiscord } from "react-icons/fa"
import logo from "../img/logopng.png"
export class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5">
                <img src={logo} alt="" style={{ maxWidth: "150px" }} />
                <p>
                  {this.props.copyrightText} {new Date().getFullYear()}.
                </p>
                {/* <span>
                  Built by{" "}
                  <a href="https://pcollins.tech" target="__blank">
                    Phil
                  </a>
                </span> */}
              </div>
              <div className="col-sm-2">
                <h5>Site Map</h5>
                <ul>
                  <li>About</li>
                  <li>Optimal</li>
                  <li>Contact</li>
                  <li></li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h5>Legal</h5>
                <ul>
                  <li>Ts & Cs</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h5>Let's Connect</h5>
                <ul>
                  <li>
                    <a href={this.props.twitterlink} target="__blank">
                      <FaTwitter /> - Facebook
                    </a>
                  </li>
                  <li>
                    <a href={this.props.instagramlink} target="__blank">
                      <FaInstagram /> - Instagram
                    </a>
                  </li>
                  <li>
                    <a href={this.props.linkedinlink} target="__blank">
                      <FaLinkedinIn /> - Linked In
                    </a>
                  </li>
                  <li>
                    <a href={this.props.discordlink} target="__blank">
                      <FaDiscord /> - Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}
Footer.PropsTypes = {
  copyrightText: PropTypes.string,
  footercopyrightLink1: PropTypes.string,
  footercopyrightText1: PropTypes.string,
  footercopyrightLink2: PropTypes.string,
  footercopyrightText2: PropTypes.string,
}
Footer.defaultProps = {
  copyrightText: "Copyright @ G-Science. All rights reserved",
  footercopyrightLink1: "#",
  footercopyrightText1: "Terms & Conditions ",
  footercopyrightLink2: "#",
  footercopyrightText2: "Privacy Policy",
  twitterlink: "https://twitter.com/gscienceio",
  instagramlink: "https://www.instagram.com/gscience.io/",
  linkedinlink: "https://www.linkedin.com/company/gscience/",
  discordlink: "https://www.linkedin.com/company/gscience/",
}
export default Footer

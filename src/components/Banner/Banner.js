import React, { Component } from "react"
import PropTypes from "prop-types"
import Particles from "react-particles-js"

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    const {
      title,
      subtitle,
      buttonTitle,
      href,
      animationImg1,
      animationImg2,
      animationImg3,
      animationImg4,
      animationImg5,
      animationImg6,
    } = this.props
    return (
      <React.Fragment>
        <div id="home">
          <div className="main-banner bg-image-hero overlay-hero">
            <div className="d-table">
              <div className="d-table-cell particles-container mobile">
                <Particles
                  params={{
                    particles: {
                      number: {
                        value: 80,
                      },
                      size: {
                        value: 3,
                      },
                    },
                    interactivity: {
                      events: {
                        onhover: {
                          enable: true,
                          mode: "repulse",
                        },
                      },
                    },
                  }}
                />
              </div>
              <div className="hero-title">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <button className="btn btn-primary">
                  <a href={href}>{buttonTitle}</a>
                </button>
              </div>
            </div>
            <div className="animation-box1">
              <img src={animationImg1} alt="sliderimage" />
            </div>
            <div className="animation-box2">
              <img src={animationImg2} alt="sliderimage" />
            </div>
            {/* <div className="animation-box3">
              <img src={animationImg3} alt="sliderimage" />
            </div> */}
            <div className="animation-box4">
              <img src={animationImg4} alt="sliderimage" />
            </div>
            <div className="animation-box6">
              <img src={animationImg5} alt="sliderimage" />
            </div>
            <div className="animation-box7">
              <img src={animationImg6} className="rotateme" alt="sliderimage" />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Banner.propTypes = {
  animationImg1: PropTypes.string,
  animationImg2: PropTypes.string,
  animationImg3: PropTypes.string,
  animationImg4: PropTypes.string,
  animationImg5: PropTypes.string,
  animationImg6: PropTypes.string,
  BannerData: PropTypes.array,
}

Banner.defaultProps = {
  animationImg1: require("../../img/1.png"),
  animationImg2: require("../../img/2.png"),
  animationImg3: require("../../img/1.png"),
  animationImg4: require("../../img/5.png"),
  animationImg5: require("../../img/6.png"),
  animationImg6: require("../../img/7.png"),
}

export default Banner

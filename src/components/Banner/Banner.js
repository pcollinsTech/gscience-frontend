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
    const { title, subtitle, buttonTitle, href } = this.props
    console.log("THIS IS PROPS FOR BANNER", this.props)
    const button = buttonTitle ? (
      <button className="btn btn-primary">
        <a href={href}>{buttonTitle}</a>
      </button>
    ) : (
      ""
    )
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
                        value: 150,
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
                <h3 className="pb-4">{subtitle}</h3>
                {button}
              </div>
            </div>
            <div>How?</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Banner.propTypes = {
  BannerData: PropTypes.array,
}

export default Banner

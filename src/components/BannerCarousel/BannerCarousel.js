import React from "react"
import { Carousel } from "react-bootstrap"

const BannerCarousel = ({ data, buttonTitle, href }) => {
  const {
    titleOne,
    titleTwo,
    titleThree,
    titleFour,
    imgOne,
    imgTwo,
    imgThree,
    imgFour,
  } = data
  return (
    <Carousel interval="6000">
      <Carousel.Item className="banner_image">
        <img src={imgOne} alt="Banner" />
        <Carousel.Caption>
          <h2>{titleOne}</h2>
          <div className="hero-title_caroursel">
            <button className="btn btn-primary">
              <a href={href}>{buttonTitle}</a>
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner_image">
        <img src={imgTwo} alt="Banner" />
        <Carousel.Caption>
          <h2>{titleTwo}</h2>
          <div className="hero-title_caroursel">
            <button className="btn btn-primary">
              <a href={href}>{buttonTitle}</a>
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner_image">
        <img src={imgThree} alt="Banner" />
        <Carousel.Caption>
          <h2>{titleThree}</h2>
          <div className="hero-title_caroursel">
            <button className="btn btn-primary">
              <a href={href}>{buttonTitle}</a>
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner_image">
        <img src={imgFour} alt="Banner" />
        <Carousel.Caption>
          <h2>{titleFour}</h2>
          <div className="hero-title_caroursel">
            <button className="btn btn-primary">
              <a href={href}>{buttonTitle}</a>
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default BannerCarousel

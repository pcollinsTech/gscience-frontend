import React from "react"
import VisibilitySensor from "react-visibility-sensor"

import SEO from "../components/seo"
import WhatWeDo from "../components/WhatWeDo"
import Services from "../components/Services"
import Optimal from "../components/Optimal"
import WhatWeProvide from "../components/WhatWeProvide"
import ContactUs from "../components/ContactUs"
import Layout from "../layout/Layout"
import BannerCarousel from "../components/BannerCarousel"

import bannerImgOne from "../img/Banners/bannerImgeOne.png"
import bannerImgTwo from "../img/Banners/bannerImgeTwo.jpg"
import bannerImgThree from "../img/Banners/bannerImgeThree.jpg"
import bannerImgFour from "../img/Banners/bannerImgeFour.png"

const Index = props => {
  const section = {
    who: false,
    what: false,
    how: false,
  }
  const onChangeWho = isVisable => (section.who = isVisable)

  return (
    <Layout props={props} section={section}>
      <SEO title="G-Science" />
      <BannerCarousel
        path={props.path}
        title="G-Science"
        subtitle="Empowering Esports Performance through Sport Science &amp; Data Analytics"
        href="#contact"
        buttonTitle="Contact Us"
        data={{
          titleOne:
            "Combining Data Science and Sports Science to generate personalised indicators of player readiness, injury risk and burnout.",
          titleTwo: "Unlock the power in your data.",
          titleThree:
            "Actionable analytics for optimising esports performance.",
          titleFour: "Prepare your team to perform at their best.",
          imgOne: bannerImgOne,
          imgTwo: bannerImgTwo,
          imgThree: bannerImgThree,
          imgFour: bannerImgFour,
        }}
      />
      <VisibilitySensor onChange={onChangeWho}>
        <div className="sensor" />
      </VisibilitySensor>
      <div id="Optimal">
        <Optimal />
      </div>
      <div id="WhatWeDo">
        <WhatWeDo />
      </div>
      <div id="WhatWeProvide">
        <WhatWeProvide />
      </div>

      <div id="Services">
        <Services />
      </div>
      <ContactUs />
    </Layout>
  )
}

export default Index

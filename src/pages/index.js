import React from "react"
import VisibilitySensor from "react-visibility-sensor"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import WorkWith from "../components/WorkWith"
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
import OnTheBlog from "../components/OnTheBlog/OnTheBlog"
import SignUp from "../components/SignUp/SignUp"

const Index = props => {
  const section = {
    who: false,
    what: false,
    how: false,
  }
  const onChangeWho = isVisable => (section.who = isVisable)
  console.log("props", props)
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
      <div id="Blog">
        <OnTheBlog posts={props.data.allWordpressPost.edges} />
      </div>
      <div id="WhatWeDo">
        <WorkWith />
      </div>
      <ContactUs />
      <SignUp />
    </Layout>
  )
}

export default Index

export const indexPage = graphql`
  query {
    allWordpressPost(limit: 3) {
      edges {
        node {
          date(formatString: "DD / MMMM / YYYY")
          slug
          title
          wordpress_id
          excerpt
          featured_media {
            source_url
          }
        }
      }
    }
  }
`

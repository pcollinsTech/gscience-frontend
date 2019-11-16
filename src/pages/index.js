import React from "react"
import VisibilitySensor from "react-visibility-sensor"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Banner from "../components/Banner"
import WhatWeDo from "../components/WhatWeDo"
import Services from "../components/Services"
import WorkWith from "../components/WorkWith"
import OnTheBlog from "../components/OnTheBlog"
import Optimal from "../components/Optimal"
import WhatWeProvide from "../components/WhatWeProvide"
import ContactUs from "../components/ContactUs"
import Layout from "../layout/Layout"

const Index = props => {
  const section = {
    who: false,
    what: false,
    how: false,
  }
  const onChangeWho = isVisable => (section.who = isVisable)
  const onChangeWhat = isVisable => (section.what = isVisable)
  const onChangeHow = isVisable => (section.how = isVisable)

  return (
    <Layout props={props} section={section}>
      <SEO title="G-Science" />
      <Banner
        path={props.path}
        title="G-Science"
        subtitle="Empowering Esports Performance through Sport Science &amp; Data Analytics"
        href="#contact"
        buttonTitle="Contact Us"
      />
      <VisibilitySensor onChange={onChangeWho}>
        <div className="sensor" />
      </VisibilitySensor>
      <div id="WhatWeDo">
        <WhatWeDo />
      </div>
      {/* <div id="WhatWeProvide">
        <WhatWeProvide />
      </div>

      <div id="Services">
        <Services />
      </div>
      <VisibilitySensor onChange={onChangeWhat}>
        <div className="sensor" />
      </VisibilitySensor>

      <VisibilitySensor onChange={onChangeHow}>
        <div className="sensor" />
      </VisibilitySensor>
*/}
      <div id="Optimal">
        <Optimal />
      </div>
      {/*
      <h1></h1>
      <OnTheBlog posts={props.data.allWordpressPost.edges} /> */}
      <ContactUs />
      {/* <div id="WorkWith">
        <WorkWith />
      </div> */}
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
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

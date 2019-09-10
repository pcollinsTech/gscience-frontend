import SEO from "../components/seo"
import React from "react"
import Banner from "../components/Banner"
import OurStory from "../components/OurStory"
import WhatWeProvide from "../components/WhatWeProvide"
import ContactUs from "../components/ContactUs"
import Layout from "../layout/Layout"

const Index = props => {
  return (
    <Layout props={props}>
      <SEO title="Home" />

      <Banner />
      <div id="OurStory">
        <OurStory />
      </div>
      <div id="WhatWeProvide">
        <WhatWeProvide />
      </div>
      <ContactUs />
    </Layout>
  )
}

export default Index

import SEO from "../components/seo"
import React from "react"
import Banner from "../components/Banner"
import OurStory from "../components/OurStory"
import HowWeDoIt from "../components/HowWeDoIt"
import MeetTheTeam from "../components/MeetTheTeam"
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
      <div id="HowWeDoIt">
        <HowWeDoIt />
      </div>
      <div id="MeetTheTeam">
        <MeetTheTeam />
      </div>
      <ContactUs />
    </Layout>
  )
}

export default Index

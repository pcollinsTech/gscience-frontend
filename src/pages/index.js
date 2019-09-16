import SEO from "../components/seo"
import React from "react"
import Banner from "../components/Banner"
import OurStory from "../components/OurStory"
import HowWeDoIt from "../components/HowWeDoIt"
import WorkWith from "../components/WorkWith"
import MeetTheTeam from "../components/MeetTheTeam"
import Optimal from "../components/Optimal"
import WhatWeProvide from "../components/WhatWeProvide"
import ContactUs from "../components/ContactUs"
import Layout from "../layout/Layout"

const Index = props => {
  return (
    <Layout props={props}>
      <SEO title="G-Science" />

      <Banner
        title="G-Science"
        subtitle="Taking your performance to the next level."
        href="#OurStory"
        buttonTitle="Read Our Story"
      />
      <div id="OurStory">
        <OurStory />
      </div>
      <div id="HowWeDoIt">
        <HowWeDoIt />
      </div>
      <div id="WhatWeProvide">
        <WhatWeProvide />
      </div>
      <div id="Optimal">
        <Optimal />
      </div>

      <div id="MeetTheTeam">
        <MeetTheTeam />
      </div>
      <div id="WorkWith">
        <WorkWith />
      </div>
      <ContactUs />
    </Layout>
  )
}

export default Index

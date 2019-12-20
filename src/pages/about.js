import SEO from "../components/seo"
import React from "react"
import Banner from "../components/Banner"
import OurStory from "../components/OurStory"
import Services from "../components/Services"
import WorkWith from "../components/WorkWith"
import MeetTheTeam from "../components/MeetTheTeam"
import Optimal from "../components/Optimal"
import WhatWeProvide from "../components/WhatWeProvide"
import ContactUs from "../components/ContactUs"
import SignUp from "../components/SignUp"
import Layout from "../layout/Layout"

const Index = props => {
  console.log(props)
  return (
    <Layout props={props}>
      <SEO title="G-Science" />

      <Banner
        path={props.path}
        title="The team behind your team"
        subtitle="Through combining the knowledge of Sports Scientists and Gaming Experts, we’ve covered all angles of your performance."
        href="#OurStory"
        buttonTitle="Read Our Story"
      />
      <div id="OurStory">
        <OurStory />
      </div>
      <div id="MeetTheTeam" className="bg-dark">
        <MeetTheTeam />
      </div>

      <ContactUs />
      <SignUp />
    </Layout>
  )
}

export default Index

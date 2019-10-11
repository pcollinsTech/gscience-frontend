import React from "react"
import VisibilitySensor from "react-visibility-sensor"
import SEO from "../components/seo"
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
  const section = {
    who: false,
    what: false,
    how: false,
  }
  const onChangeWho = isVisable => (section.who = isVisable)
  const onChangeWhat = isVisable => (section.what = isVisable)
  const onChangeHow = isVisable => (section.how = isVisable)

  console.log("HELLO Page", section)
  return (
    <Layout props={props} section={section}>
      <SEO title="G-Science" />

      <Banner
        path={props.path}
        title="G-Science"
        subtitle="Empowering Esports Performance through Sport Science &amp; Data Analytics"
        href="#OurStory"
        buttonTitle="How we do it"
      />
      <VisibilitySensor onChange={onChangeWho}>
        <div className="sensor" />
      </VisibilitySensor>
      <div id="OurStory">
        <OurStory />
      </div>
      <div id="HowWeDoIt">
        <HowWeDoIt />
      </div>
      <VisibilitySensor onChange={onChangeWhat}>
        <div className="sensor" />
      </VisibilitySensor>

      <VisibilitySensor onChange={onChangeHow}>
        <div className="sensor" />
      </VisibilitySensor>
      <div id="WhatWeProvide">
        <WhatWeProvide />
      </div>

      <div id="Optimal">
        <Optimal />
      </div>

      <div id="MeetTheTeam" className="bg-dark">
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

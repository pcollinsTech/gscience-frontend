import SEO from "../components/seo"
import React from "react"
import Banner from "../components/Banner"
import Optimal from "../components/Optimal"
import OptimalSignup from "../components/OptimalSignup"
import Layout from "../layout/Layout"

const Index = props => {
  return (
    <Layout props={props}>
      <SEO title="Optimal" />
      <Banner
        title="Optimal"
        subtitle="Take Your Gaming To The Next Level"
        href="#OurStory"
        buttonTitle="Read Our Story"
      />
      <div id="Optimal">
        <Optimal />
      </div>
      <section className="welcome-area ptb-100">
        <div className="container">
          <div className="section-title">
            <br />
            <p>
              Optimal is revolutionising the way in which gamers enhance their
              performance. Optimal is the first sport science application within
              esports to enable players and coaches to track and compare both
              physiological and psychological data alongside their in-game
              performance.
            </p>
            <br />
            <p>
              Seamless data capture and research driven sport science insights
              give you the ability to optimise performance, enhance recovery,
              reduce burnout and create happier, more successful esports
              athletes.
            </p>
            <p>
              Unlike other platforms which only provide k/d ratio, Optimal
              provides game specific performance metrics
            </p>
          </div>
        </div>
      </section>

      <OptimalSignup />
    </Layout>
  )
}

export default Index

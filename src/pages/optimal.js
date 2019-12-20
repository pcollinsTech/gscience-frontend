import SEO from "../components/seo"
import React from "react"
import Banner from "../components/Banner"
import Optimal from "../components/Optimal"
import OptimalSignup from "../components/OptimalSignup"
import Layout from "../layout/Layout"
import mobile from "../img/mobile.png"
import coach_dashboard from "../img/coach_dashboard.png"
import stats from "../img/stats.png"
import WhatWeDo from "../components/WhatWeDo/WhatWeDo"

const OptimalPage = props => {
  return (
    <Layout props={props}>
      <SEO title="Optimal" />
      <Banner
        path={props.path}
        title="Optimal"
        subtitle="Esports first athlete monitoring system"
        subsubtitle="Ignite your gaming potential. "
      />
      <div id="Optimal">
        <Optimal />
      </div>
      <section className="welcome-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={mobile} alt="mobile" />
              <h3 className="pt-3">
                Combination of athlete input and automated data capture
              </h3>
            </div>
            <div className="col-md-4 mt-5">
              <img src={coach_dashboard} alt="laptop" />
              <h3 className="pt-3">Real time injury and burnout alerts</h3>
            </div>
            <div className="col-md-4">
              <img src={stats} alt="desktop" />
              <h3 className="pt-3">
                Actionable insights to optimise performance
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div className="container text-center">
        <h3>Combining data science and sports science.</h3>
        <div className="row"></div>
      </div>
      <div className="container text-center">
        <h3>The Benefits of using Optimal</h3>
        <div className="row">
          <WhatWeDo />
        </div>
      </div>

      <OptimalSignup />
    </Layout>
  )
}

export default OptimalPage

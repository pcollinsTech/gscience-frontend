import React from "react"
import { Card, Accordion } from "react-bootstrap"
const WhatWeProvide = () => {
  const icon0 = "icofont-plus-circle"
  const icon1 = "icofont-plus-circle"
  const icon2 = "icofont-plus-circle"
  const icon3 = "icofont-plus-circle"
  const icon4 = "icofont-plus-circle"
  const icon5 = "icofont-plus-circle"
  const icon6 = "icofont-plus-circle"

  const accordianClick = e => {
    console.log("Clicked", e)
  }

  return (
    <React.Fragment>
      <div className="bg-dark py-5">
        <div className="what_we_provide">
          <div className="row">
            <h2>How We Do It</h2>
            <div className="col-sm-4">
              <h3>1-1 Coaching</h3>
              <p>
                Free 30 minute consultation followed by a tailored performance
                package.
              </p>
            </div>
            <div className="col-sm-4">
              <h3>Team Bootcamps</h3>
              <p>
                Empower your players with a 3-day intense bootcamp where our
                sport science experts will provide an in-depth understanding of
                how to take your team to the next level.
              </p>
            </div>
            <div className="col-sm-4">
              <h3>Competition Support</h3>
              <p>
                Full access to our multidisciplinary team throughout your
                competition journey as a team or an individual
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WhatWeProvide

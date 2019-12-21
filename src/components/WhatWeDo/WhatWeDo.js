import React from "react"
import { Container, Row } from "react-bootstrap"
import wwd1 from "../../img/optimise.png"
import wwd2 from "../../img/injuries.png"
import wwd3 from "../../img/recovery.png"
import wwd4 from "../../img/burnout.png"
import wwd5 from "../../img/careers.png"

const WhatWeDo = () => {
  return (
    <div className="py-5">
      <Container>
        <Row className="text-center ">
          <div className="col-xs-5ths wwd_item">
            <h5>Optimize Performance</h5>
            <div className="wwd_circle">
              <img src={wwd1} alt="" />
            </div>
          </div>
          <div className="col-xs-5ths wwd_item">
            <h5>
              Reduce
              <br /> Injuries
            </h5>
            <div className="wwd_circle">
              <img src={wwd2} alt="" />
            </div>
          </div>
          <div className="col-xs-5ths wwd_item">
            <h5>
              Faster
              <br /> Recovery
            </h5>
            <div className="wwd_circle">
              <img src={wwd3} alt="" />
            </div>
          </div>
          <div className="col-xs-5ths wwd_item">
            <h5>
              Eliminate
              <br /> Burnout
            </h5>
            <div className="wwd_circle">
              <img src={wwd4} alt="" />
            </div>
          </div>
          <div className="col-xs-5ths wwd_item">
            <h5>
              Prolong
              <br /> Careers
            </h5>
            <div className="wwd_circle">
              <img src={wwd5} alt="" />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default WhatWeDo

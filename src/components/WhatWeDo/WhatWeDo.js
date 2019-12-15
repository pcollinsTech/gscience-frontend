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
        <h2>What We Do</h2>
        <Row className="pt-4">
          <div className="col-md-4">
            <h3 className="green">
              Creating healthier, happier and more successful gamers.
            </h3>
            <p>
              We combine sports science, data analytics and cutting edge
              technology to provide personalised insights into optimal training
              load, readiness to perform and risk of injury
            </p>
          </div>
          <div className="col-md-4 wwd_stat">
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6">
                <h5>Average Gaming Career (Years)</h5>
              </div>
            </div>

            <div className="big_number green">
              3 <span>to</span> 4
            </div>
          </div>
          <div className="col-md-4 wwd_stat">
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6">
                <h5>Daily Gaming Time (Hours)</h5>
              </div>
            </div>
            <div className="big_number green">
              8 <span>to</span> 15
            </div>
          </div>
        </Row>
        <Row className="text-center pt-5">
          <div className="col-xs-5ths wwd_item">
            <h5>Optimize Performance</h5>
            <p>Insert Text Here</p>
            <div className="wwd_circle">
              <img src={wwd1} alt="" />
            </div>
          </div>
          <div className="col-xs-5ths wwd_item">
            <h5>
              Reduce
              <br /> Injuries
            </h5>
            <p>Insert Text Here</p>
            <div className="wwd_circle">
              <img src={wwd2} alt="" />
            </div>
          </div>
          <div className="col-xs-5ths wwd_item">
            <h5>
              Faster
              <br /> Recovery
            </h5>
            <p>Insert Text Here</p>
            <div className="wwd_circle">
              <img src={wwd3} alt="" />
            </div>
          </div>
          <div className="col-xs-5ths wwd_item">
            <h5>
              Eliminate
              <br /> Burnout
            </h5>
            <p>Insert Text Here</p>
            <div className="wwd_circle">
              <img src={wwd4} alt="" />
            </div>
          </div>
          <div className="col-xs-5ths wwd_item">
            <h5>
              Prolong
              <br /> Careers
            </h5>
            <p>Insert Text Here</p>
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

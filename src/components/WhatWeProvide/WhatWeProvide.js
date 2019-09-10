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
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Accordion defaultActiveKey="0">
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    onClick={accordianClick}
                  >
                    Recovery Methods{" "}
                    <span
                      className={icon0 + " icofont-2x accordian_icon"}
                    ></span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Tailored recovery plans are devised using research driven
                      protocols alongside the training and competition schedule
                      of players
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Performance Nutrition{" "}
                    <span
                      className={icon1 + " icofont-2x accordian_icon"}
                    ></span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      Nutrition solutions are personalised to maximise the
                      health and performance of individual. They are based upon
                      player workload, fatigue , illness, performance goals and
                      weekly schedule.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    Burnout Prevention{" "}
                    <span
                      className={icon2 + " icofont-2x accordian_icon"}
                    ></span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Burnout in esports has become a major issue. By collecting
                      longitudinal data from hundreds of players at all levels
                      we are able to act proactively and provide solutions for
                      those who may be at risk
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    Psychological Skills Training{" "}
                    <span
                      className={icon3 + " icofont-2x accordian_icon"}
                    ></span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      Our research driven PST strategies are grounded in years
                      of experience working with pro teams. They provide gamers
                      with the skills to cope with the pressure of the main
                      stage, how to deal with failure and many more.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    Sleep Analysis{" "}
                    <span
                      className={icon4 + " icofont-2x accordian_icon"}
                    ></span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      We provide personalised sleep strategies based around the
                      players schedule to ensure sleep quality and to maximise
                      recovery
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    Cognitive Load Monitoring{" "}
                    <span
                      className={icon5 + " icofont-2x accordian_icon"}
                    ></span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      Cognitive load is quantified using several validated
                      metrics to provide real-time feedback on player readiness
                      and risk of burnout.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    Tailored Esport Performance Metrics{" "}
                    <span
                      className={icon6 + " icofont-2x accordian_icon"}
                    ></span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      Tailored Esport Performance Metrics (Game dependent
                      performance metrics are provided to give a true
                      understanding of training and competition.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WhatWeProvide

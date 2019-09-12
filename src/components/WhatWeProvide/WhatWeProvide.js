import React from "react"
import { Card, Accordion } from "react-bootstrap"
import { FaPlusCircle } from "react-icons/fa"

const WhatWeProvide = () => {
  const accordianClick = e => {
    console.log("Clicked", e)
  }

  return (
    <React.Fragment>
      <div className="bg-dark py-5">
        <div className="container">
          <div className="what_we_provide">
            <div className="row">
              <div className="col-sm-5">
                <Accordion defaultActiveKey="0">
                  <Card style={{ backgroundColor: "transparent" }}>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      onClick={accordianClick}
                    >
                      Recovery Methods <FaPlusCircle />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Tailored recovery plans are devised using research
                        driven protocols alongside the training and competition
                        schedule of players
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ backgroundColor: "transparent" }}>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      Performance Nutrition <FaPlusCircle />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        Nutrition solutions are personalised to maximise the
                        health and performance of individual. They are based
                        upon player workload, fatigue , illness, performance
                        goals and weekly schedule.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ backgroundColor: "transparent" }}>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      Burnout Prevention <FaPlusCircle />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        Burnout in esports has become a major issue. By
                        collecting longitudinal data from hundreds of players at
                        all levels we are able to act proactively and provide
                        solutions for those who may be at risk
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ backgroundColor: "transparent" }}>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      Psychological Skills Training <FaPlusCircle />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        Our research driven PST strategies are grounded in years
                        of experience working with pro teams. They provide
                        gamers with the skills to cope with the pressure of the
                        main stage, how to deal with failure and many more.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ backgroundColor: "transparent" }}>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                      Sleep Analysis <FaPlusCircle />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        We provide personalised sleep strategies based around
                        the players schedule to ensure sleep quality and to
                        maximise recovery
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ backgroundColor: "transparent" }}>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                      Cognitive Load Monitoring <FaPlusCircle />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        Cognitive load is quantified using several validated
                        metrics to provide real-time feedback on player
                        readiness and risk of burnout.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ backgroundColor: "transparent" }}>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                      Tailored Esport Performance Metrics <FaPlusCircle />
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
              <div className="col-sm-2"></div>
              <div className="col-sm-5">
                <Accordion>
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      textAlign: "right",
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      onClick={accordianClick}
                    >
                      <FaPlusCircle />
                      Recovery Methods{" "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Tailored recovery plans are devised using research
                        driven protocols alongside the training and competition
                        schedule of players
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      textAlign: "right",
                    }}
                  >
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      <FaPlusCircle />
                      Performance Nutrition{" "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        Nutrition solutions are personalised to maximise the
                        health and performance of individual. They are based
                        upon player workload, fatigue , illness, performance
                        goals and weekly schedule.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      textAlign: "right",
                    }}
                  >
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      <FaPlusCircle />
                      Burnout Prevention{" "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        Burnout in esports has become a major issue. By
                        collecting longitudinal data from hundreds of players at
                        all levels we are able to act proactively and provide
                        solutions for those who may be at risk
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      textAlign: "right",
                    }}
                  >
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      <FaPlusCircle />
                      Psychological Skills Training{" "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        Our research driven PST strategies are grounded in years
                        of experience working with pro teams. They provide
                        gamers with the skills to cope with the pressure of the
                        main stage, how to deal with failure and many more.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      textAlign: "right",
                    }}
                  >
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                      <FaPlusCircle />
                      Sleep Analysis{" "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        We provide personalised sleep strategies based around
                        the players schedule to ensure sleep quality and to
                        maximise recovery
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      textAlign: "right",
                    }}
                  >
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                      <FaPlusCircle />
                      Cognitive Load Monitoring{" "}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        Cognitive load is quantified using several validated
                        metrics to provide real-time feedback on player
                        readiness and risk of burnout.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "transparent",
                      textAlign: "right",
                    }}
                  >
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                      <FaPlusCircle />
                      Tailored Esport Performance Metrics{" "}
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
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WhatWeProvide

import React from "react"
import { Card, Accordion } from "react-bootstrap"
import { FaPlusCircle } from "react-icons/fa"

const WhatWeProvide = () => {
  const accordianClick = e => {
    console.log("Clicked", e)
  }

  return (
    <React.Fragment>
      <div className=" py-5">
        <div className="what_we_provide">
          <div className="row">
            <div className="col-sm-5">
              <h4 className="pb-5 ">Sport Science</h4>
              <Accordion defaultActiveKey="0">
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    onClick={accordianClick}
                  >
                    Recovery Methods
                    <span className="accordian_icon_right">
                      <FaPlusCircle />
                    </span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p>
                        Tailored recovery plans are devised using research
                        driven protocols alongside the training and competition
                        schedule of players
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Performance Nutrition{" "}
                    <span className="accordian_icon_right">
                      <FaPlusCircle />
                    </span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <p>
                        Nutrition solutions are personalised to maximise the
                        health and performance of individual. They are based
                        upon player workload, fatigue , illness, performance
                        goals and weekly schedule.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    Burnout Prevention
                    <span className="accordian_icon_right">
                      <FaPlusCircle />
                    </span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <p>
                        Burnout in esports has become a major issue. By
                        collecting longitudinal data from hundreds of players at
                        all levels we are able to act proactively and provide
                        solutions for those who may be at risk
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    Psychological Skills Training{" "}
                    <span className="accordian_icon_right">
                      <FaPlusCircle />
                    </span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <p>
                        Our research driven PST strategies are grounded in years
                        of experience working with pro teams. They provide
                        gamers with the skills to cope with the pressure of the
                        main stage, how to deal with failure and many more.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    Sleep Analysis
                    <span className="accordian_icon_right">
                      <FaPlusCircle />
                    </span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <p>
                        We provide personalised sleep strategies based around
                        the players schedule to ensure sleep quality and to
                        maximise recovery
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    Cognitive Load Monitoring{" "}
                    <span className="accordian_icon_right">
                      <FaPlusCircle />
                    </span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <p>
                        Cognitive load is quantified using several validated
                        metrics to provide real-time feedback on player
                        readiness and risk of burnout.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "transparent" }}>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    Tailored Esport Performance Metrics{" "}
                    <span className="accordian_icon_right">
                      <FaPlusCircle />
                    </span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      <p>
                        Tailored Esport Performance Metrics (Game dependent
                        performance metrics are provided to give a true
                        understanding of training and competition.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-5">
              <h4 className="pb-5 text-right">Data Science</h4>

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
                    <span className="accordian_icon_left">
                      <FaPlusCircle />
                    </span>
                    Deep Learning
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Consequatur tempora eos ducimus labore sed
                        aspernatur quos. Natus eos ut qui voluptate ipsa libero
                        quisquam deserunt fuga, optio molestias sapiente
                        ducimus!
                      </p>
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
                    <span className="accordian_icon_left">
                      <FaPlusCircle />
                    </span>
                    Predictive Analytics
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure, debitis magnam. Velit nemo harum architecto maxime
                        fuga repellat, neque beatae sint ab recusandae molestiae
                        obcaecati aperiam, eum nisi itaque vero.
                      </p>
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
                    <span className="accordian_icon_left">
                      <FaPlusCircle />
                    </span>
                    Game Theory
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure, debitis magnam. Velit nemo harum architecto maxime
                        fuga repellat, neque beatae sint ab recusandae molestiae
                        obcaecati aperiam, eum nisi itaque vero.
                      </p>
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
                    <span className="accordian_icon_left">
                      <FaPlusCircle />
                    </span>
                    One more??
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure, debitis magnam. Velit nemo harum architecto maxime
                        fuga repellat, neque beatae sint ab recusandae molestiae
                        obcaecati aperiam, eum nisi itaque vero.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WhatWeProvide

import React from "react"
const OurStory = () => {
  return (
    <React.Fragment>
      <section className="welcome-area pt-5">
        <div className="container">
          <div className="section-title">
            <h2 className="green">
              <b>“Building the next generation of esports athletes”</b>
            </h2>
            <br />
            <p>
              We take a holistic approach to performance optmisation by
              combining sports science and data science to create lifelong games
              who are not only healthier both physically and mentally, but also
              happier outside of their gaming career.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="green">
                “Our philosophy is simple, we build the best version of you”
              </h3>
              <br />
              <p>
                We focus on providing a service that is both athlete-centred and
                holistic in nature. In doing we understand the player as both a
                gamer and an individual
              </p>
              <p>
                We believe that in order to achieve optimal esports performance,
                we must first understand the unique demands being placed on
                esports athletes. We utilise our sports science expertise to
                build performance programs tailored to esports athletes. Using
                the marginal gains philosophy, we identify areas for improvement
                across all components that influence gaming performance. Leading
                to healthier and more successful esports athletes.
              </p>
            </div>
            <div className="col-sm-6 video-container">
              <br />
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/qM5s7wtHVbE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="G-Science"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default OurStory

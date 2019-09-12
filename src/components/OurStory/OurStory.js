import React from "react"
const OurStory = () => {
  return (
    <React.Fragment>
      <section className="welcome-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>
              <b>Our story</b>
            </h2>
            <br />
            <h3 className="green">
              “Our mission at G-Science is to build the next generation of
              esports athletes”
            </h3>
            <br />
            <p>
              We take a holistic approach to performance optmisation by
              combining sports science and data science to create lifelong games
              who are not only healthier both physically and mentally, but also
              happier outside of their gaming career.
            </p>
          </div>

          {/* <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-box">
                <img src={bitcoin} alt="" />
                <h3>Bitcoin</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptatem placeat veritatis, reprehenderit dolorem
                  accusantium ea distinctio, eius quibusdam consequuntur omnis
                  velit impedit nobis voluptas cum architecto maxime aliquid
                  facilis.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-box">
                <img src={ethereum} alt="" />
                <h3>Ethereum</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptatem placeat veritatis, reprehenderit dolorem
                  accusantium ea distinctio, eius quibusdam consequuntur omnis
                  velit impedit nobis voluptas cum architecto maxime aliquid
                  facilis.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-box">
                <img src={litecoin} alt="" />
                <h3>Litecoin</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor voluptatem placeat veritatis, reprehenderit dolorem
                  accusantium ea distinctio, eius quibusdam consequuntur omnis
                  velit impedit nobis voluptas cum architecto maxime aliquid
                  facilis.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <div className="bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2>
                <b>Our Philosophy</b>
              </h2>
              <br />
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
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default OurStory

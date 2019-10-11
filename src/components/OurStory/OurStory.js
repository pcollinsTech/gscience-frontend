import React from "react"

const OurStory = () => {
  return (
    <React.Fragment>
      <section className="welcome-area py-5">
        <div className="container text-center">
          <h3 className="pb-5">What We Do</h3>
          {/* <div className="row section-title">
            <p>
              "There's a darker side to esports, the average player's career is
              2-3years. They're burnging out and due to a lack of education
              atheletes are being pushed harder and harder to the"
            </p>
          </div> */}
        </div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-sm-7 pr-5 section-title ">
              <h2 className="green">
                <b>“Building the next generation of esports athletes”</b>
              </h2>
              <br />
              <p>
                This is how we do it...... Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Rerum maiores, corrupti, nobis ea
                voluptate animi modi eos sint illo possimus sequi magnam est
                saepe similique at, voluptas quasi exercitationem accusamus!
              </p>
            </div>
            <div className="col-sm-5 pl-5">
              <div className="d-flex justify-content-between py-2">
                <h4>Optimise Performance</h4>
                <img
                  src="https://nourishcare.co.uk/wp-content/themes/nourish-website-theme/images/green_tick.svg"
                  className="check-icon"
                />
              </div>
              <div className="d-flex justify-content-between py-2">
                <h4>Reduce Injuries</h4>
                <img
                  src="https://nourishcare.co.uk/wp-content/themes/nourish-website-theme/images/green_tick.svg"
                  className="check-icon"
                />
              </div>
              <div className="d-flex justify-content-between py-2">
                <h4>Faster Recovery</h4>
                <img
                  src="https://nourishcare.co.uk/wp-content/themes/nourish-website-theme/images/green_tick.svg"
                  className="check-icon"
                />
              </div>
              <div className="d-flex justify-content-between py-2">
                <h4>Eliminate Burnout</h4>
                <img
                  src="https://nourishcare.co.uk/wp-content/themes/nourish-website-theme/images/green_tick.svg"
                  className="check-icon"
                />
              </div>
              <div className="d-flex justify-content-between py-2">
                <h4>Prolong Careers</h4>
                <img
                  src="https://nourishcare.co.uk/wp-content/themes/nourish-website-theme/images/green_tick.svg"
                  className="check-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr style={{ width: "40%" }} />

      {/* <div className="bg-dark  py-5">
        <div className="container text-center">
          <br />
          <iframe
            width="1100"
            height="600"
            src="https://www.youtube.com/embed/qM5s7wtHVbE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="G-Science"
          ></iframe>
        </div>
      </div> */}
    </React.Fragment>
  )
}

export default OurStory

import React from "react"
import tuition from "../../img/1on1.png"
import bootcamp from "../../img/bootcamp.png"
import competition from "../../img/competition-support.png"
const HowWeDoIt = () => {
  return (
    <React.Fragment>
      <div className=" py-5">
        <div className="container text-center">
          {/* <h2 className="mb-5">How We Do It</h2> */}
          <div className="row pb-5">
            <div className="col-sm-4 ">
              <img src={tuition} alt="" />
              <h3>1-1 Coaching</h3>
              <p>
                Free 30 minute consultation followed by a tailored performance
                package.
              </p>
              <button class="btn btn-primary text-center"> Learn more</button>
            </div>
            <div className="col-sm-4 ">
              <img src={bootcamp} alt="" />
              <h3>Team Bootcamps</h3>
              <p>
                Empower your players with a 3-day intense bootcamp where our
                sport science experts will provide an in-depth understanding of
                how to take your team to the next level.
              </p>
              <button class="btn btn-primary text-center"> Learn more</button>
            </div>
            <div className="col-sm-4 ">
              <img src={competition} alt="" />
              <h3>Competition Support</h3>
              <p>
                Full access to our multidisciplinary team throughout your
                competition journey as a team or an individual
              </p>
              <button class="btn btn-primary text-center"> Learn more</button>
            </div>
          </div>
          <button class="btn btn-primary text-center "> Enquire Now</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HowWeDoIt

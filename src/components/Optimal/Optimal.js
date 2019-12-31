import React from "react"
import coach_dashboard from "../../img/coach_dashboard.png"

const Optimal = () => {
  return (
    <React.Fragment>
      <div className="bg-dark py-5 ">
        <div className="container text-center py-5">
          <div className="row">
            <div className="col-md-6">
              <img src={coach_dashboard} alt="" />
            </div>
            <div className="col-md-6">
              <h2 className="">Optimal</h2>{" "}
              <h4>Esports first athlete monitoring system</h4>
              <p>(Powered By G-Science)</p>
              {/* <h3 className="py-5">TAKE YOUR GAMING TO THE NEXT LEVEL!</h3> */}
              <p style={{ textAlign: "left" }}>
                Developed by Sports Scientists and Gamers, our system generates
                personalised indicators of player readiness, injury risk and
                burnout. We highlight the power in your data, giving you the
                knowledge and insights to make better informed decisions that
                optimises esports performance and prolongs careers.{" "}
              </p>
              <p style={{ textAlign: "left" }}>
                Get the best from your gamers.
              </p>
              <button className="btn btn-primary">
                <a href="/optimal">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Optimal

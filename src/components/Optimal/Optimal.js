import React from "react"
import coach_dashboard from "../../img/coach_dashboard.png"
const Optimal = () => {
  return (
    <React.Fragment>
      <div className="bg-dark py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-6">
              <h2 className="mb-5">Optimal</h2>
              <h5>(Powered By G-Science)</h5>
              <h3>TAKE YOUR GAMING TO THE NEXT LEVEL!</h3>
            </div>

            <div className="col-sm-6">
              <img src={coach_dashboard} alt="" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Optimal

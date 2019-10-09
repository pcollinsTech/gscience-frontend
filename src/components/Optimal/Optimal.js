import React from "react"
import coach_dashboard from "../../img/coach_dashboard.png"
const Optimal = () => {
  return (
    <React.Fragment>
      <div className=" py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-6">
              <h2 className="">Optimal</h2>
              <p>(Powered By G-Science)</p>
              {/* <h3 className="py-5">TAKE YOUR GAMING TO THE NEXT LEVEL!</h3> */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                enim nobis magni eligendi soluta omnis quo, dolorum quod eaque
                veritatis nulla cumque sequi beatae commodi possimus blanditiis
                maiores vel natus!
              </p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <button className="btn btn-primary">
                <a href="/optimal">Learn More</a>
              </button>
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

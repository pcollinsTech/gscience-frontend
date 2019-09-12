import React from "react"
import nuclear from "../../img/nuclear_storm.png"
import investni from "../../img/investni.png"
import ignite from "../../img/ignite.jpg"
import clash from "../../img/clashzone.jpg"
export default function WorkWith() {
  return (
    <React.Fragment>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="text-center pb-4">Who We Work With</h3>
            <div className="row">
              <div className="col-sm-6">
                <img
                  src={nuclear}
                  alt="nuclear storm"
                  className="mx-auto d-block"
                  style={{ maxWidth: "280px" }}
                />
              </div>
              <div className="col-sm-6">
                <img
                  src={clash}
                  alt="clashzone"
                  className="mx-auto d-block"
                  style={{ maxWidth: "200px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <h2 className="text-center pb-4">Sponsers</h2>
            <div className="row">
              <div className="col-sm-6">
                <img
                  src={investni}
                  alt="nuclear storm"
                  className="mx-auto d-block"
                  style={{ maxWidth: "280px" }}
                />
              </div>
              <div className="col-sm-6">
                <img
                  src={ignite}
                  alt="clashzone"
                  className="mx-auto d-block"
                  style={{ maxWidth: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

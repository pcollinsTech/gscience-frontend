import React from "react"
import nuclear from "../../img/nuclear_storm.png"
import investni from "../../img/investni.png"
import ignite from "../../img/ignite.jpg"
import clash from "../../img/clashzone.jpg"

export default function WorkWith() {
  return (
    <React.Fragment>
      <div className="container py-5 text-center">
        <h3 className=" pb-4">Who We Work With</h3>
        <div className="row text-center">
          <div className="col-sm-6">
            <img
              src={nuclear}
              alt="nuclear storm"
              className="mx-auto d-block"
              style={{ maxWidth: "280px" }}
            />
          </div>
          <div className="col-sm-6"></div>
        </div>
        <div className="text-center">
          <h2 className=" pb-4">Our Partners</h2>
          <div className="row">
            <div className="col-sm-6">
              <a href="https://discord.gg/hpAVJzd" target="__blank">
                <img
                  src={clash}
                  alt="clashzone"
                  className="mx-auto d-block"
                  style={{ maxWidth: "200px" }}
                />
              </a>
            </div>
            <div className="col-sm-6">
              <a href="https://igniteni.com/" target="__blank">
                <img
                  src={ignite}
                  alt="clashzone"
                  className="mx-auto d-block"
                  style={{ maxWidth: "200px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

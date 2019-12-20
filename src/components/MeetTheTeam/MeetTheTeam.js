import React from "react"
import ryan from "../../img/Team/ryan.png"
import alan from "../../img/Team/alan.jpg"
import chris from "../../img/Team/chris.jpg"
import jamie from "../../img/Team/jamie.jpg"
import phil from "../../img/Team/phil.jpg"
import spike from "../../img/Team/spike.png"

export default function MeetTheTeam() {
  return (
    <React.Fragment>
      <div className="container py-5 team">
        <h2 className="text-center pb-4">Meet The Team</h2>
        <div className="row">
          <div className="col-sm-4 team_member">
            <img src={ryan} alt="" />
            <h4>Ryan Scollan</h4>
          </div>
          <div className="col-sm-4 team_member">
            <img src={jamie} alt="" />
            <h4>Jamie Kiff</h4>
          </div>
          <div className="col-sm-4 team_member">
            <img src={chris} alt="" />
            <h4>Chris</h4>
          </div>
          <div className="col-sm-4 team_member">
            <img src={alan} alt="" />
            <h4>Alan Reid</h4>
          </div>
          <div className="col-sm-4 team_member">
            <img src={phil} alt="" />
            <h4>Phil Collins</h4>
          </div>
          <div className="col-sm-4 team_member">
            <img src={spike} alt="" />
            <h4>Spike Laurie</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

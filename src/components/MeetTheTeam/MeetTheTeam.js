import React from "react"
import ryan from "../../img/Team/ryan.jpg"

export default function MeetTheTeam() {
  return (
    <React.Fragment>
      <div className="container team">
        <h2 className="text-centre">Meet The Team</h2>
        <div className="row">
          <div className="col-sm-7">
            <div className="team_member row">
              <div className="col-sm-3">
                <img src={ryan} alt="" className="team_member_image" />
              </div>
              <div className="col-sm-9">
                <h4>Ryan Scollan</h4>
                <p>
                  Ryan is founder and CEO of G-Science. Something about how and
                  why you came up with G-Science … along the lines of your
                  passion for both Sport Science and esport made you realise how
                  there was a serious issue with how players were trying to
                  reach the top / improve their performance… therefore you used
                  your first class degree from Loughborough alongside your
                  extensive PT experience in order to combine technology and SS
                  to take gamers to the next level. Has worked with several
                  teams…...His favourite game is Call of Duty Blackout
                </p>
                <div className="team_member_social"></div>
              </div>
            </div>
            <div className="team_member row">
              <div className="col-sm-3">
                <img src={ryan} alt="" className="team_member_image" />
              </div>
              <div className="col-sm-9">
                <h4>Jamie Kiff</h4>
                <p>
                  Jamie is the Lead Performance Scientist at G-Science. He has
                  worked with a number of national and international athletes
                  throughout his time as a Strength and Conditioning coach at
                  both Bath and Loughborough University. His thesis on BFR and
                  muscular function alongside various injuries throughout his
                  playing career at Fulham and QPR has given him an in depth
                  understanding of return to play and recovery protocols. His
                  favourite game is Apex Legends.
                </p>
                <div className="team_member_social"></div>
              </div>
            </div>
            <div className="team_member row">
              <div className="col-sm-3">
                <img src={ryan} alt="" className="team_member_image" />
              </div>
              <div className="col-sm-9">
                <h4>Ryan Scollan</h4>
                <p>
                  Ryan is founder and CEO of G-Science. Something about how and
                  why you came up with G-Science … along the lines of your
                  passion for both Sport Science and esport made you realise how
                  there was a serious issue with how players were trying to
                  reach the top / improve their performance… therefore you used
                  your first class degree from Loughborough alongside your
                  extensive PT experience in order to combine technology and SS
                  to take gamers to the next level. Has worked with several
                  teams…...His favourite game is Call of Duty Blackout
                </p>
                <div className="team_member_social"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-5 text-right pl-5">
            <h4>A Team Within Our Team</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              nihil tempora doloribus iusto culpa esse earum, delectus
              perferendis eaque. Porro laudantium dolores consequuntur optio
              impedit inventore odio sunt animi hic.
            </p>
            <button className="btn btn-primary">
              <a href="#about">Meet the rest of the team</a>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

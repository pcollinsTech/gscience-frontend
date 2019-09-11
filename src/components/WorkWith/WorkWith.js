import React from "react"
import nuclear from "../../img/nuclear_storm.png"
import clash from "../../img/clashzone.jpg"
export default function WorkWith() {
  return (
    <React.Fragment>
      <h2 className="text-center pb-4">Who We Work With</h2>
      <img src={nuclear} alt="nuclear storm" />
      <img src={clash} alt="clashzone" />
    </React.Fragment>
  )
}

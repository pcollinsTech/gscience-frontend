import React, { Fragment } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import MainNav from "./MainNav"
import Footer from "./Footer"
import "../sass/app.scss"
const Layout = ({ props, children }) => {
  return (
    <Fragment>
      <MainNav router={props} />
      {/* <div className="container" style={{marginTop: "80px"}} > */}
      {children}
      {/* </div> */}
      <Footer />
    </Fragment>
  )
}

export default Layout

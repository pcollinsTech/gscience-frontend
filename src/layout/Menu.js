import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link to="#HowWeDoIt" offset={-70} duration={800} className="nav-link" onClick={this.closeNavbar} activeClassName="active">
            What We Do
          </Link>
        </li>
        <li>
          <Link to="#OurStory" offset={-70} duration={800} className="nav-link" onClick={this.closeNavbar} activeClassName="active">
            How We Do It
          </Link>
        </li>
        <li>
          <Link to="#WhatWeProvide" offset={-70} duration={800} className="nav-link" onClick={this.closeNavbar} activeClassName="active">
            Services
          </Link>
        </li>
        <li>
          <Link to="/optimal" offset={-70} duration={800} className="nav-link" onClick={this.closeNavbar} activeClassName="active">
            Optimal
          </Link>
        </li>
        <li>
          <Link to="/resources" className="nav-link" onClick={this.closeNavbar} activeClassName="active">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/blog" className="nav-link" onClick={this.closeNavbar} activeClassName="active">
            News
          </Link>
        </li>

        <li>
          {/* SideNav: src/components/SideNav */}
          <SideNav />
        </li>
      </ul>
    </div>
    <span className="close" onClick={props.onToggleMenu}>
      Close
    </span>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu

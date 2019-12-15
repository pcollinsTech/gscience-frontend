import React, { Component } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container, Row } from "react-bootstrap"
import logo from "../img/logopng.png"
import SideNav from "./SideNav"

class NavBar extends Component {
  componentDidMount() {
    let elem = document.getElementById("navbar")
    // if (this.props.router.location.pathname === "/") {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elem.classList.add("is-sticky")
      } else {
        elem.classList.remove("is-sticky")
      }
    })
    let scrollWithOffset = (el, offset) => {
      const elementPosition = el.offsetTop - offset
      window.scroll({
        top: elementPosition,
        left: 0,
        behavior: "smooth",
      })
    }
    this.setState({ scrollWithOffset })
  }

  closeNavbar() {
    if (window.matchMedia("screen and (max-width: 991px)").matches) {
      document.getElementById("collaspe-btn").click()
    }
  }
  render() {
    return (
      <div className="nav-wrapper">
        <Container>
          <Row>
            <Navbar
              sticky="top"
              id="navbar"
              expand="lg"
              className="navbar navbar-expand-lg "
              collapseOnSelect={true}
            >
              <Navbar.Brand>
                <Link to="/">
                  <img src={logo} alt="logo" style={{ maxWidth: "50px" }} />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                id="collaspe-btn"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Item>
                    <Link
                      to="#HowWeDoIt"
                      offset={-70}
                      duration={800}
                      className="nav-link"
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      What We Do
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="#OurStory"
                      offset={-70}
                      duration={800}
                      className="nav-link"
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      How We Do It
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="#WhatWeProvide"
                      offset={-70}
                      duration={800}
                      className="nav-link"
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      Services
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/optimal"
                      offset={-70}
                      duration={800}
                      className="nav-link"
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      Optimal
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/resources"
                      className="nav-link"
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      Resources
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/blog"
                      className="nav-link"
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      News
                    </Link>
                  </Nav.Item>

                  <Nav.Item>
                    {/* SideNav: src/components/SideNav */}
                    <SideNav />
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Row>
        </Container>
      </div>
    )
  }
}

export default NavBar

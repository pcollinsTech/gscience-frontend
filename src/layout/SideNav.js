import React, { Component } from "react"
import { Nav, Modal } from "react-bootstrap"
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation"
import PropTypes from "prop-types"
import {
  FaMapSigns,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa"

export class SideNav extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false,
    }
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  render() {
    return (
      <React.Fragment>
        <Nav.Link onClick={this.handleShow}>Contact</Nav.Link>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          className="right"
        >
          <Modal.Header closeButton />
          <Modal.Body>
            <div className="logo">
              <a href="/">
                {this.props.logotext}
                <span>{this.props.logotextspan}</span>{" "}
              </a>
            </div>
            <p>{this.props.content}</p>
            <ul className="modal-contact-info">
              <li>
                <FaMapSigns />
                <b>18 Ormeau Avenue</b>
                Belfast, Northern Ireland BT2 8HS
              </li>
              <li>
                <FaPhone />
                <b>
                  <a
                    href={`tel:${this.props.phonebolt}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {this.props.phonebolt}
                  </a>
                </b>
                {this.props.phonenormal}
              </li>
              <li>
                <FaEnvelope />
                <b>
                  <a
                    href={`mailto:${this.props.mailbolot}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {this.props.mailbolot}
                  </a>
                </b>
                {this.props.mailnormal}
              </li>
            </ul>

            <ul className="social-links">
              <li>
                <a href={this.props.facebooklink}>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href={this.props.twitterlink}>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href={this.props.instagramlink}>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href={this.props.linkedinlink}>
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href={this.props.pinterestlink}>
                  <FaPinterest />
                </a>
              </li>
            </ul>
            <ValidationForm
              id="contactForm"
              onSubmit={(e, formData, inputs) => {
                e.preventDefault()
              }}
            >
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <TextInput
                      name="name"
                      id="name"
                      required
                      successMessage=""
                      errorMessage="Please enter your name"
                      className="form-control"
                      placeholder="Name"
                      autoComplete="off"
                      onChange={this.handleFields}
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <TextInput
                      name="email"
                      id="email"
                      type="email"
                      required
                      successMessage=""
                      errorMessage="Please enter your email address"
                      className="form-control"
                      placeholder="Email"
                      autoComplete="off"
                      onChange={this.handleFields}
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <TextInput
                      name="message"
                      id="description"
                      multiline
                      placeholder="Your message"
                      className="form-control"
                      required
                      successMessage=""
                      errorMessage="Please write your message"
                      rows="5"
                      autoComplete="off"
                      onChange={this.handleFields}
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                </div>
              </div>
            </ValidationForm>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    )
  }
}
SideNav.PropsTypes = {
  logotext: PropTypes.string,
  logotextspan: PropTypes.string,
  content: PropTypes.string,
  locationbolt: PropTypes.string,
  locationnormal: PropTypes.string,
  phonebolt: PropTypes.string,
  phonenormal: PropTypes.string,
  mailbolot: PropTypes.string,
  mailnormal: PropTypes.string,
  facebooklink: PropTypes.string,
  twitterlink: PropTypes.string,
  instagramlink: PropTypes.string,
  linkedinlink: PropTypes.string,
  pinterestlink: PropTypes.string,
}
SideNav.defaultProps = {
  logotext: "G-",
  logotextspan: "Science",
  content: "Get in touch",
  locationbolt: "",
  locationnormal: "Northern Ireland",
  phonebolt: "07881092136",
  phonenormal: "Give us a call",
  mailbolot: "info@gscience.gg",
  mailnormal: "Online support & enquiries",
  facebooklink: "#",
  twitterlink: "#",
  instagramlink: "#",
  linkedinlink: "#",
  pinterestlink: "#",
}
export default SideNav

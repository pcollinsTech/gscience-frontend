import React, { Component } from "react"
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation"
import PropTypes from "prop-types"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"

export class OptimalSignup extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
      successMsg: "",
    }
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <React.Fragment>
        <section id="contact" className="contact-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>{this.props.sectionTitle}</h2>
              <p>{this.props.sectionContent}</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="get-in-touch">
                  <h3>{this.props.title}</h3>
                  <p>{this.props.content}</p>
                  <ul>
                    <li>
                      <a href={this.props.fblink}>
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
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
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
                          placeholder="Full Name"
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
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <TextInput
                          name="team"
                          id="team"
                          type="team"
                          required
                          successMessage=""
                          errorMessage="Please enter your team or organisation"
                          className="form-control"
                          placeholder="Team / Organisation"
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
                {this.state.successMsg !== "" ? (
                  <h3 className="contactMsg">{this.state.successMsg}</h3>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
OptimalSignup.PropsTypes = {
  sectionTitle: PropTypes.string,
  sectionTitleSpan: PropTypes.string,
  sectionContent: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  fblink: PropTypes.string,
  twitterlink: PropTypes.string,
  instagramlink: PropTypes.string,
  linkedinlink: PropTypes.string,
}
OptimalSignup.defaultProps = {
  sectionTitle: "Sign Up",
  sectionTitleSpan: "Us",
  sectionContent:
    "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  title: "Get in Touch",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  fblink: "#",
  twitterlink: "#",
  instagramlink: "#",
  linkedinlink: "#",
}
export default OptimalSignup

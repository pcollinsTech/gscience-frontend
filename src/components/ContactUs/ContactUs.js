import React, { Component } from "react"
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation"
import PropTypes from "prop-types"
import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapPin,
} from "react-icons/fa"

export class ContactUs extends Component {
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
              <h2>
                {this.props.sectionTitle} {this.props.sectionTitleSpan}
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="contact-box">
                  <div className="icon">
                    <FaMapPin />
                  </div>
                  <h4>Address</h4>
                  <p>
                    <b>18 Ormeau Avenue, </b>Belfast, Northern Ireland BT2 8HS
                  </p>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="contact-box">
                  <div className="icon">
                    <FaEnvelope />
                  </div>
                  <h4>Email</h4>
                  <p>info@gscience.gg</p>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="contact-box">
                  <div className="icon">
                    <FaPhone />
                  </div>
                  <h4>Phone</h4>
                  <p>07881092136</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="get-in-touch">
                  <h3>{this.props.title}</h3>
                  <p>{this.props.content}</p>
                  <ul>
                    <li>
                      <a href={this.props.twitterlink} target="__blank">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href={this.props.instagramlink} target="__blank">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href={this.props.linkedinlink} target="__blank">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href={this.props.discordlink} target="__blank">
                        <FaDiscord />
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
ContactUs.PropsTypes = {
  sectionTitle: PropTypes.string,
  sectionTitleSpan: PropTypes.string,
  sectionContent: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  fblink: PropTypes.string,
  twitterlink: PropTypes.string,
  instagramlink: PropTypes.string,
  linkedinlink: PropTypes.string,
  contactussData: PropTypes.array,
}
ContactUs.defaultProps = {
  sectionTitle: "Contact",
  sectionTitleSpan: "Us",
  sectionContent:
    "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  title: "Get in Touch",
  content: "If you want to find out more about the services we provide ",
  fblink: "#",
  twitterlink: "https://twitter.com/gscienceio",
  instagramlink: "https://www.instagram.com/gscience.io/",
  discordlink: "https://www.instagram.com/gscience.io/",
  linkedinlink: "https://www.linkedin.com/company/gscience/",
  contactussData: [
    {
      boxicon: "fas fa-map-pin",
      boxtitle: "Address",
      boxitem1link: "#",
      boxitem1: "Exercisplan 4, 111 49",
      boxitem2link: "#",
      boxitem2: "Stockholm, Sweden",
    },
    {
      boxicon: "fas fa-envelope",
      boxtitle: "Email",
      boxitem1link: "#",
      boxitem1: "Info@exolot.com",
      boxitem2link: "#",
      boxitem2: "support@exolot.com",
    },
    {
      boxicon: "fas fa-phone",
      boxtitle: "Phone",
      boxitem1link: "#",
      boxitem1: "+44 4587 458",
      boxitem2link: "#",
      boxitem2: "+44 4587 458",
    },
  ],
}
export default ContactUs

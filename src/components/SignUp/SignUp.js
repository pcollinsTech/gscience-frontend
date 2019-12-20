import React from "react"

const SignUp = () => {
  return (
    <section className="newsletter-section bg-dark">
      <div className="container large py-5">
        <h2>Never miss a story. Subscribe for newsletter. </h2>
        <div className="my-5 py-5">
          <form>
            <div className="row d-flex justify-content-between">
              <div className="col-sm-9">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required=""
                />
              </div>

              <div className="col-sm-3">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUp

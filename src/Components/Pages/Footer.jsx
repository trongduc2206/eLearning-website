import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <section aria-label="Quick Links">
              <div className="col-lg-3 col-md-6">
                <p className="text-white mb-3 fs-4 fw-bold">Quick Link</p>
                <a className="btn btn-link" href>
                  About Us
                </a>
                <a className="btn btn-link" href>
                  Contact Us
                </a>
                <a className="btn btn-link" href>
                  Privacy Policy
                </a>
                <a className="btn btn-link" href>
                  Terms &amp; Condition
                </a>
                <a className="btn btn-link" href>
                  FAQs &amp; Help
                </a>
              </div>
            </section>
            <section aria-label="Contact Information">
              <div className="col-lg-3 col-md-6">
                <p className="text-white mb-3 fs-4 fw-bold">Contact</p>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3" />
                  Chennai, Tamil Nadu, India
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt me-3" />
                  +091 705 088 9705
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3" />
                  basantgoswami7050@gmail.com
                </p>
                <div className="d-flex pt-2">
                  <a
                    className="btn btn-outline-light btn-social"
                    href="https://www.youtube.com/channel/UCESPlHcn45qCQe9YiH43MRw"
                    target="_blank"
                  >
                    <i className="fab fa-youtube" />
                    <span className="sr-only">YouTube</span>
                  </a>
                  <a
                    className="btn btn-outline-light btn-social"
                    href="https://www.facebook.com/basant.bharati.54/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    className="btn btn-outline-light btn-social"
                    href="https://github.com/Basant-goswami"
                    target="_blank"
                  >
                    <i className="fab fa-github" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    className="btn btn-outline-light btn-social"
                    href="https://www.linkedin.com/in/basant-kumar-bharati"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </section>
            <section aria-label="Gallery">
              <div className="col-lg-3 col-md-6">
                <p className="text-white mb-3 fs-4 fw-bold">Gallery</p>
                <div className="row g-2 pt-2">
                  <div className="col-4">
                    <img
                      className="img-fluid bg-light p-1"
                      src="/img/course-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-4">
                    <img
                      className="img-fluid bg-light p-1"
                      src="/img/course-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-4">
                    <img
                      className="img-fluid bg-light p-1"
                      src="/img/course-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-4">
                    <img
                      className="img-fluid bg-light p-1"
                      src="/img/course-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-4">
                    <img
                      className="img-fluid bg-light p-1"
                      src="/img/course-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-4">
                    <img
                      className="img-fluid bg-light p-1"
                      src="/img/course-1.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
            <section aria-label="Newsletter">
              <div className="col-lg-3 col-md-6">
                <p className="text-white mb-3 fs-4 fw-bold">Newsletter</p>
                <p>
                  This website is a Final Year project of IT Department DSCET,
                  Chennai.
                </p>
                <div
                  className="position-relative mx-auto"
                  style={{ maxWidth: "400px" }}
                >
                  <input
                    className="form-control border-0 w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Your email"
                  />
                  <button
                    type="button"
                    className="btn btn-dark py-2 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section aria-label="Copyright">
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  ©{" "}
                  <a className="border-bottom" href>
                    eLearning
                  </a>
                  , All Right Reserved. Designed By{" "}
                  <a
                    className="border-bottom"
                    href="https://www.linkedin.com/in/basant-kumar-bharati"
                    target="_blank"
                  >
                    DSCET IT Dept final year student
                  </a>
                  <br />
                  <br />
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <a href>Home</a>
                    <a href>Cookies</a>
                    <a href>Help</a>
                    <a href>FQAs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

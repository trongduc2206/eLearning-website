import React from "react";

export default function Team() {
  return (
    <>
      <section aria-label="Team Section">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title bg-white text-center text-dark px-3 fw-bold">
              Instructors
            </p>
            <h1 className="mb-5">Expert Instructors</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="/img/team-1.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href>
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <p className="mb-0 text-dark fw-bold fs-5">Mr. John Deo</p>
                  <small>MERN Stack Devloper</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="/img/team-2.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href>
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <p className="mb-0 text-dark fw-bold fs-5">Mrs. Shradha</p>
                  <small>Web Designer & Devloper</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="/img/team-3.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href>
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <p className="mb-0 text-dark fw-bold fs-5">Mr. Bobby Ficher</p>
                  <small>Data Structure & Algorithms</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="/img/team-4.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href>
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <p className="mb-0 text-dark fw-bold fs-5">Mrs. Manvi</p>
                  <small>C and C++</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

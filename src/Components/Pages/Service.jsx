import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <>
    <section aria-label='Service Section'>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3">
                <Link to="/test">
                  <div className="p-4">
                    <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
                    <p className="mb-3 fw-bold fs-5">Online Assessment</p>
                    <p>Online assessment enhanced with AI provides a personalized evaluation of your skills to enhance your learning and development.</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3">
                <Link to="/">
                  <div className="p-4">
                    <i className="fa fa-3x fa-globe text-primary mb-4" />
                    <p className="mb-3  fw-bold fs-5">Online Classes</p>
                    <p>Take advantage of our online classes to expand your knowledge and skills.</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3">
                {/* <Link to="/team"> */}
                <div className="p-4">
                  <i className="fa fa-3x fa-home text-primary mb-4" />
                  <p className="mb-3 fw-bold fs-5">Home Projects</p>
                  <p>Transform your living space with these creative home project ideas that are sure to inspire.</p>
                </div>
                {/* </Link> */}
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3">
                <Link to="/library">
                  <div className="p-4">
                    <i className="fa fa-3x fa-book-open text-primary mb-4" />
                    <p className="mb-3 fw-bold fs-5">Book Library</p>
                    <p>Our e-library offers a diverse range of e-books and digital resources to cater to every interest and age group.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

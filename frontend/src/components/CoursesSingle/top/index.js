import React from "react";
import "./index.css";

export default function CoursesSingleTop() {
  return (
    <div class="container">
      <section class="course-title">
        <a href="#">
          <img
            className="save"
            src="/images/save.svg"
            title="Save this course"
          />
        </a>
        <div className="header">
          <h1>Learn Figma: User Interface Design Essentials - UI/UX Design</h1>
        </div>
        <div className="course-describe mt-1">
          <h6 className="fs-6 text fw-normal">
            Master Figma app to get a job in UI Design, User Interface, User
            Experience design, Web Design & UX design.
          </h6>
        </div>
        <div className="course-rating d-flex">
          <div className="instructor-block d-flex">
            <img
              className="instructor mt-4 me-3"
              src="/images/instructor_images.svg"
              title="Instructor"
            />
            <div className="d-block d-md-none mt-4 me-5 pt-2">
              <h6 className="m-0">Created by</h6>
              <p className="m-0">Alison Dawn</p>
            </div>
            <div className="d-block d-md-none mt-4 pt-2">
              <h6 className="m-0">Categories</h6>
              <p className="m-0">Design</p>
            </div>
          </div>

          <div className="rating-info d-flex justify-content-between align-items-baseline mt-4 pt-2">
            <div className="d-none d-md-block d-lg-block d-xl-block">
              <h6 className="m-0">Created by</h6>
              <p className="m-0">Alison Dawn</p>
            </div>
            <div className="d-none d-md-block d-lg-block d-xl-block">
              <h6 className="m-0">Categories</h6>
              <p className="m-0">Design</p>
            </div>
            <div className="review">
              <h6 className="m-0">Review</h6>
              <div className="stars d-flex justify-content-between align-items-baseline m-0">
                <img className="me-1" src="/images/Vector.svg" alt="star" />
                <img className="me-1" src="/images/Vector.svg" alt="star" />
                <img className="me-1" src="/images/Vector.svg" alt="star" />
                <img className="me-1" src="/images/Vector.svg" alt="star" />
                <img className="me-2" src="/images/Vector.svg" alt="star" />
                <p>
                  <span className="average-score"> 4.87</span> (
                  <span className="review-number">3.8k+</span>
                  reviews)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

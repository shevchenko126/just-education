import React from "react";
import "./index.css";

export default function CoursesSingleTop() {
  return (
    <div class="container">
      <section class="course-title">
        <img class="save" src="/images/save.svg" title="Save this course" />
        <div class="header">
          <h1>Learn Figma: User Interface Design Essentials - UI/UX Design</h1>
        </div>
        <div class="course-describe mt-1">
          <h6 class="fs-6 text fw-normal">
            Master Figma app to get a job in UI Design, User Interface, User
            Experience design, Web Design & UX design.
          </h6>
        </div>
        <div class="course-rating d-flex">
          <div class="instructor-block d-flex">
            <img
              class="instructor mt-4 me-3"
              src="/images/instructor_images.svg"
              title="Instructor"
            />
            <div class="d-block d-md-none mt-4 me-5 pt-2">
              <h6 class="m-0">Created by</h6>
              <p class="m-0">Alison Dawn</p>
            </div>
            <div class="d-block d-md-none mt-4 pt-2">
              <h6 class="m-0">Categories</h6>
              <p class="m-0">Design</p>
            </div>
          </div>

          <div class="rating-info d-flex justify-content-between align-items-baseline mt-4 pt-2">
            <div class="d-none d-md-block d-lg-block d-xl-block">
              <h6 class="m-0">Created by</h6>
              <p class="m-0">Alison Dawn</p>
            </div>
            <div class="d-none d-md-block d-lg-block d-xl-block">
              <h6 class="m-0">Categories</h6>
              <p class="m-0">Design</p>
            </div>
            <div class="review">
              <h6 class="m-0">Review</h6>
              <div class="stars d-flex justify-content-between align-items-baseline m-0">
                <img class="me-1" src="/images/Vector.svg" alt="star" />
                <img class="me-1" src="/images/Vector.svg" alt="star" />
                <img class="me-1" src="/images/Vector.svg" alt="star" />
                <img class="me-1" src="/images/Vector.svg" alt="star" />
                <img class="me-2" src="/images/Vector.svg" alt="star" />
                <p>
                  <span class="average-score"> 4.87</span> (
                  <span class="review-number">3.8k+</span>
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

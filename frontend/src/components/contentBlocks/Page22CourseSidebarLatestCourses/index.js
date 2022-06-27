import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "./index.css";
import svgCourseThumbnail from "./images/Course_Thumbnail.svg";


const Page22CourseSingleV1SidebarLatestCourses = () => {
    return (
      
      <div class="container-fluid" id="latest-courses__block">
      <div class="col-12" id="latest-courses__title">Latest Courses</div>
  
      <div class="row" id="latest-courses__list">
          <div class="col-4" id="latest-courses__image-block"><a href="#"><img src="{ svgCourseThumbnail }" class="img-fluid" alt="course-icon" id="latest-courses__image" /></a></div>
          <div class="col-7 align-middle" id="latest-courses__texts">
              <div class="col-12" id="course-name"><a href="#" class="course-name__link">Web Development and Design</a></div>
              <div class="row" id="latest_courses_prices">
                  <div class="col-2" id="latest-courses__old-price">$959</div>
                  <div class="col-10" id="latest-courses__new-price">$415.99</div>
              </div>
  
           </div>
      </div>
  
      <div class="row" id="latest-courses__list">
          <div class="col-4" id="latest-courses__image-block"><a href="#"><img src="{ svgCourseThumbnail }" class="img-fluid" alt="course-icon" id="latest-courses__image" /></a></div>
          <div class="col-7" id="latest-courses__texts">
              <div class="col-12" id="course-name"><a href="#" class="course-name__link">The Complete Cyber Security Course : Hackers</a></div>
              <div class="row" id="latest_courses_prices">
                  <div class="col-2" id="latest-courses__old-price">$959</div>
                  <div class="col-10" id="latest-courses__new-price">$415.99</div>
              </div>
  
           </div>
      </div>
  
      <div class="row" id="latest-courses__list">
          <div class="col-4" id="latest-courses__image-block"><a href="#"><img src="{ svgCourseThumbnail }" class="img-fluid" alt="course-icon" id="latest-courses__image" /></a></div>
          <div class="col-7" id="latest-courses__texts">
              <div class="col-12" id="course-name"><a href="#" class="course-name__link">Fashion Photography From Professional</a></div>
              <div class="row" id="latest_courses_prices">
                  <div class="col-2" id="latest-courses__old-price">$959</div>
                  <div class="col-10" id="latest-courses__new-price">$415.99</div>
              </div>
  
           </div>
      </div>
  
      <div class="row" id="latest-courses__list">
          <div class="col-4" id="latest-courses__image-block"><a href="#"><img src="{ svgCourseThumbnail }" class="img-fluid" alt="course_icon" id="latest-courses__image" /></a></div>
          <div class="col-7" id="latest-courses__texts">
              <div class="col-12" id="course-name"><a href="#" class="course-name__link">The Complete Financial Analyst Course 2020</a></div>
              <div class="row" id="latest_courses_prices">
                  <div class="col-2" id="latest-courses__old-price">$959</div>
                  <div class="col-10" id="latest-courses__new-price">$415.99</div>
              </div>
  
           </div>
      </div>
  
  </div>
  
    )
  }
  export default Page22CourseSingleV1SidebarLatestCourses
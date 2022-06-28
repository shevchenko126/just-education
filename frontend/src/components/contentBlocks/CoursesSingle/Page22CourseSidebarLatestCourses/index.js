import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "./index.css";
import svgCourseThumbnail from "./images/Course_Thumbnail.svg";


const Page22CourseSingleV1SidebarLatestCourses = () => {
    return (
      
      <div className="container-fluid" id="latest-courses__block">
      <div class="col-12" id="latest-courses__title">Latest Courses</div>
  
      <div className="row" id="latest-courses__list">
          <div className="col-4" id="latest-courses__image-block"><a href="#"><img src="{ svgCourseThumbnail }" className="img-fluid" alt="course-icon" id="latest-courses__image" /></a></div>
          <div className="col-7 align-middle" id="latest-courses__texts">
              <div className="col-12" id="course-name"><a href="#" className="course-name__link">Web Development and Design</a></div>
              <div className="row" id="latest_courses_prices">
                  <div className="col-2" id="latest-courses__old-price">$959</div>
                  <div className="col-10" id="latest-courses__new-price">$415.99</div>
              </div>
  
           </div>
      </div>
  
      <div className="row" id="latest-courses__list">
          <div className="col-4" id="latest-courses__image-block"><a href="#"><img src="{ svgCourseThumbnail }" className="img-fluid" alt="course-icon" id="latest-courses__image" /></a></div>
          <div className="col-7" id="latest-courses__texts">
              <div className="col-12" id="course-name"><a href="#" className="course-name__link">The Complete Cyber Security Course : Hackers</a></div>
              <div className="row" id="latest_courses_prices">
                  <div className="col-2" id="latest-courses__old-price">$959</div>
                  <div className="col-10" id="latest-courses__new-price">$415.99</div>
              </div>
  
           </div>
      </div>
  
      <div className="row" id="latest-courses__list">
          <div className="col-4" id="latest-courses__image-block"><a href="#"><img src="{ svgCourseThumbnail }" className="img-fluid" alt="course-icon" id="latest-courses__image" /></a></div>
          <div className="col-7" id="latest-courses__texts">
              <div className="col-12" id="course-name"><a href="#" className="course-name__link">Fashion Photography From Professional</a></div>
              <div className="row" id="latest_courses_prices">
                  <div className="col-2" id="latest-courses__old-price">$959</div>
                  <div className="col-10" id="latest-courses__new-price">$415.99</div>
              </div>
  
           </div>
      </div>
  
      <div className="row" id="latest-courses__list">
          <div className="col-4" id="latest-courses__image-block"><a href="#"><img src="{ svgCourseThumbnail }" className="img-fluid" alt="course_icon" id="latest-courses__image" /></a></div>
          <div className="col-7" id="latest-courses__texts">
              <div className="col-12" id="course-name"><a href="#" className="course-name__link">The Complete Financial Analyst Course 2020</a></div>
              <div className="row" id="latest_courses_prices">
                  <div className="col-2" id="latest-courses__old-price">$959</div>
                  <div className="col-10" id="latest-courses__new-price">$415.99</div>
              </div>
  
           </div>
      </div>
  
  </div>
  
    )
  }
  export default Page22CourseSingleV1SidebarLatestCourses
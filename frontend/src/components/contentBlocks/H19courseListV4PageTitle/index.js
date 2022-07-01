import React from 'react'
import "./index.css"
import svgTitle from "./images/sub_page_title.svg"
import svgPeople from"./images/people.svg"



const H19CourseListV4PageTitle = () => {
    return(
        <div className="container-fluid justify-content-between ">
            <div className="row d-flex align-items-center">
                <div className="col-7">
                    <div Name="course_left-block d-flex justify-content-end">
                        <div class="course_courses">
                            <img className="img-fluid" src={svgTitle} alt="Grid"></img>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div clasNames="course_right-block d-flex justify-content-end">
                        <div className="course_people">
                            <img className="img-fluid" src={svgPeople} alt="People"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default H19CourseListV4PageTitle

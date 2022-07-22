import React from 'react'
import "./index.css"
import svgTitle from "./images/sub_page_title.svg"
import svgBlogV1 from "./images/blog_list_v1.svg"
import svgBlogV2 from "./images/blog_list_v2.svg"
import svgBlogV3 from "./images/blog_list_v3.svg"
import svgBlogV4 from "./images/blog_list_v4.svg"

const H48BlogV1 =() => {
    return(
        <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="row w-100 position-relative">
            <div className="col-12 d-flex flex-column align-items-center">
                <h1>
                    <img className="img-fluid" src={svgTitle} alt="Blog"></img>
                </h1>  
            </div>
            <div className="col-8 w-75 p-1">
                <div className="blog_list">
                    <div className="1 pt-3">
                        <img className="img-fluid" src={svgBlogV1}></img>
                    </div>
                    <div className="2 pt-2">
                        <img className="img-fluid" src={svgBlogV2}></img>
                    </div>
                    <div className="3 pt-2">
                        <img className="img-fluid" src={svgBlogV3}></img>
                    </div>
                    <div className="4 pt-2">
                        <img className="img-fluid" src={svgBlogV4}></img>
                    </div>
                </div>
            </div>
            <div className="col-4 w-25 p-1">
                <div className="sidebar">
               
                </div>
            </div>
        </div>
    </div>  
    )
}
export default H48BlogV1
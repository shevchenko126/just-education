import React from 'react';
import './index.css';


const index = () => {
  return (
    <div className="instructor container">
        <div class='row'>
        <div className="col-8 col-sm-12">
            <div className="instructor__name">
                <p>About the instructor</p>
            </div>
            <div className="instructor__person d-flex">
                <div className="person__img"></div>
                <div className="instructor__info d-flex flex-column justify-content-center">
                    <h2>Lauren Handerson</h2>
                    <p>iOS Developer & UI Designer</p>
                </div>
            </div>
            <div className="instructor__achievement d-flex justify-content-around flex-wrap">
                <div className="achievement__rating instructor__achievement-block">
                    <p>4.87 Instructor rating</p>
                </div>
                <div className="achievement__reviews instructor__achievement-block">
                    <p>1,533 reviews</p>
                </div>
                <div className="achievement__students instructor__achievement-block">
                    <p>23,912 students</p>
                </div>
                <div className="achievement__courses instructor__achievement-block">
                    <p>29 courses</p>
                </div>
            </div>
            <div className="instructor__text">
                <div class='text-about'>
                    <p>I am a UI/UX designer and an iOS developer with having almost six years of experience in application development and also ten years of graphic design and User Interface design.</p>
                </div>
                <div class='text-passion'>
                    <p>My passion is helping people to learn new skills in a short-term course and achieve their goals. I've been designing for more than ten years and developing iOS apps for four years. It's my honor if I could help you learn to program in a simple word. I currently am teaching iOS 13, Swift 5, ARKit 3, Sketch 5, Illustrator, Photoshop, Cinema 4D, HTML, CSS, JavaScript, etc.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
export default index;
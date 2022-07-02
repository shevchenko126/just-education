import React from "react";
import "./index.css";

const Just27lessonsinglev10 = () => {
  const [burgerButton, setBurgerButton] = React.useState(true);
  const [activeContent, setActiveContent] = React.useState("");

  const toggleBurger = () => {
    setBurgerButton((tog) => !tog);
    burgerButton ? setActiveContent("active") : setActiveContent("");
  };

  return (
    <div className="main-content__box container col mx-auto">
      <div className="burger-menu">
        <div className={`burger-content ${activeContent}`}></div>
        <div
          className="burger-button"
          type="button"
          onClick={toggleBurger}
        ></div>
      </div>
      <div className="main-container d-flex flex-wrap row mx-auto">
        <div className="main-content__text position-relative">
          <h2 className="text-left">Introduction to the course</h2>
          <div
            className="main-course 
                    position-relative 
                    col d-flex 
                    align-items-center 
                    justify-content-center"
          >
            <video src="..." className=" col"></video>
            <div
              className="video-button cursor-pointer position-absolute"
              type="button"
            ></div>
          </div>
        </div>
        <div className="main-content__text">
          <h2 className="text-left">Course Description</h2>
          <div className="main-desription__text">
            <p>
              Do you want to become a UI/UX designer but you don't know where to
              start? This course will allow you to develop your user interface
              design skills and you can add UI designer to your CV and start
              getting clients for your skills.
            </p>
            <p>
              Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I
              will help you learn and master Figma app comprehensively from
              scratch. Figma is an innovative and brilliant tool for User
              Interface design. It's used by everyone from entrepreneurs and
              start-ups to Apple, Airbnb, Facebook, etc.
            </p>
          </div>
        </div>
        <div className="main-container__footer">
          <div className="d-flex justify-content-start">
            <span className="show-less__text">Read more</span>
            <div
              className="show-less d-flex alighn-items-center justify-content-center"
              type="button"
            >
              +
            </div>
          </div>
          <div
            className="buttons
                        d-flex 
                        align-items-center
                        justify-content-between 
                        flex-wrap"
          >
            <div
              className="descriptoin-buttons
                        d-inline-flex 
                        justify-content-center  
                        align-items-center
                        mt-1"
              type="button"
            >
              <div>
                <img
                  src="/images/icons/arrow_left.svg"
                  className="arrow-img"
                  alt="..."
                />
              </div>
              <span>Introduction</span>
            </div>
            <div
              className="descriptoin-buttons
                        d-inline-flex 
                        justify-content-center 
                        flex-row-reverse 
                        align-items-center
                        mt-1"
              type="button"
            >
              <div>
                <img
                  src="/images/icons/arrow_right.svg"
                  className="arrow-img"
                  alt="..."
                />
              </div>
              <span>Structure of the course</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Just27lessonsinglev10;

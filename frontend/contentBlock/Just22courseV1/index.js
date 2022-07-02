import React from "react";
import list from "./img/list.svg";
import play from "./img/play.svg";
import unlock from "./img/unlock.svg";
import watch from "./img/watch.svg";
import "./index.css";

export const Just22courseV1 = () => {
  const [buttonClick, setbuttonClick] = React.useState(false);

  const onButtonClick = (event) => {
    event.preventDefault();
    setbuttonClick(true);
    console.log("onButtonClick");
  };
  return (
    <div className="block_overview container">
      <div className="block_overview-nav row">
        <ul className="block-nav nav">
          <li className="nav-item">
            <a
              className="nav-link nav-link__item"
              aria-current="page"
              href="..."
            >
              Overview
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={onButtonClick}
              className={`nav-link nav-link__item ${
                buttonClick ? "active" : ""
              }`}
              href="..."
            >
              Curriculum
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link__item" href="...">
              Instructor
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link__item" href="...">
              Reviews
            </a>
          </li>
        </ul>
      </div>
      <div className="block_overview__line"></div>
      {buttonClick && (
        <div className="block-accordion">
          <div className="accordion-wrapper">
            <div
              className="block-accordion accordion accordion-flush"
              id="accordionFlushOne"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button accordion-button__custom"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Introduction
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushOne"
                >
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={list} alt="" />
                        </div>
                        <div className="accordion-text">
                          Introduction to the course
                        </div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-question">3 question</div>
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={play} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={watch} alt="" />
                        </div>
                        <div className="accordion-text">Introduction</div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={unlock} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={list} alt="" />
                        </div>
                        <div className="accordion-text">
                          Structure of the course
                        </div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={play} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={watch} alt="" />
                        </div>
                        <div className="accordion-text">Required Tools</div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-lectures">12 lectures</div>
                        <div className="accordion-time">45 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={unlock} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={list} alt="" />
                        </div>
                        <div className="accordion-text">
                          Get Your Free E-book
                        </div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-question">3 question</div>
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={play} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-wrapper">
            <div
              className="block-accordion accordion accordion-flush"
              id="accordionFlushTwo"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button accordion-button__custom"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Design Basics
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushTwo"
                >
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={list} alt="" />
                        </div>
                        <div className="accordion-text">
                          Intro to Design Basics
                        </div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={play} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={watch} alt="" />
                        </div>
                        <div className="accordion-text">Layout</div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-lectures">9 lectures</div>
                        <div className="accordion-question">5 question</div>
                        <div className="accordion-time">45 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={unlock} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={list} alt="" />
                        </div>
                        <div className="accordion-text">Visual hierarchy</div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={play} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={watch} alt="" />
                        </div>
                        <div className="accordion-text">Visual noise</div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-lectures">12 lectures</div>
                        <div className="accordion-question">5 question</div>
                        <div className="accordion-time">45 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={unlock} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={list} alt="" />
                        </div>
                        <div className="accordion-text">Iconography</div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={play} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={watch} alt="" />
                        </div>
                        <div className="accordion-text">Typography</div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={unlock} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-wrapper">
            <div
              className="block-accordion accordion accordion-flush"
              id="accordionFlushThree"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed accordion-button__custom"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Figma Academy
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushThree"
                >
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={list} alt="" />
                        </div>
                        <div className="accordion-text">
                          Introduction to the course
                        </div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-lectures">12 lectures</div>
                        <div className="accordion-question">3 question</div>
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={play} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={watch} alt="" />
                        </div>
                        <div className="accordion-text">Introduction</div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-lectures">12 lectures</div>
                        <div className="accordion-question">3 question</div>
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={unlock} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={list} alt="" />
                        </div>
                        <div className="accordion-text">
                          Structure of the course
                        </div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-lectures">12 lectures</div>
                        <div className="accordion-question">3 question</div>
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={play} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={watch} alt="" />
                        </div>
                        <div className="accordion-text">Required Tools</div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-lectures">12 lectures</div>
                        <div className="accordion-question">3 question</div>
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={unlock} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={list} alt="" />
                        </div>
                        <div className="accordion-text">
                          Get Your Free E-book
                        </div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-lectures">12 lectures</div>
                        <div className="accordion-question">3 question</div>
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={play} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-wrapper">
            <div
              className="block-accordion accordion accordion-flush"
              id="accordionFlushFour"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed accordion-button__custom"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    UI Elements
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushFour"
                >
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={list} alt="" />
                        </div>
                        <div className="accordion-text">
                          Introduction to the course
                        </div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-lectures">12 lectures</div>
                        <div className="accordion-question">3 question</div>
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={play} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={watch} alt="" />
                        </div>
                        <div className="accordion-text">Introduction</div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-lectures">12 lectures</div>
                        <div className="accordion-question">3 question</div>
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={unlock} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={list} alt="" />
                        </div>
                        <div className="accordion-text">
                          Structure of the course
                        </div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-lectures">12 lectures</div>
                        <div className="accordion-question">3 question</div>
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={play} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={watch} alt="" />
                        </div>
                        <div className="accordion-text">Required Tools</div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-lectures">12 lectures</div>
                        <div className="accordion-question">3 question</div>
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={unlock} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-row">
                      <div className="accordion-left-block">
                        <div className="accordion-img-left">
                          <img src={list} alt="" />
                        </div>
                        <div className="accordion-text">
                          Get Your Free E-book
                        </div>
                      </div>
                      <div className="accordion-right-block">
                        <div className="accordion-lectures">12 lectures</div>
                        <div className="accordion-question">3 question</div>
                        <div className="accordion-time">30 min</div>
                        <div className="accordion-img-right">
                          <a href="...">
                            <img src={play} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Just22courseV1;

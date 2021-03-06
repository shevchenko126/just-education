import React from "react";
import "./index.css";

const Just27lessonsinglev1Burger = () => {
  const [burgerButton, setBurgerButton] = React.useState(true);
  const [activeContent, setActiveContent] = React.useState("");

  const toggleBurger = () => {
    setBurgerButton((tog) => !tog);
    burgerButton ? setActiveContent("active") : setActiveContent("");
  };

  return (
    <>
      <div className={`burger-menu ${activeContent}`}>
        <div className="burger-content">
          <div className="burger-search__input">
            <input
              className="inputSearch"
              type="text"
              placeholder="Search Item"
            />
          </div>
          <div
            className="burger-button"
            type="button"
            onClick={toggleBurger}
          ></div>
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
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/list.svg" alt="" />
                          </div>
                          <div className="accordion-text">
                            Introduction to the course
                          </div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/play.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/watch.svg" alt="" />
                          </div>
                          <div className="accordion-text">Introduction</div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/unlock.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/list.svg" alt="" />
                          </div>
                          <div className="accordion-text">
                            Structure of the course
                          </div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/play.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/watch.svg" alt="" />
                          </div>
                          <div className="accordion-text">Required Tools</div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">45 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/unlock.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/list.svg" alt="" />
                          </div>
                          <div className="accordion-text">
                            Get Your Free E-book
                          </div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/play.svg" alt="" />
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
                      className="accordion-button accordion-button__custom collapsed"
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
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushTwo"
                  >
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/list.svg" alt="" />
                          </div>
                          <div className="accordion-text">
                            Intro to Design Basics
                          </div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/play.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/watch.svg" alt="" />
                          </div>
                          <div className="accordion-text">Layout</div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">45 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/unlock.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/list.svg" alt="" />
                          </div>
                          <div className="accordion-text">Visual hierarchy</div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/play.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/watch.svg" alt="" />
                          </div>
                          <div className="accordion-text">Visual noise</div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">45 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/unlock.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/list.svg" alt="" />
                          </div>
                          <div className="accordion-text">Visual noise</div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/play.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/watch.svg" alt="" />
                          </div>
                          <div className="accordion-text">Typography</div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/unlock.svg" alt="" />
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
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/list.svg" alt="" />
                          </div>
                          <div className="accordion-text">
                            Introduction to the course
                          </div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/play.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/watch.svg" alt="" />
                          </div>
                          <div className="accordion-text">Introduction</div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/unlock.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/list.svg" alt="" />
                          </div>
                          <div className="accordion-text">
                            Structure of the course
                          </div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/play.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/watch.svg" alt="" />
                          </div>
                          <div className="accordion-text">Required Tools</div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/unlock.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/list.svg" alt="" />
                          </div>
                          <div className="accordion-text">
                            Get Your Free E-book
                          </div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/play.svg" alt="" />
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
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/list.svg" alt="" />
                          </div>
                          <div className="accordion-text">
                            Introduction to the course
                          </div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/play.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/watch.svg" alt="" />
                          </div>
                          <div className="accordion-text">Introduction</div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/unlock.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/list.svg" alt="" />
                          </div>
                          <div className="accordion-text">
                            Structure of the course
                          </div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/play.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/watch.svg" alt="" />
                          </div>
                          <div className="accordion-text">Required Tools</div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/unlock.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-body">
                      <div className="accordion-row">
                        <div className="accordion-left__block">
                          <div className="accordion-img__left">
                            <img src="/images/icons/list.svg" alt="" />
                          </div>
                          <div className="accordion-text">
                            Get Your Free E-book
                          </div>
                        </div>
                        <div className="accordion-right__block">
                          <div className="accordion-time">30 min</div>
                          <div className="accordion-img__right">
                            <a href="...">
                              <img src="/images/icons/play.svg" alt="" />
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
        </div>
      </div>
    </>
  );
};
export default Just27lessonsinglev1Burger;

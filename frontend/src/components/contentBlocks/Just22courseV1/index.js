import React from "react";
import "./index.css";

const Just22courseV1 = () => {
  const [buttonClick, setButtonClick] = React.useState(false);
  const [blocks, setBlocks] = React.useState([]);

  const getData = () => {
    fetch("curriculum.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((blocks) => setBlocks(blocks))
      .catch((error) => console.log(error));
  };

  const onButtonClick = (event) => {
    event.preventDefault();
    setButtonClick(true);
    getData();
  };

  return (
    <div className="block-overview container">
      <div className="block-overview__nav row">
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
      <div className="block-overview__line"></div>
      <div className="block-accordion">
        {buttonClick &&
          blocks.map((block) => (
            <div key={block.id} id={block.id} className="accordion-wrapper">
              <div
                className="block-accordion accordion accordion-flush"
                id={`accordionFlush${block.id}`}
              >
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id={`flush-heading${block.id}`}
                  >
                    <button
                      className="accordion-button collapsed accordion-button__custom"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${block.id}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${block.id}`}
                    >
                      {block.name}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${block.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`flush-heading${block.id}`}
                    data-bs-parent={`#accordionFlush${block.id}`}
                  >
                    {block.items.map((obj, index) => (
                      <div key={index} className="accordion-body">
                        <div className="accordion-row">
                          <div className="accordion-left__block">
                            <div className="accordion-img__left">
                              <img
                                src={`/images/icons/${obj.lefticon}.svg`}
                                alt=""
                              />
                            </div>
                            <div className="accordion-text">
                              {obj.description}
                            </div>
                          </div>
                          <div className="accordion-right__block">
                            {obj.lectures && (
                              <div className="accordion-lectures">
                                {`${obj.lectures} lectures`}
                              </div>
                            )}
                            {obj.question && (
                              <div className="accordion-question">
                                {`${obj.question} question`}
                              </div>
                            )}
                            {obj.time && (
                              <div className="accordion-time">
                                {`${obj.time} time`}
                              </div>
                            )}
                            <div className="accordion-img__right">
                              <a href="...">
                                <img
                                  src={`/images/icons/${obj.state}.svg`}
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Just22courseV1;

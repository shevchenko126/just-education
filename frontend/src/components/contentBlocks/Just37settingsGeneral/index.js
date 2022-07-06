import React from "react";
import "./index.css";

export const Just37settingsGeneral = () => {
  const [buttonClick, setbuttonClick] = React.useState(false);

  const onButtonClick = (event) => {
    event.preventDefault();
    setbuttonClick(true);
    console.log("onButtonClick");
  };
  return (
    <div className="block-general container">
      <div className="block-general__nav row">
        <ul className="block-nav nav">
          <li className="nav-item">
            <a
              onClick={onButtonClick}
              className={`nav-link nav-link__item ${
                buttonClick ? "active" : ""
              }`}
              href="..."
              aria-current="page"
            >
              General
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link__item" href="...">
              Avatar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link__item" href="...">
              Password
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link__item" href="...">
              Publicity
            </a>
          </li>
        </ul>
      </div>
      <div className="block-general__line"></div>
      {buttonClick && (
        <div className="block-general__form">
          <form>
            <div className="block-general__area">
              <label htmlFor="FormControlTextarea" className="form-label">
                Biographical Info
              </label>
              <textarea
                className="form-control form-area"
                id="FormControlTextarea"
                rows="3"
                placeholder="Text..."
              ></textarea>
            </div>
            <div className="block-general__input">
              <div className="form-input__items">
                <label htmlFor="FormControlInput" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  id="FormControlInput"
                  placeholder="Ali TUF..."
                />
              </div>
              <div className="form-input__items">
                <label htmlFor="FormControlInput " className="form-label">
                  Nickname
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  id="FormControlInput"
                  placeholder="..."
                />
              </div>
            </div>
            <div className="block-general__input">
              <div className="form-input__items">
                <label htmlFor="FormControlInput" className="form-label">
                  Nickname
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  id="FormControlInput"
                  placeholder="..."
                />
              </div>
              <div className="form-input__items">
                <label htmlFor="FormControlInput" className="form-label">
                  Display name publicly as
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  id="FormControlInput"
                  placeholder="..."
                />
              </div>
            </div>
            <button type="submit" className="general-form__button">
              SAVE CHANGES
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default Just37settingsGeneral;

import React from "react";
import "./index.css";

export const Just37settingsGeneral = () => {
  const objInputs = {
    biographical: "",
    firstname: "",
    secondname: "",
    nickname: "",
    namepublicly: "",
  };
  const [buttonClick, setbuttonClick] = React.useState(false);
  const [data, setData] = React.useState(objInputs);

  const onButtonClick = (event) => {
    event.preventDefault();
    setbuttonClick(true);
  };

  function submit(event) {
    event.preventDefault();
    console.log(data);
    setData(objInputs);
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <div className="wrapper-general">
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
            <form onSubmit={(event) => submit(event)}>
              <div className="block-general__area">
                <label htmlFor="biographical" className="form-label">
                  Biographical Info
                </label>
                <textarea
                  onChange={(e) => handle(e)}
                  value={data.biographical}
                  className="form-control form-area"
                  id="biographical"
                  rows="3"
                  placeholder="Text..."
                  required
                  maxLength="500"
                ></textarea>
              </div>
              <div className="block-general__input">
                <div className="form-input__items">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    onChange={(e) => handle(e)}
                    value={data.firstname}
                    type="text"
                    className="form-control form-input"
                    id="firstname"
                    placeholder="Ali TUF..."
                    required
                    pattern={"(^[A-Za-z0-9]{1,15}$)(^s*|s*$)"}
                  />
                </div>
                <div className="form-input__items">
                  <label htmlFor="secondname " className="form-label">
                    Second Name
                  </label>
                  <input
                    onChange={(e) => handle(e)}
                    value={data.secondname}
                    type="text"
                    className="form-control form-input"
                    id="secondname"
                    placeholder="..."
                    required
                    pattern={"^[A-Za-z0-9]{1,15}$"}
                  />
                </div>
              </div>
              <div className="block-general__input">
                <div className="form-input__items">
                  <label htmlFor="nickname" className="form-label">
                    Nickname
                  </label>
                  <input
                    onChange={(e) => handle(e)}
                    value={data.nickname}
                    type="text"
                    className="form-control form-input"
                    id="nickname"
                    placeholder="..."
                    required
                    pattern={"^[A-Za-z0-9]{1,15}$"}
                  />
                </div>
                <div className="form-input__items">
                  <label htmlFor="namepublicly" className="form-label">
                    Display name publicly as
                  </label>
                  <input
                    onChange={(e) => handle(e)}
                    value={data.namepublicly}
                    type="text"
                    className="form-control form-input"
                    id="namepublicly"
                    placeholder="..."
                    required
                    pattern={"^[A-Za-z0-9]{1,15}$"}
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
    </div>
  );
};
export default Just37settingsGeneral;

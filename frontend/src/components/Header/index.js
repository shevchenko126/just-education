import React, { useState } from 'react';
import './header.css';


const Header = () => {

  const [isActive, setIsActive] = useState(false);
  const navSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <div onClick={navSwitch} className={`header__cover ${isActive ? 'activeBurger' : ''}`}>
        <div className="container header__container d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="header__right d-flex align-items-center">
            <div className="menu">
              <div onClick={navSwitch} className={`header__burger ${isActive ? 'activeBurger' : ''}`}>
                <span className=""></span>
              </div>
              <nav className={`nav ${isActive ? 'activeBurger' : ''}`}>
                <ul>
                  <li className="nav__item">
                    <a href="" className="nav__link">home</a>
                  </li>
                  <li className="nav__item">
                    <a href="" className="nav__link active has-child-active">courses</a>
                  </li>
                  <li className="nav__item">
                    <a href="" className="nav__link has-child">pages</a>
                  </li>
                  <li className="nav__item">
                    <a href="" className="nav__link has-child">blog</a>
                  </li>
                  <li className="nav__item">
                    <a href="" className="nav__link">shop</a>
                  </li>
                  <li className="nav__item">
                    <a href="" className="nav__link">contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__buttons d-flex align-items-center">
              <div className="header__buttons-button">
                <a href="">
                  <img src="/images/icons/search.svg" alt="search" />
                </a>
              </div>
              <div className="header__buttons-button">
                <a href="">
                  <img src="/images/icons/user.svg" alt="user" />
                </a>
              </div>
              <div className="header__buttons-button position-relative">
                <div className="header__bouttons-count">2</div>
                <a href="">
                  <img src="/images/icons/shop.svg" alt="shop" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
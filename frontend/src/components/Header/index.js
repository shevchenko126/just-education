import React from 'react';
import './index.css';
import logo from './images/logo.png';
import search from './images/search.svg';
import user from './images/user.svg';
import shop from './images/shop.svg';


const header = () => {
  return (
    <header className="header">
      <div className="container header__container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__right d-flex align-items-center">
          <nav className="nav">
            <div className="nav__item">
              <a href="" className="nav__link">home</a>
            </div>
            <div className="nav__item">
              <a href="" className="nav__link active has-child-active">courses</a>
            </div>
            <div className="nav__item">
              <a href="" className="nav__link has-child">pages</a>
            </div>
            <div className="nav__item">
              <a href="" className="nav__link has-child">blog</a>
            </div>
            <div className="nav__item">
              <a href="" className="nav__link">shop</a>
            </div>
            <div className="nav__item">
              <a href="" className="nav__link">contact</a>
            </div>
          </nav>
          <div className="header__buttons d-flex align-items-center">
            <div className="header__buttons-button">
              <a href="">
                <img src={ search } alt="search" />
              </a>
            </div>
            <div className="header__buttons-button">
              <a href="">
                <img src={ user } alt="user" />
              </a>
            </div>
            <div className="header__buttons-button position-relative">
              <div className="header__bouttons-count">2</div>
              <a href="">
                <img src={shop} alt="shop" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default header
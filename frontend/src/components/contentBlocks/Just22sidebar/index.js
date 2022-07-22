import React from 'react';
import './index.css';

const Just22sidebar = () => {
   
    return (
      <section className="container-fluid">
         <div className="video">
            <img className="sidebar-video" src="/images/Surface.png" alt="video" width="350px" height="220px"/>
            <button type="button" className="player-btn">
                <img src="/images/player_btn.png" alt="player button"/>
            </button>
         </div>
         <div className="about-price">
            <ul className="d-flex">
                 <li className="price">$89.99</li> 
                 <li className="old-price">399.99</li>
                 <li className="discount">91%off</li>
            </ul>
         </div>
         <div className="time">
            <ul className="d-flex">
                <li className="alarm-clock"><img src="/images/icons/alarm-clock.svg" alt="clock"/></li> 
                <li className="attention">2 Days Left At This Price!</li>
            </ul>
         </div>
         <div className="d-grid gap-2 col-6">
            <button className="btn btn-primary text-uppercase buy" type="button">Buy Now</button>
            <button className="btn btn-primary text-uppercase enroll" type="button">Enroll</button>
         </div>
         <div className="about">
            <ul className="d-flex">
                <li className="images"><img src="/images/icons/clock.svg" alt="clock"/></li>
                <li className="text">Duration</li>
                <li className="info">43 Weeks</li>
            </ul>
            <hr/>
            <ul className="d-flex">
                <li className="images"><img src="/images/icons/open-book.svg" alt="book"/></li>
                <li className="text">Lectures</li>
                <li className="info">32</li>
            </ul>
            <hr/>
            <ul className="d-flex">
                <li className="images"><img src="/images/icons/reader.svg" alt="book"/></li>
                <li className="text">Enrolled</li>
                <li className="info">1982 Students</li>
            </ul>
            <hr/>
            <ul className="d-flex">
                <li className="images"><img src="/images/icons/translate.svg" alt="book"/></li>
                <li className="text">Language</li>
                <li className="info">English</li>
            </ul>
            <hr/>
            <ul className="d-flex">
                <li className="images"><img src="/images/icons/equalizer.svg" alt="book"/></li>
                <li className="text">Skill Level</li>
                <li className="info">Beginner</li>
            </ul>
            <hr/>
            <ul className="d-flex">
                <li className="images"><img src="/images/icons/calendar.svg" alt="book"/></li>
                <li className="text">Deadline</li>
                <li className="info">06 April 2020</li>
            </ul>
            <hr/>
            <ul className="d-flex">
                <li className="images"><img src="/images/icons/medal.svg" alt="book"/></li>
                <li className="text">Certificate</li>
                <li className="info">Yes</li>
            </ul>
            <hr/>
         </div>
         <div className="share">
            <a href="#"><img src="/images/icons/share.svg" alt="icon"/>
            Share This Course
            </a>
         </div>
      </section>
    )
}

export default Just22sidebar;
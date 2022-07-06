import React from 'react'
import "./index.css";
import svgContact from "./img/icon_contact.svg";
import svgDate from "./img/icon_date.svg"

const H11home6block = () => {
  return (
    
    <div class="main-content container">
      <div class="card-head row mx-auto">
        <div class="col-12">
          <h2 class="text-center">Latest News</h2>
          <h3 class="text-center">Discover your perfect program in our courses.</h3>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="card-body card col-lg-4 col-md-6 col-sm-12 text-center">
          <div class="card-image">
            <img  class="card-img-top" alt="img"/>
            <div class="card-button d-inline-flex flex-direction-row align-items-center">
              <span class="button-text">Figma</span>
            </div>
          </div>
          <div class="card-info ">
            <div class="d-flex justify-content-start">
              <div class="d-inline-flex  ">
                <img src={ svgContact } class="name-img" alt="..."/>
                <p class="name-text">Jack Wilson</p>
              </div>
              <div class="d-inline-flex " >
                <img src={ svgDate } class="name-img" alt="..."/>
                <p class="name-text">06 April, 2020</p>
              </div>
            </div>
            <div class="card-text">
              <div>
                <p>The Best Places to Start Your</p>
              </div>
              <div>
                <p>Travel</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body card col-lg-4 col-md-6 col-sm-12 text-center">
          <div class="card-image">
            <img  class="card-img-top" alt="..."/>
            <div class="card-button d-inline-flex flex-direction-row align-items-center">
              <span class="button-text">Adobe XD</span>
            </div>
          </div>
          <div class="card-info ">
            <div class="d-flex justify-content-start">
              <div class="d-inline-flex  ">
                <img src={ svgContact } class="name-img" alt="..."/>
                <p class="name-text">Jack Wilson</p>
              </div>
              <div class="d-inline-flex ">
                <img src={ svgDate } class="name-img" alt="..."/>
                <p class="name-text">06 April, 2020</p>
              </div>
            </div>
            <div class="card-text">
              <div>
                <p>An Indigenous Anatolian Syllabic Script</p>
              </div>
              <div>
                <p>From 3500 Years Ago</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body card col-lg-4 col-md-6 col-sm-12 text-center">
          <div class="card-image">
            <img  class="card-img-top" alt="..."/>
            <div class="card-button d-inline-flex flex-direction-row align-items-center">
              <span class="button-text">Photoshop</span>
            </div>
          </div>
          <div class="card-info ">
            <div class="d-flex justify-content-start">
              <div class="d-inline-flex  ">
                <img src={svgContact} class="name-img" alt="..."/>
                <p class="name-text">Jack Wilson</p>
              </div>
              <div class="d-inline-flex ">
                <img src={svgDate} class="name-img" alt="..."/>
                <p class="name-text">06 April, 2020</p>
              </div>
            </div>
            <div class="card-text">
              <div>
                <p>World Heath Day in LA</p>
              </div>
              <div>
                <p>2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default H11home6block

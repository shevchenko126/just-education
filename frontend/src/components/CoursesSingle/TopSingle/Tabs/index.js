import React from 'react';
import './index.css';


const index = () => {
  return (
    <div className="tabs container">
        <div class='row'>
          <div className="col-8 col-sm-12">
              <div class="tabs__menu">
                  <ul class="d-flex">
                      <li><a href="">Overview</a></li>
                      <li><a href="">Curriculum</a></li>
                      <li class="active"><a href="">Instructor</a></li>
                      <li><a href="">Reviews</a></li>
                  </ul>
              </div>
          </div>
        </div>
    </div>
  )
}
export default index;
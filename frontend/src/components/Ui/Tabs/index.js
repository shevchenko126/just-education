import React from 'react';
import './tabs.css';


const index = () => {
  return (
    <div className="tabs container">
        <div className='row'>
          <div className="col-8 col-sm-12">
              <div className="tabs__menu">
                  <ul className="d-flex">
                      <li><a href="">Overview</a></li>
                      <li><a href="">Curriculum</a></li>
                      <li className="active"><a href="">Instructor</a></li>
                      <li><a href="">Reviews</a></li>
                  </ul>
              </div>
          </div>
        </div>
    </div>
  )
}
export default index;
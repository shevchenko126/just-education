import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const Just32_Dashboard = () => {
  return (
    <div className="conteiner dashboard__conteiner">
      <div className="row dashboard__row">
        <div className="col-6 col-sm-3 dashboard__card">
          <div className="row">
            <div className="col number" id="courses-completed-number">
              15
            </div>
            <div className="col">
              <h2>Courses Completed</h2>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-3 dashboard__card">
          <div className="row">
            <div className="col number" id="courses-in-progress-number">
              22
            </div>
            <div className="col">
              <h2>Courses In Progress</h2>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-3 dashboard__card">
          <div className="row">
            <div className="col number" id="quizzes-completed-number">
              921
            </div>
            <div className="col">
              <h2>Quizzes Completed</h2>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-3 dashboard__card">
          <div className="row">
            <div className="col number" id="quizzes-in-progress-number">
              148
            </div>
            <div className="col">
              <h2>Quizzes In Progress</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Just32_Dashboard;

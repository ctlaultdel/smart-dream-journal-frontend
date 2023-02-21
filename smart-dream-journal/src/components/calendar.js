import React from "react";
import Calendar from "react-calendar";
// import "./calendar.css";

function DisplayCalendar() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="app">
            <h1 className="col-lg-5">Calendar</h1>
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayCalendar;

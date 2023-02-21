import React from "react";
import BarGraph from "./barGraph";

function Analyses() {
  return (
    <div className="about">
      <div className="container">
        <div className="col-lg-7"></div>
        <div className="col-lg-5">
          <br></br>
          <h1 className="font-weight-light">Dream Entry Analyses</h1>
        </div>
        <br></br>
        <BarGraph />
      </div>
    </div>
  );
}

export default Analyses;

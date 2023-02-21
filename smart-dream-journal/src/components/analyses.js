import React from "react";
import BarGraph from "./barGraph";

function Analyses({ userEntries }) {
  return (
    <div className="about">
      <div className="container">
        <div className="col-lg-7"></div>
        <div className="col-lg-5">
          <h1 className="font-weight-light">Dream Entry Analyses</h1>
        </div>
        <BarGraph userEntries={userEntries} />
      </div>
    </div>
  );
}

export default Analyses;

import React from "react";
import BarGraph from "./barGraph";
import "./analyses.css";

function Analyses() {
  return (
    <section>
      <header>
        <h1 className="text-center mt-5">Dream Entry Analyses</h1>
      </header>
      <section className="dream-plots-wrapper">
        <BarGraph />
      </section>
    </section>
  );
}

export default Analyses;

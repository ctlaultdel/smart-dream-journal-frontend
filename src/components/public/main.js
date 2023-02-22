import React from "react";
import fairyDreamImage from "../../imgs/fairyTaleDream.webp";
import "./main.css";

function Main() {
  return (
    <section class="container">
      <section class="row align-items-center my-5">
        <img src={fairyDreamImage} alt="Dream Clouds" className="main-img" />
        <section className="col-lg-5">
          <h1 className="font-weight-light">Smart Dream Journal</h1>
          <p>Let me tell you about smart dream journal</p>
        </section>
      </section>
    </section>
  );
}

export default Main;

import React from "react";
import { useAuth } from "../../contexts/authContext";
import "./home.css";
import fairyDreamImage from "../../imgs/fairyTaleDream.webp";
import "./home.css";

function Home() {
  const { currentUserName } = useAuth();

  return (
    <section class="container">
      <section class="row align-items-center my-5">
        <img src={fairyDreamImage} alt="Dream Clouds" className="home-img" />
        <section className="col-lg-5">
          <h1 className="font-weight-light">{`Welcome Back ${currentUserName}!`}</h1>
          <p>Find the meaning of your dreams</p>
        </section>
      </section>
    </section>
  );
}

export default Home;

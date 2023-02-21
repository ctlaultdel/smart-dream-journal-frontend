import React from "react";
import { useAuth } from "../contexts/authContext";

function Home({ userEntries }) {
  const { currentUserName } = useAuth();

  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">{`Hello ${currentUserName}`}</h1>
            <p>Welcome to your home profile page</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

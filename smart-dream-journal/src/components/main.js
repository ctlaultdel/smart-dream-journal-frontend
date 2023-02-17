import React from "react";
import classnames from "classnames";

function Main() {
  return (
    <div classNames={classnames("home", "container")}>
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7"></div>
          <div className="col-lg-5">
            <h1>Welcome to Smart Dream Journal!</h1>
            <h2 className="font-weight-light">Please log in</h2>
            <form>
              <label>
                <p>Username</p>
                <input type="text" />
              </label>
              <label>
                <p>Password</p>
                <input type="password" />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

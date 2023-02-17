import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Smart Dream Journal
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile/analyses">
                  Analyses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile/calendar">
                  Calendar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile/journal">
                  Journal
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

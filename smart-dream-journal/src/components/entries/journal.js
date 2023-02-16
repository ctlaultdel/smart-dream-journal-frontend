import React from "react";
import { Outlet } from "react-router-dom";

function Journal() {
  return (
    <div className="home">
      <div className="container">
        <h1 className="text-center mt-5">Journal Entries</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Journal;

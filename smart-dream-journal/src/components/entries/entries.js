import React from "react";
import { Link } from "react-router-dom";

function Entries({ userEntries }) {
  const entriesList = userEntries.map((entry) => {
    return (
      <section className="col-lg-5" key={entry.id}>
        <Link to={"/profile/journal/" + entry.id}>
          <h1 className="font-weight-light">
            {entry.title} {entry.mood}
          </h1>
          <p>{entry.date}</p>
        </Link>
      </section>
    );
  });

  return (
    <div className="home">
      <div className="container">{entriesList}</div>
    </div>
  );
}

export default Entries;

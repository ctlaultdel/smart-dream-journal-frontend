import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

function Entries() {
  const { userEntries, accessToken } = useAuth();

  if (accessToken) {
    const entriesList = userEntries.map((entry) => {
      return (
        <section className="col-lg-5" key={entry.id}>
          <Link state={entry} to={"/profile/journal/" + entry.id}>
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
  } else {
    return <br></br>;
  }
}

export default Entries;

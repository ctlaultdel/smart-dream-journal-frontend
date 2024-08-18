import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";
import "./entries.css";

function Entries() {
  // dirty patch for issue with reloading entries after posting a new post
  const { accessToken, userEntries } = useAuth();

  if (accessToken) {
    const entriesList = userEntries?.map((entry) => {
      return (
        <section key={entry.id}>
          <li>
            <Link state={entry} to={"/profile/journal/" + entry.id}>
              <h1 className="font-weight-light">
                {entry.title} {entry.mood}
              </h1>
              <p>{entry.date}</p>
            </Link>
          </li>
        </section>
      );
    });
    return <ul className="journal-entries-wrapper">{entriesList}</ul>;
  } else {
    return <br></br>;
  }
}

export default Entries;

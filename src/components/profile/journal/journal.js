import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";
import NewEntryPopup from "./newEntryForm";
import "./journal.css";

function Journal() {
  const navigate = useNavigate();
  // contexts
  const { tokenHeader, setUserEntries, userEntries } = useAuth();

  // journal form entry states
  const [date, setDate] = useState(Date.now());
  const [title, setTitle] = useState("");
  const [keywords, setKeyWords] = useState("");
  const [description, setDescription] = useState("");
  const [mood, setMood] = useState("");
  const [trigger, setTrigger] = useState(false);

  // Function for API post request for new entry
  async function postNewEntry(entryStates) {
    return await fetch(
      `https://smart-dream-journal-backend-63ee0b4cbbaa.herokuapp.com/profile/journal/`,
      {
        method: "POST",
        headers: {
          ...tokenHeader,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entryStates),
      }
    )
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log(error));
  }

  // event handler for new journal entry form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = await postNewEntry({
      title,
      keywords,
      description,
      mood,
      date,
    });
    // update the local storage USERENTRIES to add new journal entry
    const entries = [...userEntries, ...newEntry];
    localStorage.setItem("USERENTRIES", JSON.stringify(entries));
    setUserEntries(JSON.parse(localStorage.getItem("USERENTRIES")));
    setTrigger(false);
    navigate("/profile");
  };

  const cancelPost = () => {
    setTrigger(false);
  };

  return (
    <section>
      <h1 className="text-center mt-5">Journal Entries</h1>
      <section>
        <button className="post-button" onClick={(e) => setTrigger(true)}>
          Post New Journal Entry
        </button>
      </section>
      <NewEntryPopup
        trigger={trigger}
        handleSubmit={handleSubmit}
        cancelPost={cancelPost}
        setDate={setDate}
        setTitle={setTitle}
        setKeyWords={setKeyWords}
        setDescription={setDescription}
        setMood={setMood}
      />
      <Outlet />
    </section>
  );
}

export default Journal;

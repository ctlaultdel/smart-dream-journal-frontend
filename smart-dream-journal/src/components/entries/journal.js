import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import NewEntryPopup from "./newEntryForm";

function Journal() {
  // contexts
  const { tokenHeader } = useAuth();
  // journal form entry states
  const [date, setDate] = useState(Date.now());
  const [title, setTitle] = useState("");
  const [keywords, setKeyWords] = useState("");
  const [description, setDescription] = useState("");
  const [mood, setMood] = useState("");
  const [trigger, setTrigger] = useState(false);

  // Function for API post request for new entry
  async function postNewEntry(entryStates) {
    return await fetch(`${process.env.REACT_APP_BACKEND_URL}/profile/journal`, {
      method: "POST",
      headers: {
        ...tokenHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryStates),
    })
      .then((response) => {
        return response.status;
      })
      .catch((error) => console.log(error));
  }

  // event handler for new journal entry form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postNewEntry({
      title,
      keywords,
      description,
      mood,
      date,
    });
    console.log(response);
    if (response === 201) {
      console.log("success");
      setTrigger(false);
    }
  };

  return (
    <div className="home">
      <div className="container">
        <h1 className="text-center mt-5">Journal Entries</h1>
        <br></br>
        <button onClick={(e) => setTrigger(true)}>
          Post New Journal Entry
        </button>
        <NewEntryPopup
          trigger={trigger}
          handleSubmit={handleSubmit}
          setDate={setDate}
          setTitle={setTitle}
          setKeyWords={setKeyWords}
          setDescription={setDescription}
          setMood={setMood}
        />
        <Outlet />
      </div>
    </div>
  );
}

export default Journal;

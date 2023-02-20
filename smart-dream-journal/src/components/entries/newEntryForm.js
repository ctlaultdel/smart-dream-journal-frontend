import React, { useState } from "react";
// import EmojiPicker from "emoji-picker-react";
import InputEmoji from "react-input-emoji";

function NewEntryPopup(props) {
  function handleOnEnter(text) {
    console.log("enter", text);
  }

  if (props.trigger) {
    return (
      <form onSubmit={props.handleSubmit}>
        <section>
          <label htmlFor="date" />
          <input
            type="date"
            placeholder="YYYY-MM-DD"
            onChange={(e) => props.setDate(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="title" />
          <input
            type="text"
            placeholder="title"
            onChange={(e) => props.setTitle(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="keywords" />
          <input
            type="text"
            placeholder="keywords"
            onChange={(e) => props.setKeyWords(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="description" />
          <input
            type="text"
            placeholder="description"
            onChange={(e) => props.setDescription(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="testMood">Dream Mood</label>
          <InputEmoji
            value={props.mood}
            onChange={props.setMood}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Dream Mood Emoji"
          />
        </section>
        <section>
          <button type="submit">Submit</button>
        </section>
      </form>
    );
  } else {
    return <br></br>;
  }
}

export default NewEntryPopup;

import React from "react";
import InputEmoji from "react-input-emoji";
import "./newEntryForm.css";

function NewEntryPopup(props) {
  if (props.trigger) {
    return (
      <form onSubmit={props.handleSubmit} className="new-post-form-wrapper">
        <section>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            placeholder="YYYY-MM-DD"
            onChange={(e) => props.setDate(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="title">Title: </label>
          <input
            className="title-box"
            type="text"
            placeholder="title"
            onChange={(e) => props.setTitle(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="keywords">Keywords: </label>
          <input
            className="keyword-box"
            type="text"
            placeholder="e.g spider, ocean, detective"
            onChange={(e) => props.setKeyWords(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="description">Description: </label>
          <textarea
            className="description-box"
            placeholder="Describe your dream ..."
            onChange={(e) => props.setDescription(e.target.value)}
          ></textarea>
        </section>
        <section>
          <InputEmoji
            value={props.mood}
            onChange={props.setMood}
            cleanOnEnter
            placeholder="Select a dream mood emoji"
          />
        </section>
        <section>
          <button type="submit" className="buttons">
            Submit
          </button>
          <button type="submit" onClick={props.cancelPost} className="buttons">
            Cancel
          </button>
        </section>
      </form>
    );
  } else {
    return <br></br>;
  }
}

export default NewEntryPopup;

import React from "react";

function NewEntryPopup(props) {
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
          <label htmlFor="mood" />
          <input
            type="text"
            placeholder="mood"
            onChange={(e) => props.setMood(e.target.value)}
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
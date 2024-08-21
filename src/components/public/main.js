import React from "react";
import fairyDreamImage from "../../imgs/fairyTaleDream.webp";
import loginPageImage from "../../imgs/loginPage.png";
import journalEntriesImage from "../../imgs/journalentries.png";
import newJournalEntryImage from "../../imgs/newJournalEntry.png";
import journalAnalysesImage from "../../imgs/journalanalyses.png";
import "./main.css";

function Main() {
  return (
    <section className="container">
      <section className="row align-items-center my-5 main-excerpt-container">
        <img src={fairyDreamImage} alt="Dream Clouds" className="main-img" />
        <div className="col-lg-5">
          <h1 className="font-weight-light">Welcome to Smart Dream Journal!</h1>
          <p>Register a new account to start logging your dreams today</p>
        </div>
      </section>
      <h1 className="font-weight-light tutorial-header-container">Tutorial</h1>
      <section className="tutorial-container">
        <div className="row">
          <img
            src={loginPageImage}
            alt="Login Page"
            className="tutorial-polaroid"
          />
          <div className="tutorial-textbox">
            <h1>Logging into your account</h1>
            <hr />
            <p>
              Click the "Login" tab to login to your account or click "Register
              New Account" to create a new acccount. You will need an email to
              register, and will need to choose a username and password.
            </p>
          </div>
        </div>
        <div className="row">
          <img
            src={journalEntriesImage}
            alt="Login Page"
            className="tutorial-polaroid"
          />
          <div className="tutorial-textbox">
            <h1>Journal Entries</h1>
            <hr />
            <p>
              Visualize all of your journal entries by title and dream theme
              emoj. 🐬
            </p>
          </div>
        </div>
        <div className="row">
          <img
            src={newJournalEntryImage}
            alt="Login Page"
            className="tutorial-polaroid"
          />
          <div className="tutorial-textbox">
            <h1>Posting a new Journal Entry</h1>
            <hr />
            <p>
              Click "Post New Journal Entry" to log each dream. Here, you can
              select the date your dream occured, enter a title, keywords, and a
              description to describe the dream. Then you can select a dream
              emoji to summarize the main theme of your dream.
            </p>
          </div>
        </div>
        <div className="row">
          <img
            src={journalAnalysesImage}
            alt="Login Page"
            className="tutorial-polaroid"
          />
          <div className="tutorial-textbox">
            <h1>Analyze your dreams</h1>
            <hr />
            <p>
              Click on analyses to see Smart Dream Journal's analysis your
              dreams. You can visualize how many times you dreamt a specific
              dream emoji. Hover over each bar on the bar chart to see each
              count.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Main;

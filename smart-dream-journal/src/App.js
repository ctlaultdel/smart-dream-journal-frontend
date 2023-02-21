// import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/login";
import Home from "./components/home";
import Analyses from "./components/analyses";
import DisplayCalendar from "./components/calendar";
import Journal from "./components/entries/journal";
import Entries from "./components/entries/entries";
import Entry from "./components/entries/entry";
import Register from "./components/register";
import Main from "./components/main";
import Logout from "./components/logout";
import { useAuth } from "./contexts/authContext";

function App() {
  // contexts
  const { tokenHeader, userEntries, setUserEntries } = useAuth();

  // states
  // const [userEntries, setUserEntries] = useState([]);

  // fetch user Entries data from API
  useEffect(() => {
    console.log("use effect for API fetch user data is running");
    // check for access token (context that checks token saved in local storage)
    if (tokenHeader) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/profile/journal/entries`, {
        method: "POST",
        headers: {
          ...tokenHeader,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUserEntries(data);
          localStorage.setItem("USERENTRIES", JSON.stringify(data));
        });
    }
  }, [tokenHeader, setUserEntries]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Home />} />
      <Route path="/profile/analyses" element={<Analyses />} />
      <Route path="/profile/calendar" element={<DisplayCalendar />} />
      <Route path="/profile/journal" element={<Journal />}>
        <Route path="" element={<Entries />} />
        <Route path=":entryID" element={<Entry />} />
      </Route>
      <Route path="/logout" element={<Logout />}></Route>
    </Routes>
  );
}

export default App;

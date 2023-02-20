import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/login";
import Home from "./components/home";
import Analyses from "./components/analyses";
import Calendar from "./components/calendar";
import Journal from "./components/entries/journal";
import Entries from "./components/entries/entries";
import Entry from "./components/entries/entry";
import Register from "./components/register";
import Main from "./components/main";
import Logout from "./components/logout";
import { useAuth } from "./contexts/authContext";

/// Entries still not working upon refresh but close - login functionality seems better

function App() {
  // contexts
  const { tokenHeader } = useAuth();
  // App states
  const [userEntries, setUserEntries] = useState([]);

  // function to fetch user entry data when token header is updated - user logs in/out
  useEffect(() => {
    // check if access token --> fetch user entry data
    if (window.localStorage.accessToken) {
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
        });
    } else {
      // set user entry data to []
      setUserEntries([]);
    }
  }, [tokenHeader]);

  useEffect(() => {
    // allow user to refresh without losing entry data
    window.localStorage.setItem("USER_ENTRIES", JSON.stringify(userEntries));
  }, [userEntries]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Home />} />
      <Route path="/profile/analyses" element={<Analyses />} />
      <Route path="/profile/calendar" element={<Calendar />} />
      <Route path="/profile/journal" element={<Journal />}>
        <Route path="" element={<Entries userEntries={userEntries} />} />
        <Route path=":entryID" element={<Entry userEntries={userEntries} />} />
      </Route>
      <Route path="/logout" element={<Logout />}></Route>
    </Routes>
  );
}

export default App;

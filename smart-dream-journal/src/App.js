import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Analyses from "./components/analyses";
import Calendar from "./components/calendar";
import Journal from "./components/entries/journal";
import Entries from "./components/entries/entries";
import Entry from "./components/entries/entry";

// get all User Entries
const getUserEntries = async () => {
  return axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/journal`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error.response.data.message);
    });
};

function App() {
  // app states
  const [userEntries, setUserEntries] = useState([]);

  useEffect(() => {
    getUserEntries().then((entries) => {
      setUserEntries(entries);
    });
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/analyses" element={<Analyses />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/journal" element={<Journal />}>
        <Route path="" element={<Entries userEntries={userEntries} />} />
        <Route path=":entryID" element={<Entry userEntries={userEntries} />} />
      </Route>
    </Routes>
  );
}

export default App;

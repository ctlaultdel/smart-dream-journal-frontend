import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/login";
import Home from "./components/home";
import Analyses from "./components/analyses";
import Calendar from "./components/calendar";
import Journal from "./components/entries/journal";
import Entries from "./components/entries/entries";
import Entry from "./components/entries/entry";
import Register from "./components/register";
import { AuthProvider } from "./contexts/authContext";
import { useAuth } from "./contexts/authContext";

// Helper functions for making API calls
const getUserEntries = async () => {
  return axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/profile/journal`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error.response.data.message);
    });
};

// async function setSessionToken(credentials) {
//   return fetch(`${process.env.REACT_APP_BACKEND_URL}/token`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   })
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       }
//     })
//     .then((data) => {
//       sessionStorage.setItem("token", data.access_token);
//     })
//     .catch((error) => console.log(error));
// }

function App() {
  // App states
  // states
  const [userEntries, setUserEntries] = useState([]);
  // const { token, setToken } = useAuth(sessionStorage.getItem("token"));
  // const navigate = useNavigate();

  // Functions for updating states
  useEffect(() => {
    getUserEntries().then((entries) => {
      setUserEntries(entries);
    });
  }, []);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/profile/analyses" element={<Analyses />} />
        <Route path="/profile/calendar" element={<Calendar />} />
        <Route path="/profile/journal" element={<Journal />}>
          <Route path="" element={<Entries userEntries={userEntries} />} />
          <Route
            path=":entryID"
            element={<Entry userEntries={userEntries} />}
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

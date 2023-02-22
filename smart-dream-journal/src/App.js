import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Login from "./components/public/login";
import Home from "./components/profile/home";
import Analyses from "./components/profile/analyses/analyses";
import Journal from "./components/profile/journal/journal";
import Entries from "./components/profile/journal/entries";
import Entry from "./components/profile/journal/entry";
import Register from "./components/public/register";
import Main from "./components/public/main";
import Logout from "./components/profile/logout";
import { useAuth } from "./contexts/authContext";

function App() {
  // contexts
  const { tokenHeader, setUserEntries } = useAuth();

  // fetch user Entries data from API
  useEffect(() => {
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
      <Route path="/profile/journal" element={<Journal />}>
        <Route path="" element={<Entries />} />
        <Route path=":entryID" element={<Entry />} />
      </Route>
      <Route path="/logout" element={<Logout />}></Route>
    </Routes>
  );
}

export default App;

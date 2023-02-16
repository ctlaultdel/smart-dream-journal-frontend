import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Blog from "./components/blog/blog";
import Posts from "./components/blog/posts";

// get all User Entries
const getUserEntries = () => {
  return axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/entries`)
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
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts userEntries={userEntries} />} />
      </Route>
    </Routes>
  );
}

export default App;

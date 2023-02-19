import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import App from "./App";
import { AuthProvider } from "./contexts/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <Router>
      <Navigation />
      <App />
      <Footer />
    </Router>
  </AuthProvider>
);

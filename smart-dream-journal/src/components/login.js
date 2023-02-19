import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

async function setSessionToken(credentials) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      return data.access_token;
    })
    .catch((error) => console.log(error));
}

function Login() {
  // states
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // contexts
  const { token, setToken } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = await setSessionToken({
      username,
      password,
    });
    sessionStorage.setItem("accessToken", accessToken);
    setToken(sessionStorage.getItem("accessToken"));
    navigate("/profile");
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7"></div>
          <div className="col-lg-5">
            <h1>Welcome to Smart Dream Journal!</h1>
            <h2 className="font-weight-light">Please log in</h2>
            <form onSubmit={handleSubmit}>
              <section>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </section>
              <section>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

async function getAccessToken(credentials) {
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
  const navigate = useNavigate();
  // states
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // contexts
  const { currentUser, setCurrentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // fetch accessToken
    const accessToken = await getAccessToken({
      username,
      password,
    });
    // set the access token in session storage
    localStorage.setItem("accessToken", accessToken);
    // update the current user context which triggers update for token header context
    setCurrentUser(username);
    console.log(currentUser);
    if (localStorage.accessToken) {
      navigate("/profile");
    }
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

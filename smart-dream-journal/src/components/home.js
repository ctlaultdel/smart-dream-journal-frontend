import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";

// async function getCurrentUser(opts) {
//   return fetch(`${process.env.REACT_APP_BACKEND_URL}/profile`, opts)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data.username);
//       setUserName(data.username);
//     })
//     .catch((error) => console.log(error));
// }

function Home() {
  const [username, setUserName] = useState();
  const { token, setToken } = useAuth();
  const opts = {
    headers: { Authorization: "Bearer" + token },
  };

  async function getCurrentUser(opts) {
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/profile`, opts)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.username);
        setUserName(data.username);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">{`Hello ${username}`}</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

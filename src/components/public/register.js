import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// Function for API post request for user registration
async function registerUser(credentials) {
  return fetch(`https://smart-dream-journal.herokuapp.com/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((response) => response.status);
}

function Register() {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser({
      username,
      email,
      password,
    });
    if (response === 201) {
      navigate("/login");
    }
  };

  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7"></div>
          <div className="col-lg-5">
            <h1>New Account Registration Form</h1>
            <form onSubmit={handleSubmit}>
              <section>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </section>
              <section>
                <label htmlFor="email">Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
              </section>
              <section>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </section>
              <section>
                <button type="submit">Create New Account</button>
              </section>
            </form>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;

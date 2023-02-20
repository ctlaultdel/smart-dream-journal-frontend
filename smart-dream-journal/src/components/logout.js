import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

function Logout() {
  // contexts
  const { accessToken, setAccessToken, setTokenHeader, setCurrentUserName } =
    useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // set acess token, token hear, and username to null
    setAccessToken(null);
    setTokenHeader(null);
    setCurrentUserName(null);
    if (accessToken) {
      navigate("/login");
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7"></div>
          <div className="col-lg-5">
            <h1>Are you sure you want to log out?</h1>
            <section>
              <button onClick={handleSubmit} type="submit">
                Logout
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;

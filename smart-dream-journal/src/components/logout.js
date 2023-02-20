import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";

function Logout() {
  // contexts
  const { setCurrentUserName } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("USER_NAME");
    // setCurrentUserName(null);
    if (!window.localStorage.accessToken) {
      navigate("/login");
    }
  };

  useEffect(() => {
    const name = window.localStorage.getItem("USER_NAME");
    setCurrentUserName(name);
  }, [setCurrentUserName]);

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

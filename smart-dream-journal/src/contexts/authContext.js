import { createContext, useContext, useState, useEffect } from "react";

// THINGS TO THINK ABOUT
// whatever needs to not change on refresh --> add to window.localStorage
/////// username, userdata, accesstoken
// whatever we want available accross all components --> add context
////// headerToken, username,  (needs to be updated whenever username changes (login/logout))

export const AuthContext = createContext({
  tokenHeader: null,
  currentUserName: null,
  setTokenHeader: () => {},
  setCurrentUserName: () => {},
});

export const AuthProvider = ({ children }) => {
  const [tokenHeader, setTokenHeader] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(null);
  const value = {
    tokenHeader,
    setTokenHeader,
    currentUserName,
    setCurrentUserName,
  };

  // persist context on refresh with useEffect
  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    if (accessToken) {
      setTokenHeader({
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      });
    }
    setCurrentUserName(window.localStorage.getItem("USER_NAME"));
    // const data = window.localStorage.getItem("USER_ENTRIES");
    // setUserEntries(data);
  }, [currentUserName]);
  // persist tokenheader context on refresh
  // useEffect(() => {
  //   const  = window.localStorage.accessToken;
  //   // check for access token in session storage
  //   if (localToken) {
  //     // set token header for protected routes access
  //     setTokenHeader({
  //       Authorization: `Bearer ${localToken}`,
  //     });
  //   } else {
  //     // set token header as null
  //     setTokenHeader(null);
  //   }
  // }, [currentUserName]);

  // persist currentUserName context on refresh
  // useEffect(() => {
  //   // allow user to refresh without losing entry data
  //   window.localStorage.setItem("USER_NAME", JSON.stringify(currentUserName));
  // }, [currentUserName]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

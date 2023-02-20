import { createContext, useContext, useState, useEffect } from "react";

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

  // persist tokenheader context on refresh
  useEffect(() => {
    const localToken = window.localStorage.accessToken;
    // check for access token in session storage
    if (localToken) {
      // set token header for protected routes access
      setTokenHeader({
        Authorization: `Bearer ${localToken}`,
      });
    } else {
      // set token header as null
      setTokenHeader(null);
    }
  }, [currentUserName]);

  // persist currentUserName context on refresh
  useEffect(() => {
    // allow user to refresh without losing entry data
    window.localStorage.setItem("USER_NAME", JSON.stringify(currentUserName));
  }, [currentUserName]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

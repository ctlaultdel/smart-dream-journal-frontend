import { createContext, useContext, useState, useEffect } from "react";

// app contexts
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [tokenHeader, setTokenHeader] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(null);
  const [userEntries, setUserEntries] = useState(
    JSON.parse(localStorage.getItem("USERENTRIES"))
  );

  // renders when browser refreshes and when currentUserEntries is modified
  useEffect(() => {
    setAccessToken(localStorage.getItem("ACCESSTOKEN"));
    setTokenHeader(JSON.parse(localStorage.getItem("TOKENHEADER")));
    setCurrentUserName(localStorage.getItem("USERNAME"));
    setUserEntries(JSON.parse(localStorage.getItem("USERENTRIES")));
  }, []);

  const value = {
    accessToken,
    setAccessToken,
    tokenHeader,
    setTokenHeader,
    currentUserName,
    setCurrentUserName,
    userEntries,
    setUserEntries,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState, useEffect } from "react";

// app contexts
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [tokenHeader, setTokenHeader] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(null);

  // renders when browser refreshes and when currentUserEntries is modified
  useEffect(() => {
    setAccessToken(localStorage.getItem("ACCESSTOKEN"));
    setTokenHeader(JSON.parse(localStorage.getItem("TOKENHEADER")));
    setCurrentUserName(localStorage.getItem("USERNAME"));
  }, []);

  const value = {
    accessToken,
    setAccessToken,
    tokenHeader,
    setTokenHeader,
    currentUserName,
    setCurrentUserName,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

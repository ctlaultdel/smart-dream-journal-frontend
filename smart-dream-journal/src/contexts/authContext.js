import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  tokenHeader: null,
  currentUser: null,
  setTokenHeader: () => {},
  setCurrentUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [tokenHeader, setTokenHeader] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    tokenHeader,
    setTokenHeader,
    currentUser,
    setCurrentUser,
  };

  // persist context on refresh with useEffect triggered whenever current User changes
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
  }, [currentUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  token: null,
  setToken: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const value = {
    token,
    setToken,
  };

  // persist context on refresh with useEffect
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState, useEffect } from "react";

// app contexts
export const AuthContext = createContext({
  // tokenHeader: null,
  // currentUserName: null,
  // currentUserEntries: [],
  // setTokenHeader: () => {},
  // setCurrentUserName: () => {},
  // setCurrentUserEntries: () => {},
});

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [tokenHeader, setTokenHeader] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(null);
  const [currentUserEntries, setCurrentUserEntries] = useState(null);

  // renders when browser refreshes and when currentUserEntries is modified
  useEffect(() => {
    localStorage.setItem(
      "USER_ENTRIES",
      JSON.stringify({ currentUserEntries })
    );
    localStorage.getItem("ACCESSTOKEN", JSON.stringify({ accessToken }));
    localStorage.getItem("TOKENHEADER", JSON.stringify({ tokenHeader }));
    localStorage.getItem("USERNAME", JSON.stringify({ currentUserName }));
  });

  // function to add new user entry to currentUserEntries context
  // const addEntry = (entry) =>
  //   setCurrentUserEntries((prev) => ({ ...prev, entry }));

  // // function to delete new user entry from currentUserEntries context
  // const deleteEntry = (entryID) =>
  //   setCurrentUserEntries((prev) => ({
  //     ...prev.filter((e) => e.id !== entryID),
  //   }));

  const value = {
    accessToken,
    setAccessToken,
    tokenHeader,
    setTokenHeader,
    currentUserName,
    setCurrentUserName,
    currentUserEntries,
    setCurrentUserEntries,
    // addEntry,
    // deleteEntry,
  };

  // persist tokenheader context on refresh
  // useEffect(() => {
  //   const localToken = window.localStorage.accessToken;
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

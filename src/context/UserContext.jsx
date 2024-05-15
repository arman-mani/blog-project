import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  const handleLogin = (username) => {
    setUsername(username);
  };

  const handleLogout = () => {
    setUsername("");
  };

  return (
    <UserContext.Provider value={{ username, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

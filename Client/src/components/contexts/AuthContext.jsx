/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  const login = (token) => {
    Cookies.set("authToken", token);
    setAuth(true);
  };

  const logout = () => {
    Cookies.remove("authToken");
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoutes = () => {
  const { userLoggedIn } = useContext(AuthContext);

  return userLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

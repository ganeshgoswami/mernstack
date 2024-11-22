import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ admin, children }) => {
  return admin === "admin@gmail.com" ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

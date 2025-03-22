import React from "react";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ admin, children }) => {

  if (!admin) {
    return <Navigate to="/admin" />;
  }
  return children;
};

export default ProtectedRoute;

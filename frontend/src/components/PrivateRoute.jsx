import React from "react";
import { Navigate } from "react-router-dom";

/**
 * PrivateRoute component
 * - user: the current logged-in user object ({ email, role })
 * - role: the role required to access this route ("admin" or "customer")
 * - children: the component(s) to render if access is allowed
 */
function PrivateRoute({ user, role, children }) {
  if (!user) {
    // User not logged in
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    // User role doesn't match required role
    return <Navigate to="/login" replace />;
  }
  // User is authorized
  return children;
}

export default PrivateRoute;

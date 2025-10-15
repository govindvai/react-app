import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

 const ProtectedRoute = () => {
    const isAuthenticated = true;
//   return isAuthenticated ? children : <Navigate to="/login" />
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute

import React from 'react';
import { Navigate } from 'react-router-dom';
import { isTokenValid } from '../../services/authService';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('token');

  if (!token || !isTokenValid()) {
    return <Navigate to="/login" />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;

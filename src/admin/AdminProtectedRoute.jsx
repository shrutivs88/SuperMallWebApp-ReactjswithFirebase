import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

export default function AdminProtectedRoute({ children }) {
  const user = auth.currentUser;
  if (!user) return <Navigate to="/admin/login" replace />;
  return children;
}


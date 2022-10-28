import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const token = useSelector(state => state.auth.token);

  return <div>{token ? <Navigate to={'/'} /> : <Outlet />}</div>;
};

export default PublicRoute;

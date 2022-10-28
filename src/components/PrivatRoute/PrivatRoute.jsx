import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivatRoute = () => {
  const token = useSelector(state => state.auth.token);

  return <div>{!token ? <Navigate to={'/SignIn'} /> : <Outlet />}</div>;
};

export default PrivatRoute;

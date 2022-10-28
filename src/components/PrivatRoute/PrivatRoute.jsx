import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivatRoute = () => {
  const token = useSelector(state => state.auth.token);

  return <div>{token ? <Outlet /> : <Navigate to={'/login'} />}</div>;
};

export default PrivatRoute;

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors.auth';

const PublicRoute = () => {
  const isToken = useSelector(selectToken);

  return <div>{isToken ? <Navigate to={'/'} /> : <Outlet />}</div>;
};

export default PublicRoute;

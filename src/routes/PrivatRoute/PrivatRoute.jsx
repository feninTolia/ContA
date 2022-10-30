import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors.auth';

const PrivatRoute = () => {
  const isToken = useSelector(selectToken);

  return <div>{isToken ? <Outlet /> : <Navigate to={'/login'} />}</div>;
};

export default PrivatRoute;

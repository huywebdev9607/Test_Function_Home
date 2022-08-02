
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// import LoginPage from 'src/features/auth/Login';

const LoginPage = React.lazy(() => import('src/features/auth/Login'));



export default function PublicRoutes() {
  const element = useRoutes([
    {
      path: '/auth-login',
      element: <LoginPage />,
    },
    // {
    //   path: '/auth-register',
    //   element: <RegisterPage />,
    // },
    {
      path: '*',
      element: <Navigate to="/auth-login" />,
    },
  ]);

  return element;
}
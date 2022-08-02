import React, { useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import  Loading  from 'src/components/Loading';
import { SocketContext } from 'src/context/SocketContext';
// import HomePage from 'src/features/home';
const HomePage = React.lazy(() => import('src/features/home'));




export default function ProtectedRoutes() {
    const {socketState:{isConnected,loading}} = useContext(SocketContext)
    const element = useRoutes([
        {
            path: 'home',
            element: <HomePage />,
        },
        {
            path: '*',
            element: <Navigate to="home" />,
        },
    ]);

    return   isConnected ? element: <Loading loading={loading}/> ;
}
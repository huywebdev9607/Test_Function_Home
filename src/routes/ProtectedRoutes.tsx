import React, { useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from 'src/components/Layout/DashboardLayout';
import  Loading  from 'src/components/Loading';
import { SocketContext } from 'src/context/SocketContext';

const HomePage = React.lazy(() => import('src/features/home'));
const DevicesMananger = React.lazy(() => import('src/features/devices'));
const ResultsManager = React.lazy(() => import('src/features/results'));






export default function ProtectedRoutes() {
    const {socketState:{isConnected,loading}} = useContext(SocketContext)
    const element = useRoutes([
        {
            path: 'home',
            element: <HomePage />,
        },
        {
            path: 'devices',
            element: <DevicesMananger />,
        },
        {
            path: 'results',
            element: <ResultsManager />,
        },
        {
            path: '*',
            element: <Navigate to="home" />,
        },
    ]);

    return   isConnected ? element: <Loading loading={loading}/> ;
}
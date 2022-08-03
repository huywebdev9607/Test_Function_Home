import { useContext } from 'react';
import { useAppSelector } from 'src/app/hooks';
import DashboardLayout from 'src/components/Layout/DashboardLayout';
import Loading from 'src/components/Loading';
import { AuthContext } from 'src/context/AuthContext';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

export default function AppRoutes() {

  const {isAuthenticated }=  useAppSelector(state=>state.authReducer);

  return isAuthenticated ? <DashboardLayout><ProtectedRoutes /></DashboardLayout> : <PublicRoutes />;

}
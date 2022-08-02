import { useContext } from 'react';
import { useAppSelector } from 'src/app/hooks';
import Loading from 'src/components/Loading';
import { AuthContext } from 'src/context/AuthContext';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

export default function AppRoutes() {

  const {isAuthenticated }=  useAppSelector(state=>state.authReducer);

  return isAuthenticated ? <ProtectedRoutes /> : <PublicRoutes />;

}
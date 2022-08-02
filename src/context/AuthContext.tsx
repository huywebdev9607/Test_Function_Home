import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Loading from "src/components/Loading";
import { showToast } from "src/components/Message";
import { ERROR_AUTHEN_INVALID } from "src/constants";
import jwt_decode from 'jwt-decode'
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { getUserInfo, setAuthLoading,signout,setAuthError } from "src/app/reducer/AuthSlice";

type Props = {
  children: React.ReactNode;
};

export type OptionType = {
    id:number,
    name:string,
    code:string
}


export interface UserProfile {
  id: number;
  first_name: string;
  last_name: string;
  user_name: string;
  image_path: string | null;
  role: string;
  type: OptionType | null;
  unit_test: OptionType | null;
}

type DecodedUser = Omit<UserProfile,'unit_test' | 'image_path' |'type'>

export type Decode = {
  user:DecodedUser,
  iat:number,
  exp:number
}

export type UserLogin = Pick<UserProfile, "user_name"> & { password: string };

export type AuthState<TData extends UserProfile> = {
  loading: boolean;
  data: TData | null;
  isAuthenticated: boolean;
  error: AxiosResponse<TData,string> | null;
};


interface AuthAction {
  login: any;
  logout: () => void;
}

const authState: AuthState<UserProfile> & Partial<AuthAction> = {
  loading: false,
  data: null,
  isAuthenticated: false,
  error: null,
}

interface AuthActionType<TData> {
  type: string;
  payload?: AxiosResponse<TData,null> | any;
}


export const AuthContext = createContext<AuthState<UserProfile> & Partial<AuthAction>>({ ...authState });

//AuthContextProvider provides authentication & authorization to Apps
const AuthContextChange = ({ children }: Props) => {
  const navigate =useNavigate()
  const {t} = useTranslation()
  const {loading,error,data,isAuthenticated} = useAppSelector(state => state.authReducer)
  const dispatch = useAppDispatch()
  let token = localStorage.getItem("token");

  //POST login methods - Authenticate
  const login = async (userForm: UserLogin) => {
    dispatch(setAuthLoading())
    
    //Logining
    try {
      const resp = await axios.post(
        `${process.env.REACT_APP_PCBA_NOVA_APP_API_URL}/auth/login`,
        userForm
      );

      //Login success show message & return token
      if (resp) {
        localStorage.setItem("token", resp.data?.token);
        await dispatch(getUserInfo(resp.data))
        showToast({type:"success",message:t('loginResult.success')})

        return resp.data;
      }
    } catch (error) {
      dispatch(setAuthError((error as AxiosError).message))

       showToast({type:"error",message:t('loginResult.error')})

      return (error as AxiosError).response?.data;
    }
  };


  //logout clear token LocalStorage & clear store
  const logout = () => {
    localStorage.removeItem('token')
    dispatch(signout())
  };

  const AuthContextValue = {
    loading,
    error,
    data,
    isAuthenticated,
    login,
    logout,
  };

  useEffect(() => {
    //GET user the first times login on every reload pages
    if (token) {
      dispatch(setAuthLoading())
      dispatch(getUserInfo(token));
    }
  }, [token]);

  if(loading) return  <Loading loading={loading}/>

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextChange;

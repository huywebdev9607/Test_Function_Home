import { eventNames } from 'process';
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import io, { Socket } from 'socket.io-client'
import Loading from 'src/components/Loading';
import socketReducer, { SocketAction, SocketState } from 'src/app/reducer/socketReducer';
import { AuthContext } from './AuthContext';
// const wss = io(`ws:${process.env.REACT_APP_PCBA_NOVA_APP_API_URL}`);

const socket = io(`ws://${process.env.REACT_APP_PCBA_NOVA_SOCKET_API_URL}/api/test`);

interface SocketData  {
    name:string
    status:string
    login:string
}

const socketState:SocketState<SocketData[]> = {
  loading: false,
  error: null,
  data: null,
  isConnected:false
}

type Props = {
    children:React.ReactNode
}

//SOCKETCONTEXTPROVIDER provide socket to app
export const SocketContext = createContext<{socketState:SocketState<SocketData[]>} & {socket:Socket}>({socketState,socket})
const SocketProvider = ({children}: Props) => {

  const [{loading, error, data,isConnected}, dispatch] = useReducer(socketReducer<SocketData[]>,socketState);

  const {isAuthenticated} = useContext(AuthContext)

  useEffect(()=>{
    //On connected
    socket.on('connect',()=>{
      dispatch({type:SocketAction.CONNECTED})
    })

    //On disconnected
    socket.on('disconnected',()=>{
      dispatch({type:SocketAction.DISCONNECTED})
    })
  },[socket.io._readyState])


  // useEffect(()=>{
  //   if(isAuthenticated){
  //     //Connect when login or expired
  //     socket.connect()
  //   }else{
  //     //Disconnect when logout or expired
  //     socket.disconnect()
  //   }
  // },[isAuthenticated])

  return (
    <SocketContext.Provider value={{socketState:{loading,error,data,isConnected},socket}}>{children}</SocketContext.Provider>
  )
}

export default SocketProvider
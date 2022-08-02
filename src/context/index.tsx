import React from 'react'
import { AppProvider } from './AppContext'
// import AuthContextProvider from './AuthContext'
import AuthContextChange from './AuthContext'
import SocketProvider from './SocketContext'

type Props = {
    children:React.ReactNode
}

const GlobalProvider = ({children}: Props) => {
  return (
    <AppProvider>
        <AuthContextChange>
          <SocketProvider>
           {children}
           </SocketProvider>
        </AuthContextChange>
    </AppProvider>
  )
}

export default GlobalProvider
import { createContext,useContext,useState } from "react";

import React from 'react'
 
const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext);

function ContextProvider({children}) {
  const [isLoggedin,setIsLoggedIn] = useState(false)
  const h= "working"
  const LoginTrue =()=>{
    setIsLoggedIn(true)
  }
  return (
  <AuthContext.Provider value={{isLoggedin,LoginTrue,h}}>
    {children}
  </AuthContext.Provider>
  )
}

export default ContextProvider
import React from 'react'
import { useAuth } from '../context/ContextProvider'
import { Navigate } from 'react-router-dom'
function Protect({children}) {
    const {isLoggedin} = useAuth()
  
   
    if (isLoggedin) {
        return children;
      } else {
        return <Navigate to="/" />;
      }
  
}

export default Protect
import React, { useEffect } from 'react'

const ProtectedRoutes = ({children}) => {
    let isAuth = null;
    useEffect(() => {
        isAuth = localStorage.getItem('token')
        if (!isAuth) {
            window.location.href = '/auth/login'
        }
    }, [])
    
  return (
    <>{isAuth? children:"Redirecting..."}</>
  )
}

export default ProtectedRoutes
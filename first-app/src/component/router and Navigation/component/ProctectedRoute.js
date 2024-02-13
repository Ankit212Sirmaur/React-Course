import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

function ProctectedRoute() {
    const isLoggedIn = true;  
    // const navigate = useNavigate(); 
  return  <> {isLoggedIn ? <Outlet/> : <Navigate to="/login"/>} </>
}

export default ProctectedRoute
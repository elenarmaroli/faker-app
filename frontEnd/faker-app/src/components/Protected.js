import React from 'react'
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {

    const isLogin = localStorage.getItem("isLogin")
    //console.log(children);

    if(!isLogin){
        return <Navigate to="/"></Navigate>
    }

  return children
}

export default Protected
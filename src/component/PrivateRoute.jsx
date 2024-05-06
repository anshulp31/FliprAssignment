import React from 'react'

const PrivateRoute = ({children}) => {
    const token=localStorage.getItem("token");
    if(token==null){
        
    }
}

export default PrivateRoute
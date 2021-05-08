import React from 'react';
import { Redirect } from 'react-router-dom'
function Auth({Component}) {
    
    if(!window.localStorage.getItem('token')){
        return <Redirect to="/" />;
    }
    return <Component/>;
}

export default Auth;
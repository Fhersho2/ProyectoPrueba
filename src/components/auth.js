import React from 'react';
import { Redirect } from 'react-router-dom'
function Auth({Component}) {
    const estado = true;
    if(estado === false){
        return <Redirect to="/" />;
    }
    return <Component/>;
}

export default Auth;
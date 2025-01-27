import React from 'react'

const Authorisation=(wrap)=>{
    return({isAuth,...props})=>
    {
        if(!isAuth)
        {
        return <p>access denied!...</p>;
        }
    return <wrap{...props}/>
    };
};

export default Authorisation
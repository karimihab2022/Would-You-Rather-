import React from "react";

import { NavLink } from 'react-router-dom'


const E404=()=>{
    
    return(
        <div className="center" >
            <h1 className="as">404</h1>
            <p> you must  <NavLink className="ea" to='/' activeClassName='active'>
            login
            </NavLink> first to go to this page</p>
        </div>
    )
}

export default E404;
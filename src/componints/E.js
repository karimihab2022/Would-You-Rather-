import React from "react";
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Setcuruser } from "../actions/CurUser";

const E404=(props)=>{
    return(
        <div>
            <h1>404</h1>
           <p> you must  <NavLink onClick={()=>props.dispatch(Setcuruser(null))} to='/' activeClassName='active'>
            login
            </NavLink> to go to this page</p>
        </div>
    )
}

export default connect()(E404);
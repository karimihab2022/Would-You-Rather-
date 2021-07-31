import React from "react";
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";

const  Nav =(props)=> {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/Home' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>
              New question
            </NavLink>
            </li>
            <li>
            <NavLink to='/leaderbourd' activeClassName='active'>
            leaderbourd
            </NavLink>
            </li>
           
            
            

            
         
        </ul>
      </nav>
    )
  }
  export default connect()(Nav)
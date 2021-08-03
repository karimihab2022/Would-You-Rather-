import React from "react";
import { NavLink } from 'react-router-dom'

const  Nav =()=> {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/Home'  activeclassname='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeclassname='active'>
              New question
            </NavLink>
            </li>
            <li>
            <NavLink to='/leaderboard' activeclassname='active'>
            leaderboard
            </NavLink>
            </li>
           
        </ul>
      </nav>
    )
  }
  export default Nav
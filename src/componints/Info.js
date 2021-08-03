import React from "react"
import { connect } from "react-redux"
import { Setcuruser } from "../actions/CurUser";
import { NavLink } from 'react-router-dom'



const Info =(props)=>{
  
    const {curUser, users,dispatch}=props;



   
    return(
        <div className ="info">

            <p>welcome {users[curUser].name}</p>

            <img className="avatar" src={users[curUser].avatarURL}/>
             <NavLink onClick={()=>dispatch(Setcuruser(null))} to='/' activeClassName='active'>
            logout
            </NavLink>

            <NavLink to='/edit' activeClassName='active'>
            Edit profile
            </NavLink>
           
         </div>
    )
}

const mapstatstoprops=({curUser,users})=>{
    return{
     
     curUser,
     users,
     
    }
   }
     
   
   
   export default connect(mapstatstoprops)(Info)
  
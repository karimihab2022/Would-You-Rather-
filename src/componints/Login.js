import React, { useState } from "react";
import { connect } from "react-redux";
import { Setcuruser } from "../actions/CurUser";
import {  Redirect,Link } from "react-router-dom";
import {HandelAdduser} from '../actions/Users'



const Login=(props)=>{
    const [selected,setSelected]=useState();
    const[id,setid]=useState("");
    const[name,setname]=useState("");
    const[avatarURL,setavatar]=useState("");

    const handelChange=(e)=>{
        e.preventDefault();
        if(e.target.value==="select user") return
        setSelected(e.target.value)
    }

    const handellogin=(e)=>{
       

        if(selected===undefined){
            e.preventDefault()
            alert("please choose a user before login")
            return
         } 
        props.dispatch(Setcuruser(selected));
       


    }

    const handleChangeid=(e)=>{

        setid(e.target.value);
    }
    const handleChangename=(e)=>{
        setname(e.target.value);
    }
    const handleChangeavatar=(e)=>{
        setavatar(e.target.value);
    }


    const handleSubmit=(e)=>{

        e.preventDefault();
        if(props.users.includes(id)){
            alert("this username is taken")
            return
        }
        props.dispatch(HandelAdduser(id,name,avatarURL))

    }

    

    return(
        <div>
            
            <select  value= {selected} onChange={handelChange}>
                      <option value="select user" >select user</option>
                      {
                          props.users.map((user)=>(
                            <option key={user} value={user}>{user}</option>
                          ))
                      }
                    
                    </select>

                    <Link onClick={handellogin} to='/Home'>login</Link>
                    <div>
                <form onSubmit={handleSubmit}>
                <textarea
            placeholder="username"
            value={id}
            onChange={handleChangeid}
            className='textarea'
        
          />
            <textarea
            placeholder="name"
            value={name}
            onChange={handleChangename}
            className='textarea'
        
          />
           <textarea
            placeholder="avatar"
            value={avatarURL}
            onChange={handleChangeavatar}
            className='textarea'
        
          />
          <button
            className='btn'
            type='submit'
            disabled={id === ''|| name=== '' || avatarURL=== '' }>
              Submit
          </button>
                </form>
            </div>
            
        </div>
    )

}

function mapStateToProps({users}) {
    
    return {
        users:Object.keys(users)
    }
}
export default connect(mapStateToProps)(Login);
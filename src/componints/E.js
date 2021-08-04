import React, { useState } from "react";
import Login from "./Login";


const E404=()=>{
    const[tologin,setTologin]=useState(false)
    const handelclick=()=>{
        setTologin(true)
    }
    
    if(tologin===true){
        console.log("aaa")
        return <Login id="add"/>
    }
    return(
        <div className="center" >
           
            <p> you must login first to go to this page</p>
            <button onClick={handelclick}  className='qb'>
            login
            </button>
        </div>
    )
}

export default E404;
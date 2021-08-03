import React, { useState } from "react";
import { connect } from "react-redux";
import { Setcuruser } from "../actions/CurUser";
import { Link } from "react-router-dom";
import {HandelAdduser} from '../actions/Users'
import ImageInput from './Imageinput';
import { AvatarGenerator } from 'random-avatar-generator'



const Login=(props)=>{

    const [selected,setSelected]=useState();
    const[password,setpassword]=useState("");

    const[id,setid]=useState("");
    const[name,setname]=useState("");
    const[avatarURL,setavatar]=useState("");
    const[newpassword,setnewpassword]=useState("");


    const {users,dispatch}=props;
    const usersids=Object.keys(users);

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
         if(password===''){
            e.preventDefault()
             alert('please enter the password "the password for the existing users is 123456"')
             return
         }
         if(users[selected].password!==password){
            e.preventDefault()
             alert("wrong username or password")
             return
         }
        dispatch(Setcuruser(selected));
    

    }

    const handleChangeid=(e)=>{
        setid(e.target.value);
    }

    const handleChangename=(e)=>{
        setname(e.target.value);
    }
   
    const handleChangepassword=(e)=>{
        setpassword(e.target.value);
    }

    const handleChangenewpassword=(e)=>{
        setnewpassword(e.target.value);
    }

    const handleSignup=(e)=>{

        e.preventDefault();
        if(usersids.includes(id)){
            alert("This username is taken, please choose another username")
            return
        }
        if(avatarURL===""){
            const generator = new AvatarGenerator();
            dispatch(HandelAdduser(id,name,generator.generateRandomAvatar(),newpassword))
            setid("");
            setname("");
            setnewpassword("")
            return

        }
        dispatch(HandelAdduser(id,name,avatarURL,newpassword))
        setid("");
        setname("");
        setavatar("");
        setnewpassword("")


    }
  
    

    return(
        <div>
            <h1 className="center">Welcome to WOULD YOU RATHER?</h1>
             <div className="start">
            <div className="login">

                    <h1 className ="center"> Use old user</h1>

                    <select  value= {selected} onChange={handelChange}>
                        <option value="select user" >select user</option>
                        {
                            usersids.map((user)=>(
                                <option key={user} value={user}>{user}</option>
                                ))
                        }

                    </select>

                    <textarea
                        placeholder="password"
                        value={password}
                        onChange={handleChangepassword}
                        className='textarea t'       
                    />

                    <Link onClick={handellogin} to='/Home'>login</Link>
                        

                    </div>



                    <div className="end">

                    <form onSubmit={handleSignup} className='new-tweet'>

                        <h1 className ="center">Create new user</h1>

                        <ImageInput
                            className="create-contact-avatar-input im"
                            name="avatarURL"
                            maxHeight="60" 
                            onchange={(e)=> setavatar(e)}
                        />

                        <div className="a">

                            <textarea
                                placeholder="username"
                                value={id}
                                onChange={handleChangeid}
                                className='textarea t'  
                            />

                            <span>*</span>

                        </div>

                        
                        <div className="a">

                            <textarea
                                placeholder="name"
                                value={name}
                                onChange={handleChangename}
                                className='textarea t'
                            />

                            <span>*</span>
                        </div>

                        <div className="a">
                            <textarea
                                placeholder="password"
                                value={newpassword}
                                onChange={handleChangenewpassword}
                                className='textarea t'
                            />

                            <span>*</span>
                        </div>


                        <button
                            className='qb'
                            type='submit'
                            disabled={id === ''|| name=== '' || newpassword==='' }>
                            sign up
                        </button>
                    </form>


                    </div>

            </div>
            
        </div>
    )

}

function mapStateToProps({users}) {
    
    return {
       users,
    }
}
export default connect(mapStateToProps)(Login);
import React,{useState} from "react"
import { connect } from "react-redux"
import { Handelchangename, Handelchangeavatar,Handelchangepassword } from '../actions/Users';
import ImageInput from './Imageinput';



const Edit=(props)=>{
    const [name,setName]=useState("");
    const [password,setpassword]=useState("");
    const [avatar,setavatar]=useState("");

    const {dispatch}=props;


    const handleChangename=(e)=>{
        setName(e.target.value);
    }

    const handleChangepassword=(e)=>{
        setpassword(e.target.value);
    }

    const handleSubmitpassword=(e)=>{
        e.preventDefault();
        dispatch(Handelchangepassword(password))
        setpassword("");
       
      }
    
    const handleSubmitname=(e)=>{   
      e.preventDefault();
      dispatch(Handelchangename(name))
      setName("");
     
    }

    const handleSubmitavatar=(e)=>{
        e.preventDefault();
        dispatch( Handelchangeavatar(avatar))
        setavatar("");
       
      }

    return(
        <div className="edit">

            <h2 className="center">Edit Profile</h2>

          <form className='new-tweet' onSubmit={handleSubmitname}>
              <textarea
              placeholder="New Name"
              value={name}
              onChange={handleChangename}
              className='textarea'
              />

              <button
              className='qb'
              type='submit'
              disabled={name===""}
              >
                save new name
            </button>
           </form>

          <form className='new-tweet' onSubmit={handleSubmitpassword}>
              <textarea
              placeholder="New password"
              value={password}
              onChange={handleChangepassword}
              className='textarea'
              />

              <button
              className='qb'
              type='submit'
              disabled={password===""}
              >
                save new password
            </button>
           </form>

    
            <form className='new-tweet' onSubmit={handleSubmitavatar}>
              <ImageInput
                className="create-contact-avatar-input em"
                name="avatarURL"
                maxHeight="60" 
                onchange={(e)=> setavatar(e)}
                />

                 <button
                  className='qb'
                  disabled={avatar===""}
                  type='submit'
                  >
                    save new avatar
                  </button>
                </form>
               
        </div>
       
    )
}

   
   
   export default connect()(Edit)
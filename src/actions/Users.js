import  { _saveUser, _savechangename,_savechangeavatar , _savechangepassword} from "../Data"
import { showLoading, hideLoading } from 'react-redux-loading'


export const Reseve_users="Reseve_users";
export const Add_user="Add_user";
export const change_name="change_nama";
export const change_avatar="change_avatar";
export const change_password="change_password";



export const Reseveusers=(users)=>{
    return{
        type:Reseve_users,
        users
    }
}

const Adduser=(user)=>{
    return{
        type:Add_user,
        user
    }
}

export const HandelAdduser=(id,name,avatarURL,password)=>{
    return(dispatch)=>{
        

        dispatch(showLoading())
        return  _saveUser({id,name, avatarURL,password})
        .then((user)=>
            dispatch( Adduser(user)))
            .then(()=> dispatch(hideLoading())
           

        )
    }
}
 const changename=(curUser,name)=>{
    
        
    return{
        type:change_name,
        name,
        curUser,
      
    }
}
export const Handelchangename=(name)=>{
    return(dispatch,getState)=>{
        const { curUser } = getState();
        dispatch(showLoading())
        return  _savechangename({authedUser:curUser,name})
        .then(()=>
            dispatch( changename( curUser,name)))
            .then(()=> dispatch(hideLoading())
           

        )
    }
}



 const changeavatar=(curUser,avatar)=>{
    
        
    return{
        type:change_avatar,
        avatar,
        curUser
    }
}

export const Handelchangeavatar=(avatar)=>{
    return(dispatch,getState)=>{
    
        const { curUser } = getState();
        dispatch(showLoading())
        return  _savechangeavatar({authedUser:curUser,avatar})
        .then(()=>
            dispatch( changeavatar( curUser,avatar)))
            .then(()=> dispatch(hideLoading())
           

        )
    }
}

const changepassword=(curUser,password)=>{
    
        
    return{
        type:change_password,
        password,
        curUser,
      
    }
}
export const Handelchangepassword=(password)=>{
    return(dispatch,getState)=>{
        const { curUser } = getState();
        dispatch(showLoading())
        return  _savechangepassword({authedUser:curUser,password})
        .then(()=>
            dispatch( changepassword( curUser,password)))
            .then(()=> dispatch(hideLoading())
           

        )
    }
}
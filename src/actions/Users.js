import  { _saveUser} from "../Data"
import { showLoading, hideLoading } from 'react-redux-loading'


export const Reseve_users="Reseve_users";
export const Add_user="Add_user";

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

export const HandelAdduser=(id,name,avatarURL)=>{
    return(dispatch)=>{
        

        dispatch(showLoading())
        return  _saveUser({id,name, avatarURL})
        .then((user)=>
            dispatch( Adduser(user)))
            .then(()=> dispatch(hideLoading())
           

        )
    }
}
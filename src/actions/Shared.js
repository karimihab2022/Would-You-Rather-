import {Resevequestions} from "./Questions"
 import { Reseveusers} from "./Users" 
 import {getInitialData}from "../Data"
 import { showLoading, hideLoading } from 'react-redux-loading'


 export const handleInitialData =()=>{
     return(dispatch)=>{
         dispatch(showLoading())
         return getInitialData()
         .then(({users,questions})=>{
         dispatch(Reseveusers(users))
         dispatch(Resevequestions (questions))
         dispatch(hideLoading())
         })
        

     }
 }
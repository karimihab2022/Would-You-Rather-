import {  set_currusers } from "../actions/CurUser" 

export  const curUser =(state = null, action)=> {
  switch (action.type) {
    case  set_currusers :
      return action.id
    default :
      return state
  }
}
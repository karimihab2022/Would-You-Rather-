import { Add_question, Ans_question } from "../actions/Questions";
import {Add_user, Reseve_users,change_name, change_avatar, change_password} from "../actions/Users"


export const users=(state={},action)=>{
    switch(action.type) {
        case Reseve_users :
          return {
            ...state,
            ...action.users
          }
          case Add_question:
           
            return {
              
              ...state,
              [action.question.author]: {...state[action.question.author],
                questions :state[action.question.author].questions.concat([action.question.id])}
            }
            case Ans_question:
                return{
                    ...state,
                    [action.curUser]:{
                        ...state[action.curUser],
                        answers:{
                            ...state[action.curUser].answers,[action.qid]:action.answer
                        }
                    }
                }
                case Add_user :
                    return{
                        ...state,
                  [action.user.id]:action.user
                    }

                case change_name:
                  return{
                    ...state,
                    [action.curUser]:{
                      ...state[action.curUser],name:action.name
                    }
                  }  
                  case change_avatar:
                  return{
                    ...state,
                    [action.curUser]:{
                      ...state[action.curUser],avatarURL:action.avatar
                    }
                  }    
                  case change_password:
                    return{
                      ...state,
                      [action.curUser]:{
                        ...state[action.curUser],password:action.password
                      }
                    }    
          default :
          return state
}
}
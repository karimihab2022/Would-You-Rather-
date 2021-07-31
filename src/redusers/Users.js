import { Add_question, Ans_question } from "../actions/Questions";
import {Add_user, Reseve_users} from "../actions/Users"


export const users=(state={},action)=>{
    switch(action.type) {
        case Reseve_users :
          return {
            ...state,
            ...action.users
          }
          case Add_question:
            console.log(state)
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
          default :
          return state
}
}
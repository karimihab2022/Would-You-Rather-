import {Add_question, Ans_question, Reseve_questions } from "../actions/Questions"

export const questions=(state={},action)=>{
    switch(action.type) {
        case Reseve_questions :
          return {
            ...state,
            ...action.questions
          }
          case Add_question:
              return{
                  ...state,
                  [action.question.id]:action.question
              }
              case Ans_question:
                 return{
                    ...state, 
                    [action.qid]:{
                        ...state[action.qid],[action.answer]:{
                            ...state[action.qid][action.answer],votes:state[action.qid][action.answer].votes.concat(action.curUser)
                        }
                       
                    }
                   
                 }
                   
                
          default :
          return state
}
}
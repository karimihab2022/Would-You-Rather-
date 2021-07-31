import  {_getQuestions, _getUsers,  _saveQuestion,_saveQuestionAnswer} from "../Data"
import { showLoading, hideLoading } from 'react-redux-loading'




export const Reseve_questions="Reseve_questions";
export const Add_question="Add_question";
export const Ans_question="Ans_question";



export const Resevequestions=(questions)=>{
    return{
        type:Reseve_questions,
        questions
    }
}

 const Addquestion=(question)=>{
    return{
        type:Add_question,
        question
    }
}
export const HandelAddquestion=(optionOneText,optionTwoText)=>{
    return(dispatch,getState)=>{
        

        const { curUser } = getState();
        console.log( curUser)
        dispatch(showLoading())
        return  _saveQuestion({optionOneText,optionTwoText, author:curUser})
        .then((question)=>
            dispatch( Addquestion(question)))
            .then(()=> dispatch(hideLoading())
           

        )
    }
}
const Ansquestion=({curUser,qid, answer})=>{
    return{
        type:Ans_question,
        qid,
        answer,
        curUser
    }
}

export const HandelAnsquestion= ( qid, answer)=>{
    return(dispatch,getState)=>{
        

        const { curUser } = getState();
       
        dispatch(showLoading())
        return  _saveQuestionAnswer({authedUser:curUser,qid, answer})
        .then((question)=>
            dispatch( Ansquestion({curUser,qid, answer})))
            .then(()=> dispatch(hideLoading())
           

        )
    }
}





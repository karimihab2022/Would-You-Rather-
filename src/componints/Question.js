import React from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'


const Question=(props)=>{
    return(
        <div className='tweet' >
            
            <img  src={props.users[props.question.author].avatarURL} className="avatar"/>
            <h3>{props.users[props.question.author].name} asks </h3>

            <div className="tweet-info">
            <h3> Would You Rather?</h3>
            <span>{props.question.optionOne.text}  or...</span>
        
        <Link to={`/question/${props.question.id}`}> view poll</Link>
            </div>
          
        </div>
    )
}

const mapstatestoprops=({users,questions,curUser},{id})=>{
    const question=questions[id];
    return{
        
        curUser,
        question,
        users
        
    }
   
}
export default  connect(mapstatestoprops)(Question)
import React from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'


const Question=(props)=>{

    const{question,users}=props;

    return(

        <div className='tweet' >

            <div className="qhead">
                <img  src={users[question.author].avatarURL} className="avatar"/>
                <h3>{users[question.author].name} asks </h3>
            </div>
           

            <div className="center">
                <h3 className="mt0"> Would You Rather?</h3>
                <p>{question.optionOne.text}  or...</p>
            
                <Link to={`/question/${question.id}`} className="link"> view poll</Link>
            </div>
          
        </div>
    )
}

const mapstatestoprops=({users,questions},{id})=>{
    const question=questions[id];
    return{
        
        question,
        users
        
    }
   
}
export default  connect(mapstatestoprops)(Question)
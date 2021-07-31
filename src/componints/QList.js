import React, {useState,useEffect} from"react";
import { connect } from 'react-redux';
import Question from "./Question";
import { Link } from "react-router-dom";

const Qlist =(props)=>{
    const[answered,setAnswered]=useState(false);
   

   
if(answered===false){
    return(
       
        <div className='center'>
             {console.log(props)}
        <button onClick={()=>setAnswered(false)}>
            not answered { props.questionsids.filter(id=>!Object.keys(props.users[props.curUser].answers).includes(id)).length}
        </button>
        <button  onClick={()=>setAnswered(true)}>
            answerd {Object.keys(props.users[props.curUser].answers).length}
        </button>
        <div>
               
                
               
            <h3 ></h3>
            <ul className='dashboard-list'>
                {
                    props.questionsids.filter(id=>!Object.keys(props.users[props.curUser].answers).includes(id)).length===0?
                        <p>you answered all the questions you can <Link to='/New'>create</Link> new question </p>
                    
                   :props.questionsids.filter(id=>!Object.keys(props.users[props.curUser].answers).includes(id)).map((Qid)=>(
                        <li key={Qid}>
                            <Question id={Qid}/>
                        </li>
                    ))
                }
            </ul>

            </div>      
        </div>
        
        
    )
   
   
}
else{
    return(
        <div className='center'>
        <button onClick={()=>setAnswered(false)}>
            not answered { props.questionsids.filter(id=>!Object.keys(props.users[props.curUser].answers).includes(id)).length}
        </button>
        <button  onClick={()=>setAnswered(true)}>
            answerd  {Object.keys(props.users[props.curUser].answers).length}
        </button>
        <div>
               
                
               
            <h3 ></h3>
            <ul className='dashboard-list'>
                {
                 props.questionsids.filter(id=>Object.keys(props.users[props.curUser].answers).includes(id)).map((Qid)=>(
                        <li key={Qid}>
                            <Question id={Qid}/>
                        </li>
                    ))
                }
            </ul>

            </div>      
        </div>
        
        
    )
    
}


       
    
}

const mapstatetoprops=({questions,users,curUser})=>{
    return{
        questionsids:Object.keys(questions).sort((a,b)=>questions[b].timestamp-questions[a].timestamp),
        users,
        curUser
    }
}

export default connect(mapstatetoprops)(Qlist)
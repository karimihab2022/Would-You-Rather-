import React, {useState} from"react";
import { connect } from 'react-redux';
import Question from "./Question";
import { Link } from "react-router-dom";

const Qlist =(props)=>{
    const[answered,setAnswered]=useState(false);
    const{questionsids,users,curUser}=props;
   


    return(
       
        <div className='center  qlist'>

            <div>
                <button  onClick={()=>setAnswered(false)} className={answered?"qb ":"qb s"} >
                    not answered { questionsids.filter(id=>!Object.keys(users[curUser].answers).includes(id)).length}
                </button>

                <button  onClick={()=>setAnswered(true)}  className={answered?"s qb":"qb "}>
                    answerd {Object.keys(users[curUser].answers).length}
                </button>

            </div>
           
                
            {answered===false?
                 <div>
                    
                    <ul className='dashboard-list'>
                     {
                         questionsids.filter(id=>!Object.keys(users[curUser].answers).includes(id)).length===0?
                            <p>you answered all the questions you can <Link className="ea" to='/add'>create</Link> new question </p>
                    
                            :questionsids.filter(id=>!Object.keys(users[curUser].answers).includes(id)).map((Qid)=>(
                                <li key={Qid}>
                                 <Question id={Qid}/>
                                 </li>
                             ))
                      }
                    </ul>

               </div>

                :<div>

                    <ul className='dashboard-list'>

                         { Object.keys(users[curUser].answers).length===0?
                            <p> you haven't answerd any questions</p>

                            :questionsids.filter(id=>Object.keys(users[curUser].answers).includes(id)).map((Qid)=>(
                                     <li key={Qid}>
                                         <Question id={Qid}/>
                                    </li>
                             ))
                          }
                    </ul>

                </div>
            
            }
            
           
               
        </div>
        
        
    )
   
   
}





const mapstatetoprops=({questions,users,curUser})=>{
    return{
        questionsids:Object.keys(questions).sort((a,b)=>questions[b].timestamp-questions[a].timestamp),
        users,
        curUser
    }
}

export default connect(mapstatetoprops)(Qlist)
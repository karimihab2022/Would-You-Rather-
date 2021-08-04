import React,{useState} from "react";
import { connect } from "react-redux";

import { HandelAnsquestion } from "../actions/Questions";

const Questionpage =(props)=>{
    const[selected,setSelected]=useState();

    const{id,users,questions,curUser,dispatch}=props;

   const onValueChange=(e)=> {
        setSelected(e.target.value) 
      }

     const formSubmit=(e)=> {
        e.preventDefault();
        dispatch(HandelAnsquestion(id,selected))
      }

      if(questions[id]===undefined){
        return(
          <div className="center">
            <h1 className=" as">404</h1>
            <h1 >this question does not exist</h1>
           </div>
        
        )
    }
    return(

       <div className="nq">
       
          {Object.keys(users[curUser].answers).includes(id)?

            <div  className='center'>

                <div className="qheads">
                    <img  src={users[questions[id].author].avatarURL} alt="img" className="avatar"/>
                    <h1> asked by {users[questions[id].author].name}</h1>
                </div>

                <h2>The Results</h2>

              <div>
                  
                  <div  className={ users[curUser].answers[id]==="optionOne"? "done":"ndone"}> 
               
                      <p> Would You Rather {questions[id].optionOne.text}?</p>
                      <p> {questions[id].optionOne.votes.length} out of {questions[id]
                      .optionOne.votes.length+questions[id].optionTwo.votes.length} votes</p>
                      <p> {parseInt(questions[id].optionOne.votes.length)/(questions[id]
                      .optionOne.votes.length+questions[id].optionTwo.votes.length)*100}%</p>
                      
                  </div>


                  <div className={ users[curUser].answers[id]==="optionTwo"? "done":"ndone"}>

                    <p> Would You Rather {questions[id].optionTwo.text}?</p>
                    <p> {questions[id].optionTwo.votes.length} out of {questions[id]
                    .optionOne.votes.length+questions[id].optionTwo.votes.length} votes</p>
                      <p> {parseInt(questions[id].optionTwo.votes.length)/(questions[id]
                    .optionOne.votes.length+questions[id].optionTwo.votes.length)*100}%</p>
                  </div>

              </div>
              

            </div>

            : <div  className='center'>

                 <div className="qheads">
                    <img  src={users[questions[id].author].avatarURL} alt="img" className="avatar"/>
                    <h1>{users[questions[id].author].name} asks</h1>
                 </div>   

                  <h3> Would You Rather...</h3>

                  <form onSubmit={formSubmit}>
                        <p >{questions[id].optionOne.text}<input type="radio"  value="optionOne" name=" " onChange={onValueChange}/></p>

                        <p>{questions[id].optionTwo.text}<input type="radio"  value="optionTwo" name=" "onChange={onValueChange}/></p>

                        <button  type="submit" className="qb" disabled={selected===undefined}>
                            Submit
                        </button>
                  </form>
                    
              </div>
             }
         </div>
   
    )
    
    
}

function mapStateToProps ({questions,users,curUser}, props) {
    const { id } = props.match.params

    return {
      id,
      curUser,
      users,
      questions
  }
}

export default connect( mapStateToProps)(Questionpage);
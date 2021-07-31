import React,{useState} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { HandelAnsquestion } from "../actions/Questions";

const Questionpage =(props)=>{
    const[selected,setSelected]=useState();

   const onValueChange=(event)=> {
       
            setSelected(event.target.value) 
        
      }

     const formSubmit=(event)=> {
        event.preventDefault();
        if(selected===undefined)return
        console.log(selected)
        props.dispatch(HandelAnsquestion(props.id,selected))
      }


    

    if(Object.keys(props.users[props.curUser].answers).includes(props.id)){

        if(props.users[props.curUser].answers[props.id]==="optionOne"){
            return(
                <div  className='center'> 
                     <div>
                <img  src={props.users[props.questions[props.id].author].avatarURL} className="avatar"/>
                <h1>  asked by {props.users[props.questions[props.id].author].name}</h1>
                </div>
                <div>
                    <h3>the results</h3>
                <div  >
                <p> you voted</p>
                <p > Would You Rather {props.questions[props.id].optionOne.text}?</p>
                <p> {props.questions[props.id].optionOne.votes.length} out of {props.questions[props.id]
                .optionOne.votes.length+props.questions[props.id].optionTwo.votes.length} votes</p>
                <p> {parseInt(props.questions[props.id].optionOne.votes.length)/(props.questions[props.id]
                .optionOne.votes.length+props.questions[props.id].optionTwo.votes.length)*100}%</p>
               
                
                </div>

                <div  >
                <p> Would You Rather {props.questions[props.id].optionTwo.text}?</p>
                <p> {props.questions[props.id].optionTwo.votes.length} out of {props.questions[props.id]
                .optionOne.votes.length+props.questions[props.id].optionTwo.votes.length} votes</p>
                 <p> {parseInt(props.questions[props.id].optionTwo.votes.length)/(props.questions[props.id]
                .optionOne.votes.length+props.questions[props.id].optionTwo.votes.length)*100}%</p>
                </div>

                </div>
                
                
                </div>
               
            )
        }
        else{
            return(
                <div  className='center'>
            <div>
       <img  src={props.users[props.questions[props.id].author].avatarURL} className="avatar"/>
       <h1> asked by{props.users[props.questions[props.id].author].name}</h1>
      

      </div>
      <div>
          <h1>the results</h1>
      <div >
       <p > Would You Rather {props.questions[props.id].optionOne.text}?</p>
       <p> {props.questions[props.id].optionOne.votes.length} out of {props.questions[props.id]
       .optionOne.votes.length+props.questions[props.id].optionTwo.votes.length} votes</p>
        <p> {parseInt(props.questions[props.id].optionOne.votes.length)/(props.questions[props.id]
                .optionOne.votes.length+props.questions[props.id].optionTwo.votes.length)*100}%</p>
       
       </div>

       <div >
       <p> you voted</p>
       <p> Would You Rather {props.questions[props.id].optionTwo.text}?</p>
       <p> {props.questions[props.id].optionTwo.votes.length} out of {props.questions[props.id]
       .optionOne.votes.length+props.questions[props.id].optionTwo.votes.length} votes</p>
        <p> {parseInt(props.questions[props.id].optionTwo.votes.length)/(props.questions[props.id]
                .optionOne.votes.length+props.questions[props.id].optionTwo.votes.length)*100}%</p>
       </div>
      </div>
     
       
       </div>
            )
            
      
        }
       

    }
    else{
        return(
            <div  className='center'>
        <div>
   <img  src={props.users[props.questions[props.id].author].avatarURL} className="avatar"/>
   <h1>{props.users[props.questions[props.id].author].name} asks</h1>
   <h3> Would You Rather...</h3>
   <form onSubmit={formSubmit}>
   <p >{props.questions[props.id].optionOne.text}<input type="radio" name="a" value="optionOne"  onChange={onValueChange}/></p>

    <p>{props.questions[props.id].optionTwo.text}<input type="radio" name="a" value="optionTwo" onChange={onValueChange}/></p>
    <button  type="submit">
          Submit
        </button>
   </form>
   
  

   
   </div>

   <div>
   
   
  
   </div>
  
   </div>
        )
    }
    
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
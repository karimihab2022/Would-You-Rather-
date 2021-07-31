import React,{useEffect,useState} from "react";
import { connect } from "react-redux";
import {  Redirect } from "react-router-dom";
import {HandelAddquestion}from "../actions/Questions"


const NewQuestion =(props)=>{
    const [optionone,setOptionone]=useState("");
    const [optiontwo,setOptiontwo]=useState("");
    const [tohome,setTohome]=useState(false);



    const handleChangeone=(e)=>{
        setOptionone(e.target.value);
    }
    const handleChangetwo=(e)=>{
        setOptiontwo(e.target.value);
    }

    const handleSubmit=(e)=>{
        
        e.preventDefault();
       if((Object.values(props.questions).map((question)=>question.optionOne.text).includes(optionone)||
       Object.values(props.questions).map((question)=>question.optionOne.text).includes(optiontwo))
       &&(Object.values(props.questions).map((question)=>question.optionTwo.text).includes(optiontwo)||
       Object.values(props.questions).map((question)=>question.optionTwo.text).includes(optionone)))
         {
           alert("this question is exest")
           return
       }
        props.dispatch(HandelAddquestion(optionone,optiontwo))
        setOptionone("");
        setOptiontwo("");
        setTohome( true);
        
       
    }
    if(tohome===true){
        return  <Redirect to='/Home' />
      }
return(
    <div  className='center'> 
            {console.log(Object.values(props.questions).map((question)=>question.optionOne.text))}
        <h3 className='center'> Would You Rather?</h3>
        <form className='new-tweet' onSubmit={handleSubmit}>
          <textarea
            placeholder="optionOne"
            value={optionone}
            onChange={handleChangeone}
            className='textarea'
        
          />
            <textarea
            placeholder="optionTwo"
            value={optiontwo}
            onChange={handleChangetwo}
            className='textarea'
        
          />
        
        <button
            className='btn'
            type='submit'
            disabled={optionone === ''||optiontwo==='' ||optionone.toLowerCase()===optiontwo.toLowerCase()}>
              Submit
          </button>
      
          
        </form>
      </div>
)
}
const mapstatetoprops=({questions})=>{
    return{
        questions,
        
    }
}


export default connect(mapstatetoprops)(NewQuestion)
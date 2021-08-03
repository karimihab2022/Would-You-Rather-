import React,{useState} from "react";
import { connect } from "react-redux";
import {  Redirect } from "react-router-dom";
import {HandelAddquestion}from "../actions/Questions"


const NewQuestion =(props)=>{
    const [optionone,setOptionone]=useState("");
    const [optiontwo,setOptiontwo]=useState("");
    const [tohome,setTohome]=useState(false);

    const{questions,dispatch}=props;


    const handleChangeone=(e)=>{
        setOptionone(e.target.value);
    }

    const handleChangetwo=(e)=>{
        setOptiontwo(e.target.value);
    }

    const handleSubmit=(e)=>{
        
        e.preventDefault();
       if((Object.values(questions).map((question)=>question.optionOne.text).includes(optionone)||
       Object.values(questions).map((question)=>question.optionTwo.text).includes(optionone))
       &&(Object.values(questions).map((question)=>question.optionTwo.text).includes(optiontwo)||
       Object.values(questions).map((question)=>question.optionOne.text).includes(optiontwo)))
         {
           alert("This question is created before,You can't duplicate questions")
           return
       }

      dispatch(HandelAddquestion(optionone,optiontwo))
      setOptionone("");
      setOptiontwo("");
      setTohome( true);
        
       
    }


    if(tohome===true){
        return  <Redirect to='/Home' />
      }


    return(
         <div  className='center nq'> 

              <h3> Would You Rather?</h3>

               <form className='new-tweet' onSubmit={handleSubmit}>
                  
                    <div className="a">

                      <textarea
                          placeholder="option one"
                          value={optionone}
                          onChange={handleChangeone}
                          className='textarea t'  
                      />

                      <span>*</span>

                      </div>

                      <div className="a">

                          <textarea
                              placeholder="option two"
                              value={optiontwo}
                              onChange={handleChangetwo}
                              className='textarea t'  
                          />

                          <span>*</span>

                          </div>

        
                  <button
                      className='qb'
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
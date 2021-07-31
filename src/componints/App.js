import React, { useEffect,Fragment} from 'react'

import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Setcuruser } from "../actions/CurUser";
import { handleInitialData } from '../actions/Shared'
import QList from './QList'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Questionpage from './Questionpage'
import NewQuestion from './NewQuestion'
import Leaderbourd from './Leaderbourd'
import Login from './Login'
import Nav from './Nav'
import E from './E'


function App(props) {
  useEffect(()=>{
    props.dispatch(handleInitialData())
    


   },[])
  return (
   
     
       <Router>
       <Fragment>
       <LoadingBar/>

       <div>
       <Nav/>
       
       {props.loading===true
      ?<div>
        <Route path='/' exact component={ Login} />
        <Route path='/Home'  component={ E} />
        <Route path='/new'  component={ E} />
        <Route path='/leaderbourd' component={ E} />
        <Route path='/question/:id' component={E} />

      </div>
      
      :<div>
            <div>
            <NavLink onClick={()=>props.dispatch(Setcuruser(null))} to='/' activeClassName='active'>
                logout
                </NavLink>
                <img className="avatar" src={props.users[props.curUser].avatarURL}/>
              <p>welcome {props.users[props.curUser].name}</p>
              </div>
              <div>  
          <Route path='/' exact component={ Login} />
          <Route path='/Home'   component={QList} />
          <Route path='/question/:id' component={Questionpage} />
          <Route path='/new' component={NewQuestion} />
          <Route path='/leaderbourd' component={ Leaderbourd} />
            </div>
      </div> }
       </div>
      
        </Fragment>
       </Router>
       
        
       
  );
}

const mapstatstoprops=({curUser ,users})=>{
  return{
   loading : curUser===null,
   curUser,
   users,
  }
 }
   
 
 
 export default connect(mapstatstoprops)(App)

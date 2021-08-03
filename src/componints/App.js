import React, {useEffect,Fragment} from 'react'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/Shared'
import QList from './QList'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Questionpage from './Questionpage'
import NewQuestion from './NewQuestion'
import Leaderbourd from './Leaderbourd'
import Login from './Login'
import Nav from './Nav'
import E from './E'
import Info from './Info';
import Edit from './Edit'


function App(props) {
  const {loading ,dispatch}=props;

  useEffect(()=>{
    dispatch(handleInitialData())
   },[])

  
  return (
     <Router>
      <Fragment>
       <LoadingBar style={{ backgroundColor: 'white', height: '5px' }}/>

    <div>
       <Nav/>
       
       {loading===true
      ?<div>
        <Route path='/' exact component={ Login} />
        <Route path='/Home'  component={ E} />
        <Route path='/add'  component={ E} />
        <Route path='/leaderboard' component={ E} />
        <Route path='/question/:id' component={E} />
        <Route path='/edit' component={ E} />

      </div>
    
      :<div>
           <Info/>
           <h1 className="center">WOULD YOU RATHER ... ?</h1>
         <div>  
          <Route path='/' exact component={ Login} />
          <Route path='/Home'   component={QList} />
          <Route path='/question/:id' component={Questionpage} />
          <Route path='/add' component={NewQuestion} />
          <Route path='/leaderboard' component={ Leaderbourd} />
          <Route path='/edit' component={ Edit} />

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

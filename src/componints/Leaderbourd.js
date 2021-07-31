import React from "react";
import { connect } from "react-redux";
import User from "./User"


const Leaderbourd =(props)=>{
    return(
        <div>
                {console.log (props.sortedUsers)}
            <ul>
            {props.sortedUsers.map((user)=>(
                      <li key={user.id}>
                      {console.log(user)}
                      <User id={user.id}/>
                  </li>
            )
              
            )}
            </ul>
                
                   
                   
        </div>
    )
}

function mapStateToProps({users}) {
    const sortedUsers = (Object.values(users)).sort((a, b) => {
        
        return ((Object.keys(b.answers)).length + b.questions.length)-((Object.keys(a.answers)).length + a.questions.length)
      })
    return {
        sortedUsers
    }
}
export default connect(mapStateToProps)(Leaderbourd);